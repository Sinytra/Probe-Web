<script>
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import CurseForgeIcon from '$lib/icons/CurseForgeIcon.svelte';
	import Fa from 'svelte-fa';
	import { Button } from '@sveltestrap/sveltestrap';
	import ModrinthIcon from '$lib/icons/ModrinthIcon.svelte';
</script>

<h2>
	Downloads
</h2>

<p class="my-4">
	Connector is available for download on all major platforms as well as on its GitHub repository.
</p>

<div class="my-4 py-2 d-flex flex-column flex-md-row gap-3 justify-content-center">
	<a href="https://modrinth.com/mod/connector">
		<Button class="button-modrinth w-100">
			<ModrinthIcon class="me-1" />
			Modrinth
		</Button>
	</a>
	<a href="https://www.curseforge.com/minecraft/mc-mods/sinytra-connector">
		<Button class="button-curseforge w-100">
			<CurseForgeIcon class="me-1" />
			CurseForge
		</Button>
	</a>
	<a href="https://github.com/Sinytra/Connector/releases">
		<Button class="button-github w-100">
			<Fa icon={faGithub} class="me-1" />
			GitHub
		</Button>
	</a>
</div>