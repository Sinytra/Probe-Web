<script lang="ts">
	import type { PageProps } from './$types';
	import TestResultsTable from '$lib/components/tests/TestResultsTable.svelte';
	import TestEnvironmentInfo from '$lib/components/tests/TestEnvironmentInfo.svelte';
	import { faWarning } from '@fortawesome/free-solid-svg-icons';
	import IconAlert from '$lib/components/bootstrap/IconAlert.svelte';
	import { getReleaseNameInfo } from '$lib';
	import TestAccuracyNotice from '$lib/components/tests/TestAccuracyNotice.svelte';
	import CenteredContainer from '$lib/components/CenteredContainer.svelte';
	import ModButtons from '$lib/components/mod/ModButtons.svelte';

	let { data }: PageProps = $props();
	let { report, version } = data;
	let info = getReleaseNameInfo(version);
</script>

<div class="mx-auto">
	<CenteredContainer>
		<IconAlert icon={faWarning} color="secondary">
			You are viewing mod compatibility test results for an <b>outdated version</b> of Connector.
			Click <a href="/compatibility">here</a> to see the latest results.
		</IconAlert>

		<h2 class="text-center mb-4">Mod compatibility test results</h2>

		<p>
			Below you can find mod compatibility test results for Connector version <code>{version}</code
			>.
		</p>

		<p class="mb-4">
			The tests were conducted on Connector version <code>{info.version}</code>, built for Minecraft
			<code>{info.mcVersion}</code>.
		</p>

		<div class="mb-4">
			<ModButtons {version} />
		</div>

		<TestAccuracyNotice />

		<h4 class="mb-4">Test environment</h4>

		<TestEnvironmentInfo {report} />
	</CenteredContainer>

	<h4 class="mb-4">Test results</h4>

	<TestResultsTable runs={report.results} />
</div>
