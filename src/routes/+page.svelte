<script lang="ts">
	import { Button, Col, Container, Row } from '@sveltestrap/sveltestrap';
</script>

<div class="text-center mx-auto">
	<div class="mb-3">
		<h1 class="heading">Sinytra Connector</h1>

		<hr class="mx-auto divider-short" />

		<span class="subheading"> Run your favourite Fabric mods on NeoForge </span>
	</div>

	<Container md>
		<Row>
			<Col xl={{ size: 8, offset: 2 }} lg={{ size: 10, offset: 1 }}>
				<p class="my-4 text-start">
					<b>Sinytra Connector</b> is a <i>compatibility layer</i> that allows running <i>Fabric</i>
					mods on <i>NeoForge</i>. Its goal is to bring the two platforms closer together, saving
					developers time and effort maintaining their mods for multiple platforms at once, as well
					as allowing players to play <i>all their favourite mods</i> in one modpack.
				</p>

				<hr class="my-4" />

				<h2>
					But can it run <i class="serif">this mod</i> ?
				</h2>

				<p class="my-4">
					Check our <i>automated</i> compatibility test results below to see if your mod is listed.
				</p>

				<div class="py-2">
					<div class="d-flex flex-column flex-md-row gap-3 justify-content-center">
						<a href="/latest">
							<Button color="primary" class="w-100">Latest results</Button>
						</a>

						<Button color="secondary">All versions</Button>
					</div>

					<div class="mt-3">
						<div>
							Latest tests: <span class="highlight">v2.0.0 beta 8</span> for Minecraft
							<span class="highlight">1.21.1</span>
						</div>
						<div>Tested on 02.09.2025 14:42</div>
					</div>
				</div>
			</Col>
		</Row>
	</Container>
</div>
