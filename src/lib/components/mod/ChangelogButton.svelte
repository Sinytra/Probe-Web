<script lang="ts">
	import { faFileText } from '@fortawesome/free-solid-svg-icons';
	import { Button } from '@sveltestrap/sveltestrap';
	import Fa from 'svelte-fa';

	interface Props {
		version: string;
	}

	let { version }: Props = $props();
</script>

<a href="https://github.com/Sinytra/Connector/releases/tag/{version}">
	<Button color="secondary">
		<Fa icon={faFileText} />
		Read changelog
	</Button>
</a>
