<script lang="ts">
	import '../app.scss';
	import scriptSrc from 'bootstrap/dist/js/bootstrap.bundle.js?url';
	import favicon from '$lib/assets/connector_logo.png';
	import MainNavbar from '$lib/components/MainNavbar.svelte';
	import { Container } from '@sveltestrap/sveltestrap';
	import MainFooter from '$lib/components/MainFooter.svelte';

	let { children } = $props();

	let title = 'Sinytra Connector';
	let description = 'Run your favourite Fabric mods on NeoForge';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<script src={scriptSrc}></script>

	<meta name="description" content={description} />
	<meta name="og:title" content={title} />
	<meta name="og:description" content={description} />
	<meta name="og:image" content="/banner.png" />
	<meta name="og:image:alt" content={title} />
	<meta name="og:image:type" content="image/png" />
	<meta name="og:image:width" content="1280" />
	<meta name="og:image:height" content="640" />
	<meta name="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="/banner.png" />
	<meta name="twitter:image:alt" content={title} />
	<meta name="twitter:image:type" content="image/png" />
	<meta name="twitter:image:width" content="1280" />
	<meta name="twitter:image:height" content="640" />
</svelte:head>

<MainNavbar />

<main style="min-height: 100vh">
	<Container sm>
		{@render children?.()}
	</Container>
</main>

<MainFooter />
