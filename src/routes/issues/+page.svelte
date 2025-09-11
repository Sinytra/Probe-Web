<script lang="ts">
	import { building } from '$app/environment';
	import { page } from '$app/state';
	import CenteredContainer from '$lib/components/CenteredContainer.svelte';
	import { Button } from '@sveltestrap/sveltestrap';
	import { CONNECTOR_ISSUE_TRACKER } from '$lib';

	let destination: string | null = building ? null : page.url.searchParams.get('redirect_to');
</script>

<CenteredContainer>
	<h1 class="text-center mb-5">Redirect warning</h1>

	<p>
		It appears you are trying to access the issue tracker for a mod that is
		<b>running on Connector</b>.
	</p>

	<p>
		In these cases, <b>issues should be reported to Connector itself</b> rather than the mod
		author, unless otherwise explictly stated.
	</p>

	<p>
		The original link to the issue tracker is as follows. Click one of the buttons below to
		continue or to open Connector's issue tracker instead <i>(recommended)</i>.
	</p>

	<p class="mt-5 fw-semibold text-center">
		{destination}
	</p>

	<div class="d-flex flex-row gap-2 justify-content-center mt-5">
		<a href={CONNECTOR_ISSUE_TRACKER}>
			<Button color="primary">
				Report to Connector
			</Button>
		</a>
		<a href={destination}>
			<Button color="secondary">
				Continue to page
			</Button>
		</a>
	</div>
</CenteredContainer>