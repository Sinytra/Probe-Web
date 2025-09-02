<script lang="ts">
	import type { TestRun } from '$lib/types';
	import { Table } from '@sveltestrap/sveltestrap';
	import { ICON_CHECK, ICON_EXCLAMATION, ICON_WARN, ICON_X } from '$lib';
	import Fa from 'svelte-fa';
	import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

	interface Props {
		runs: TestRun[];
	}

	const { runs }: Props = $props();
</script>

<Table bordered responsive>
	<colgroup>
		<col style="width: 30%;" />
		<col />
		<col />
		<col />
		<col />
	</colgroup>
	<thead>
		<tr>
			<th>Project Slug</th>
			<th>Version</th>
			<th>Mod ID</th>
			<th>Result</th>
			<th>Link</th>
		</tr>
	</thead>
	<tbody>
		{#each runs as run (run.project.projectId)}
			<tr>
				<td class="fw-medium">
					{run.project.slug}
				</td>
				<td>{run.versionNumber}</td>
				<td>
					<code>
						{run.result?.output?.primaryModid || '-'}
					</code>
				</td>
				<td>
					{#if !run.result}
						{ICON_EXCLAMATION} Failed
					{:else}
						<div class="mx-auto px-4">
							<div class="row">
								<div class="col-2 px-0">
									{run.result.output?.success
										? run.result.errors
											? ICON_WARN
											: ICON_CHECK
										: ICON_X}
								</div>
								<div class="col col-10 text-center">
									{run.result.output?.success ? 'Compatible' : 'Incompatible'}
								</div>
							</div>
						</div>
					{/if}
				</td>
				<td>
					<a
						class="mx-2 text-nowrap"
						href="https://modrinth.com/mod/{run.project.projectId}"
						target="_blank"
					>
						Link
						<Fa icon={faArrowUpRightFromSquare} />
					</a>
				</td>
			</tr>
		{/each}
	</tbody>
</Table>
