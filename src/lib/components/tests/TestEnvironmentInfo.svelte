<script lang="ts">
	import type { TestReport } from '$lib/types';
	import TestSummaryTable from '$lib/components/tests/TestSummaryTable.svelte';
	import TestEnvironmentTable from '$lib/components/tests/TestEnvironmentTable.svelte';
	import { Col, Container, Row } from '@sveltestrap/sveltestrap';

	interface Props {
		report: TestReport;
	}

	let { report }: Props = $props();
	let { duration_seconds, tested_at, environment } = report;
	let testCount = report.results.length;

	let compatibleCount = report.results.filter(r => r.result?.output?.success === true).length;
	let incompatibleCount = report.results.filter(r => !r.result || r.result?.output?.success === false).length;
	let errorCount = report.results.filter(r => r.result?.errors === true).length;
</script>

<Container fluid>
	<Row class="justify-content-between gap-2">
		<Col class="px-0 col-auto">
			<TestSummaryTable {compatibleCount} {incompatibleCount} {errorCount} durationSeconds={duration_seconds}
												testedAt={tested_at} {testCount} />
		</Col>
		<Col class="px-0 col-auto">
			<TestEnvironmentTable {environment} />
		</Col>
	</Row>
</Container>
