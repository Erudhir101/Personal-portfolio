import { json } from '@sveltejs/kit';
import type { Post } from '../../../types';

async function getPosts() {
	let posts: Post[] = [];

	const paths = import.meta.glob('../../../lib/postsBlog/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			posts.push(post);
		}
	}

	posts = posts.sort(
		(f, s) => new Date(s.publishedAt).getTime() - new Date(f.publishedAt).getTime()
	);
	return posts;
}
export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
