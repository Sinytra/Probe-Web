<script>
	import { faBook, faHammer } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
</script>

<h2 class="mb-4">Learn more</h2>

<div class="text-start py-2">
	<h6 class="mb-3">
		<Fa icon={faBook} />
		Configuration
	</h6>

	<p class="text-start mb-4 pb-3">
		Read our official documentation at <a href="https://moddedmc.wiki/en/project/connector"
			>moddedmc.wiki</a
		> to find out more about available configuration options and developer guides.
	</p>

	<h6 class="mb-3">
		<Fa icon={faHammer} />
		Cross-platform mod development
	</h6>

	<p class="text-start">
		Interested in <i>hassle-free</i> cross-platform mod development as a Fabric developer? Check out
		the <a href="https://modrinth.com/mod/forgified-fabric-api">Forgified Fabric API</a>, our port
		of the Fabric API to NeoForge.
	</p>

	<p>
		With the Forgified Fabric API, you can bring your mod to NeoForge <i>natively</i> without relying
		on Connector, using the Fabric APIs you're already familiar with.
	</p>
</div>
