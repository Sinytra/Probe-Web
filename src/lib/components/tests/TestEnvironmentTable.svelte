<script lang="ts">
	import { Table } from '@sveltestrap/sveltestrap';
	import type { TestEnvironment } from '$lib/types';

	interface Props {
		environment: TestEnvironment;
	}

	let { environment }: Props = $props();
</script>

<div class="w-fit">
	<h4 class="mt-0 mb-4">Test environment</h4>

	<Table class="mb-4 fs-7 w-fit" bordered responsive>
		<tbody>
		<tr>
			<th>Connector version</th>
			<td>
				<code>
					<b>{environment.transformerVersion || '-'}</b>
				</code>
			</td>
		</tr>
		<tr>
			<th>Probe runner version</th>
			<td>
				<code>
					{environment.runnerVersion || '-'}
				</code>
			</td>
		</tr>

		<tr>
			<th>Neoform runtime version</th>
			<td>
				<code>
					{environment.neoFormRuntimeVersion}
				</code>
			</td>
		</tr>

		<tr>
			<th>NeoForge version</th>
			<td>
				<code>
					{environment.neoForgeVersion}
				</code>
			</td>
		</tr>

		<tr>
			<th>Game version</th>
			<td>
				<code>
					{environment.gameVersion}
				</code>
			</td>
		</tr>

		<tr>
			<th>Compatible game versions</th>
			<td>
				<code>
					{environment.compatibleGameVersions.join(', ')}
				</code>
			</td>
		</tr>
		</tbody>
	</Table>
</div>