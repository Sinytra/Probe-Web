<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Col, Container, Row } from '@sveltestrap/sveltestrap';

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className, children }: Props = $props();
</script>

<Container md class={className}>
	<Row>
		<Col xl={{ size: 8, offset: 2 }} lg={{ size: 10, offset: 1 }}>
			{@render children?.()}
		</Col>
	</Row>
</Container>