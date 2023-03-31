<script lang="ts">
	import ProjectCard from '$lib/components/project-card.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	const { projects } = data.props;
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52">
	{#each projects as { name, slug, description }, index}
		<ProjectCard {name} {description} {index} {slug} />
	{/each}
</div>
