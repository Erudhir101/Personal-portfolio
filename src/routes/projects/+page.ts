import type { PageLoad } from './$types';
import { allPosts } from 'content-collections';

export const load: PageLoad = async () => {
	const posts = allPosts.toSorted((a, b) => b.created_date.getTime() - a.created_date.getTime());

	return { posts };
};
