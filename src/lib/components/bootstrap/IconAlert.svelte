<script lang="ts">
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	import type { Snippet } from 'svelte';
	import Fa from 'svelte-fa';

	interface Props {
		icon: IconDefinition;
		color: string;
		children: Snippet;
	}

	let { icon, color, children }: Props = $props();
</script>

<div class="alert d-flex align-items-center {`alert-${color}`}" role="alert">
	<Fa {icon} class="me-2" />
	<div>
		{@render children?.()}
	</div>
</div>
