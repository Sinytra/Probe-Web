<script lang="ts">
	import { DISCORD_LINK, GITHUB_LINK_CONNECTOR } from '$lib';
</script>

<h5 class="mb-3">How it works</h5>

<p>
	Mod compatibility is determined by running Connector's code transformations on the mod jar file
	and validating the results. This process runs <i>outside of the game</i> using a dedicated
	command-line tool, which is part of the Connector mod compatibility checker -
	<a href="https://github.com/Sinytra/Probe">Probe</a> project.
</p>

<p>
	As such, it is possible that despite the jar being successfully patched, there are still remaining
	issues that will only trigger in game, either during startup or when loading into a world.
</p>

<p>
	While we are actively trying to improve our tests' accuracy, there <i>will</i> always be false positives
	mixed in.
</p>

<h6 class="mb-3">Reporting issues</h6>

<p>
	If you find any of these test results to be incorrect, please open an issue for the mod in
	question on
	<a href={GITHUB_LINK_CONNECTOR}>GitHub</a> or ask our community on
	<a href={DISCORD_LINK}>Discord</a> for possible fixes.
</p>
