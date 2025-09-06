<script lang="ts">
	import { Button } from '@sveltestrap/sveltestrap';
	import CenteredContainer from '$lib/components/CenteredContainer.svelte';
	import { formatDateTime, getReleaseNameInfo } from '$lib';

	let { data } = $props();
	let { latest } = data;
	let info = latest ? getReleaseNameInfo(latest.tagName) : null;
</script>

<div class="text-center mx-auto">
	<div class="mb-3">
		<h1 class="heading">Sinytra Connector</h1>

		<hr class="mx-auto divider-short" />

		<span class="subheading">Run your favourite Fabric mods on NeoForge</span>
	</div>

	<CenteredContainer>
		<p class="my-4 text-start">
			<b>Sinytra Connector</b> is a <i>compatibility layer</i> that allows running <i>Fabric</i>
			mods on <i>NeoForge</i>. Its goal is to bring the two platforms closer together, saving
			developers time and effort maintaining their mods for multiple platforms at once, as well as
			allowing players to play <i>all their favourite mods</i> in one modpack.
		</p>

		<hr class="my-4" />

		<h2>
			But can it run <i class="serif">this mod</i> ?
		</h2>

		<p class="my-4">
			Check our <i>automated</i> compatibility test results below to see if your mod is listed.
		</p>

		<div class="py-2">
			<div class="d-flex flex-column flex-md-row gap-3 justify-content-center">
				<a href="/compatibility">
					<Button color="primary" class="w-100">Latest results</Button>
				</a>

				<a href="/compatibility/archive">
					<Button color="secondary">All versions</Button>
				</a>
			</div>

			<div class="mt-3">
				{#if latest && info}
					<div>
						Latest tests: <span class="highlight">{info.version}</span> for Minecraft
						<span class="highlight">{info.mcVersion}</span>
					</div>
					<div>Tested on {formatDateTime(latest.created_at)}</div>
				{/if}
			</div>
		</div>
	</CenteredContainer>
</div>
