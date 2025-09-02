<script lang="ts">
	import type { PageProps } from './$types';
	import TestResultsTable from '$lib/components/TestResultsTable.svelte';

	let { data }: PageProps = $props();
</script>

<div class="text-center mx-auto">
	<h2>Latest relese test results</h2>

	<p>Connector beta 8, built for Minecraft 1.21.1</p>

	<TestResultsTable runs={data.runs} />
</div>
