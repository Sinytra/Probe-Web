<script lang="ts">
	import { formatDateTime, getReleaseNameInfo } from '$lib';
	import { Button } from '@sveltestrap/sveltestrap';
	import type { TestedRelease } from '$lib/github';

	interface Props {
		release: TestedRelease | null;
	}

	let { release }: Props = $props();
	let info = release ? getReleaseNameInfo(release.tagName) : null;
</script>

<h2>
	But can it run <i class="serif">this mod</i> ?
</h2>

<p class="my-3">
	Check our <i>automated</i> compatibility test results below to see if your mod is listed.
</p>

<div class="py-2">
	<div class="d-flex flex-column flex-md-row gap-3 justify-content-center">
		<a href="/compatibility">
			<Button color="primary" class="w-100">Latest results</Button>
		</a>

		<a href="/compatibility/archive">
			<Button color="secondary" class="w-100">All versions</Button>
		</a>
	</div>

	<div class="mt-3">
		{#if release && info}
			<div>
				Latest tests: <span class="highlight">{info.version}</span> for Minecraft
				<span class="highlight">{info.mcVersion}</span>
			</div>
			<div>Tested on {formatDateTime(release.created_at)}</div>
		{/if}
	</div>
</div>