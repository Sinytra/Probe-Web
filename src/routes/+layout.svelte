<script lang="ts">
	import '../app.scss';
	import favicon from '$lib/assets/connector_logo.png';
	import MainNavbar from '$lib/components/MainNavbar.svelte';
	import { Container } from '@sveltestrap/sveltestrap';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<MainNavbar />

<main>
	<Container sm>
		{@render children?.()}
	</Container>
</main>

<footer></footer>
