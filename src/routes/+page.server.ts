import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const query = gql`
		{
			projects {
				name
				slug
				description
				demo
				sourceCode
				image {
					url
				}
			}
		}
	`;

	const projects = await client.request(query);

	return {
		props: {
			projects
		}
	};
}) satisfies PageServerLoad;
