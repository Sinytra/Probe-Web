<script lang="ts">
	import { Table } from '@sveltestrap/sveltestrap';
	import type { TestReport } from '$lib/types';
	import { formatDateTime, formatSeconds } from '$lib';

	interface Props {
		report: TestReport;
	}

	let { report }: Props = $props();
	let { durationSeconds, testedAt, environment } = report;
	let testCount = report.results.length;
</script>

<Table class="mb-4 fs-7 w-auto" bordered responsive>
	<tbody>
	<tr>
		<th>Connector transformer version</th>
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

	<tr>
		<th>Test sample size</th>
		<td>
			<code>
				{testCount}
			</code>
		</td>
	</tr>

	<tr>
		<th>Duration</th>
		<td>
			{formatSeconds(durationSeconds)}
		</td>
	</tr>

	<tr>
		<th>Test date</th>
		<td>
			{formatDateTime(testedAt)}
		</td>
	</tr>
	</tbody>
</Table>