<script lang="ts">
	import ChangelogButton from '$lib/components/mod/ChangelogButton.svelte';
	import DownloadButton from '$lib/components/mod/DownloadButton.svelte';

	interface Props {
		version: string;
	}

	let { version }: Props = $props();
</script>

<div class="d-flex flex-row gap-2">
	<DownloadButton {version} />
	<ChangelogButton {version} />
</div>
