<script lang="ts">
	import type { PageProps } from './$types';
	import TestResultsTable from '$lib/components/tests/TestResultsTable.svelte';
	import TestEnvironmentInfo from '$lib/components/tests/TestEnvironmentInfo.svelte';
	import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
	import TestAccuracyNotice from '$lib/components/tests/TestAccuracyNotice.svelte';
	import { getReleaseNameInfo } from '$lib';
	import CenteredContainer from '$lib/components/CenteredContainer.svelte';
	import ModButtons from '$lib/components/mod/ModButtons.svelte';
	import Fa from 'svelte-fa';

	let { data }: PageProps = $props();
	let { report, tagName } = data;
	let info = getReleaseNameInfo(tagName);
</script>

<div class="mx-auto">
	<CenteredContainer>
		<h2 class="text-center mb-4">Mod compatibility test results</h2>

		<p>Below you can find mod compatibility test results for the latest release of Connector.</p>

		<p>
			The tests were conducted on Connector version <code>{info.version}</code>, built for Minecraft
			<code>{info.mcVersion}</code>.
		</p>

		<div class="mb-4">
			<div class="mb-3">
				<ModButtons version={tagName} />
			</div>

			<p class="bg-body-secondary p-1 px-2 rounded-1 border w-fit">
				<Fa icon={faClockRotateLeft} />
				Looking for older test results? Browse the
				<a href="compatibility/archive">release history</a>.
			</p>
		</div>

		<div class="mb-4">
			<TestAccuracyNotice />
		</div>

		<h4 class="mb-4">Test environment</h4>

		<TestEnvironmentInfo {report} />
	</CenteredContainer>

	<h4 class="mb-4">Test results</h4>

	<TestResultsTable runs={report.results} />
</div>
