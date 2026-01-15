import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { allPosts } from 'content-collections';

export const load: PageLoad = ({ params }) => {
	const post = allPosts.find((post) => post.id == params.id);
	if (!post) error(404, 'page not found');
	return { post };
};
