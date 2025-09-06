<script lang="ts">
	import { Badge, Table } from '@sveltestrap/sveltestrap';
	import { formatDateTime } from '$lib';
	import CenteredContainer from '$lib/components/CenteredContainer.svelte';

	let { data } = $props();
	let releases = data.releases;
</script>

<CenteredContainer>
	<h2 class="text-center">
		Release history
	</h2>

	<p class="my-4">
		Below you can find a list of all tested Connector releases.
	</p>

	<Table bordered responsive>
		<thead>
		<tr>
			<th>Tag</th>
			<th>Release date</th>
			<th>Tests</th>
		</tr>
		</thead>
		<tbody>
		{#each releases as release, index (release.tagName)}
			<tr>
				<td>
					<code>{release.tagName}</code>

					{#if index === 0}
						<Badge color="success">
							Latest
						</Badge>
					{/if}
				</td>
				<td>
					<time datetime={release.created_at}>
						{formatDateTime(release.created_at)}
					</time>
				</td>
				<td>
					<a href={index === 0 ? '/compatibility' : `archive/${release.tagName}`}>
						View
					</a>
				</td>
			</tr>
		{/each}
		</tbody>
	</Table>
</CenteredContainer>