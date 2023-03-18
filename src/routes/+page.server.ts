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

	const response = await client.request(query);

	return {
		projects: {
			response
		}
	};
}) satisfies PageServerLoad;
