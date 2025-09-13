<script lang="ts">
	import { formatDateTime, formatSeconds } from '$lib';
	import { Table } from '@sveltestrap/sveltestrap';

	interface Props {
		compatibleCount: number;
		incompatibleCount: number;
		errorCount: number;

		durationSeconds: number;
		testedAt: string;
		testCount: number;
	}

	let {
		compatibleCount,
		incompatibleCount,
		errorCount,
		durationSeconds,
		testedAt,
		testCount
	}: Props = $props();
</script>

<div class="w-fit">
	<h4 class="mt-0 mb-4">Summary</h4>

	<Table class="mb-4 fs-7 w-fit" bordered responsive>
		<tbody>
			<tr>
				<th>✅ Compatible</th>
				<td>
					<code>
						<b>{compatibleCount}</b>
					</code>
				</td>
			</tr>

			<tr>
				<th>❌ Incompatible</th>
				<td>
					<code>
						<b>{incompatibleCount}</b>
					</code>
				</td>
			</tr>

			<tr>
				<th>⚠️ Has errors</th>
				<td>
					<code>
						<b>{errorCount}</b>
					</code>
				</td>
			</tr>

			<tr>
				<th>📋 Total</th>
				<td>
					<code>
						<b>{testCount}</b>
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
</div>
