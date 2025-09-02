<script lang="ts">
	import {
		Collapse,
		NavbarToggler,
		NavbarBrand,
		Nav,
		Navbar,
		NavItem,
		NavLink
	} from '@sveltestrap/sveltestrap';
	import Fa from 'svelte-fa';
	import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
	import OpenCollectiveIcon from '$lib/icons/OpenCollectiveIcon.svelte';
	import ConnectorLogo from '$lib/assets/connector_logo.png';
	import { beforeNavigate } from '$app/navigation';

	let isOpen = false;

	beforeNavigate(() => {
		isOpen = false;
	});

	function handleUpdate(event: CustomEvent<boolean>) {
		isOpen = event.detail;
	}
</script>

<Navbar color="warning-subtle" light expand="md" container="md" fixed="top">
	<img alt="Logo" src={ConnectorLogo} width="40px" class="d-none d-md-block me-md-2" />
	<NavbarBrand class="fw-semibold" href="/">Sinytra Connector</NavbarBrand>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />

	<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
		<Nav class="ms-auto" navbar>
			<NavItem>
				<NavLink href="/latest">Latest</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/">Releases</NavLink>
			</NavItem>

			<NavItem>
				<NavLink href="/">About</NavLink>
			</NavItem>

			<NavItem class="py-2">
				<div class="vr d-none d-md-flex h-100 mx-2"></div>
				<hr class="d-md-none my-2" />
			</NavItem>

			<NavItem>
				<NavLink href="https://github.com/Sinytra/Connector">
					<Fa icon={faGithub} size="lg" />
					<span class="ms-1 d-md-none">GitHub</span>
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="https://discord.sinytra.org">
					<Fa icon={faDiscord} size="lg" />
					<span class="ms-1 d-md-none">Discord</span>
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink
					class="d-md-flex flex-column justify-content-center"
					style="height: 43px"
					href="https://opencollective.com/sinytra"
				>
					<OpenCollectiveIcon />
					<span class="ms-1 d-md-none">Open Collective</span>
				</NavLink>
			</NavItem>
		</Nav>
	</Collapse>
</Navbar>
