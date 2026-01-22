import { rehypeCopyButton } from './src/lib/rehype-copy-button.js';
import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMarkdown } from '@content-collections/markdown';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import { z } from 'zod';

const posts = defineCollection({
	name: 'posts',
	directory: 'content/posts',
	include: '**/*.md',
	schema: z.object({
		title: z.string().min(1),
		summary: z.string().optional(),
		created_date: z.coerce.date(),
		author: z.string()
	}),
	transform: async (doc, context) => {
		const html = await compileMarkdown(context, doc, {
			remarkPlugins: [remarkGfm, remarkMath],
			rehypePlugins: [
				rehypeCopyButton,
				[
					rehypePrettyCode,
					{
						theme: 'dracula',
						keepBackground: true
					}
				]
			]
		});
		return {
			...doc,
			id: doc._meta.path,
			html
		};
	}
});

export default defineConfig({
	collections: [posts]
});
