<script lang="ts">
	import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import clsx from 'clsx';
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		href: string;
		target?: string;
		children: Snippet;
	}

	let { href, target, class: className, children }: Props = $props();
</script>

<a
	class={clsx('mx-2 text-nowrap', className)}
	{href}
	{target}
>
	{@render children?.()}
	<Fa icon={faArrowUpRightFromSquare} />
</a>