<script lang="ts">
	import type { TestRun } from '$lib/types';
	import { Table } from '@sveltestrap/sveltestrap';
	import { ICON_CHECK, ICON_WARN, ICON_X } from '$lib';
	import LinkOut from '$lib/components/LinkOut.svelte';

	interface Props {
		runs: TestRun[];
	}

	const { runs }: Props = $props();
</script>

<Table bordered responsive>
	<colgroup>
		<col />
		<col style="width: 30%;" />
		<col />
		<col />
		<col />
		<col />
	</colgroup>
	<thead>
		<tr>
			<th>Icon</th>
			<th>Project</th>
			<th>Version</th>
			<th>Mod ID</th>
			<th>Result</th>
			<th>Link</th>
		</tr>
	</thead>
	<tbody>
		{#each runs as run (run.project.id)}
			<tr>
				<td style="width: 40px; text-align: center">
					<img alt={run.project.slug} src={run.project.iconUrl} height="32px" />
				</td>
				<td class="fw-medium">
					{run.project.name}
				</td>
				<td>{run.versionNumber}</td>
				<td>
					<code>
						{run.result?.output?.primaryModid || '-'}
					</code>
				</td>
				<td>
					<div class="mx-auto px-4">
						<div class="row">
							<div class="col-2 px-0">
								{run.result && run.result.output?.success
									? run.result.errors
										? ICON_WARN
										: ICON_CHECK
									: ICON_X}
							</div>
							<div class="col col-10 text-center">
								{run.result?.output?.success ? 'Compatible' : 'Incompatible'}
							</div>
						</div>
					</div>
				</td>
				<td>
					<LinkOut href="https://modrinth.com/mod/{run.project.slug}" target="_blank">Link</LinkOut>
				</td>
			</tr>
		{/each}
	</tbody>
</Table>
