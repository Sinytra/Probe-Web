<script lang="ts">
	import CenteredContainer from '$lib/components/CenteredContainer.svelte';
	import ConnectorLogo from '$lib/assets/connector_logo.png';
	import ModDownloads from '$lib/components/landing/ModDownloads.svelte';
	import ModCompatibility from '$lib/components/landing/ModCompatibility.svelte';
	import ModLearnMore from '$lib/components/landing/ModLearnMore.svelte';

	let { data } = $props();
	let { latest } = data;
</script>

<div class="text-center mx-auto">
	<img src={ConnectorLogo} alt="Connector logo" height="128px" />

	<div class="mb-3">
		<h1 class="heading">Sinytra Connector</h1>

		<hr class="mx-auto divider-short" />

		<span class="subheading">Run your favourite Fabric mods on NeoForge</span>
	</div>

	<CenteredContainer>
		<p class="my-4 text-start">
			<b>Sinytra Connector</b> is a <i>compatibility layer</i> that allows running <i>Fabric</i>
			mods on <i>NeoForge</i>.
		</p>

		<p class="text-start">
			Its goal is to bring the two platforms closer together, saving
			developers time and effort maintaining their mods for multiple platforms at once, as well as
			allowing players to play <i>all their favourite mods</i> in one modpack.
		</p>

		<hr class="my-4" />

		<ModCompatibility release={latest} />

		<hr class="my-4" />

		<ModDownloads />

		<hr class="my-4" />

		<ModLearnMore />

	</CenteredContainer>
</div>
