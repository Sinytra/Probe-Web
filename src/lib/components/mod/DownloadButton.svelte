<script lang="ts">
	import { faDownload } from '@fortawesome/free-solid-svg-icons';
	// noinspection ES6UnusedImports
	import Fa from 'svelte-fa';
	import { Button } from '@sveltestrap/sveltestrap';
	import modrinth from '$lib/api/modrinth';

	interface Props {
		version: string;
	}

	let { version }: Props = $props();
</script>

<a href={modrinth.getVersionURL('connector', version)}>
	<Button color="primary">
		<Fa icon={faDownload} />
		Download mod
	</Button>
</a>
