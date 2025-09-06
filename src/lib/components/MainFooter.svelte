<script lang="ts">
	import SinytraLogo from '$lib/assets/sinytra_logo.png';
	import { NavItem, NavLink } from '@sveltestrap/sveltestrap';
</script>

<div class="container">
	<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
		<div class="text-nowrap me-auto">
			<p class="col-md-4 mb-0 text-body-secondary">© 2025 Sinytra</p>
			<span class="small">This website is <a href="https://github.com/Sinytra/Probe-Web">open source</a>.</span>
		</div>

		<a
			href="/"
			class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
			aria-label="Sinytra Logo"
		>
			<img alt="Sinytra Logo" src={SinytraLogo} height="43px" />
		</a>

		<ul class="nav col-md-4 justify-content-end">
			<NavItem>
				<NavLink href="/" class="px-2 text-body-secondary">Home</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/compatibility" class="px-2 text-body-secondary">Compatibility</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/compatibility/archive" class="px-2 text-body-secondary">
					All releases
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/about" class="px-2 text-body-secondary">About</NavLink>
			</NavItem>
		</ul>
	</footer>
</div>
