<script lang="ts">
	import { faDownload } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { Button } from '@sveltestrap/sveltestrap';

	interface Props {
		version: string;
	}

	let { version }: Props = $props();
</script>

<a href="https://modrinth.com/mod/connector/version/{version}">
	<Button color="primary">
		<Fa icon={faDownload} />
		Download mod
	</Button>
</a>
