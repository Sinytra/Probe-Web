<script lang="ts">
	import CenteredContainer from '$lib/components/CenteredContainer.svelte';

	let { children } = $props();
</script>

<CenteredContainer class="prose">
	{@render children?.()}
</CenteredContainer>
