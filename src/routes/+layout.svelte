<script lang="ts">
	import '../app.scss';
	import scriptSrc from 'bootstrap/dist/js/bootstrap.bundle.js?url';
	import favicon from '$lib/assets/connector_logo.png';
	import MainNavbar from '$lib/components/MainNavbar.svelte';
	import { Container } from '@sveltestrap/sveltestrap';
	import MainFooter from '$lib/components/MainFooter.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<script src={scriptSrc}></script>
</svelte:head>

<MainNavbar />

<main style="min-height: 100vh">
	<Container sm>
		{@render children?.()}
	</Container>
</main>

<MainFooter />
