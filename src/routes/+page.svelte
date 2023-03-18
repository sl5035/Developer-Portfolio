<script lang="ts">
	import ProjectCard from '$lib/components/project-card.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	const { projects } = data.props.projects;
</script>

<h1>Recent Projects by Robin</h1>

<div>
	{#each projects as { name, slug, description, image }}
		<ProjectCard {name} {description} url={image[0].url} {slug} />
	{/each}
</div>
