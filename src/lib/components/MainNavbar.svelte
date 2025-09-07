<script lang="ts">
	import {
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
	import { onMount } from 'svelte';

	let collapse: HTMLDivElement;
	let bootstrap: typeof import('bootstrap');

	onMount(async () => {
		bootstrap = await import('bootstrap');
	});

	beforeNavigate(async () => {
		bootstrap?.Collapse.getOrCreateInstance(collapse, { toggle: false })?.hide();
	});
</script>

<Navbar color="warning-subtle" light expand="md" container="md" fixed="top">
	<img alt="Logo" src={ConnectorLogo} width="40px" class="d-none d-md-block me-md-2" />
	<NavbarBrand class="fw-bold" style="color: #404040;" href="/">Sinytra Connector</NavbarBrand>
	<NavbarToggler
		data-bs-toggle="collapse"
		data-bs-target="#navbarNav"
		aria-controls="navbarNav"
		aria-expanded="false"
		aria-label="Toggle navigation"
	/>

	<div bind:this={collapse} class="collapse navbar-collapse" id="navbarNav">
		<Nav class="ms-auto" navbar>
			<NavItem>
				<NavLink href="/compatibility">Compatibility</NavLink>
			</NavItem>

			<NavItem>
				<NavLink href="https://moddedmc.wiki/en/project/connector">Docs</NavLink>
			</NavItem>

			<NavItem>
				<NavLink href="/about">About</NavLink>
			</NavItem>

			<NavItem>
				<NavLink href="/faq">FAQ</NavLink>
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
	</div>
</Navbar>
