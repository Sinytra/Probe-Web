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
					<b>{environment.transformer_version || '-'}</b>
				</code>
			</td>
		</tr>
		<tr>
			<th>Probe runner version</th>
			<td>
				<code>
					{environment.runner_version || '-'}
				</code>
			</td>
		</tr>

		<tr>
			<th>Neoform runtime version</th>
			<td>
				<code>
					{environment.neoform_runtime_version}
				</code>
			</td>
		</tr>

		<tr>
			<th>NeoForge version</th>
			<td>
				<code>
					{environment.neoforge_version}
				</code>
			</td>
		</tr>

		<tr>
			<th>Game version</th>
			<td>
				<code>
					{environment.game_version}
				</code>
			</td>
		</tr>

		<tr>
			<th>Compatible game versions</th>
			<td>
				<code>
					{environment.compatible_game_versions.join(', ')}
				</code>
			</td>
		</tr>
		</tbody>
	</Table>
</div>