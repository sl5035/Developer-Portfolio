import { client } from '$lib/graphql-client';
import { authorsQuery, projectsQuery } from '$lib/graphql-queries';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const [authorReq, projectsReq] = await Promise.all([
		client.request(authorsQuery),
		client.request(projectsQuery)
	]);

	const { authors } = authorReq;
	const { projects } = projectsReq;

	return {
		props: {
			projects,
			authors
		}
	};
}) satisfies PageServerLoad;
