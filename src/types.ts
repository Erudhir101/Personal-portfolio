import type { Component } from 'svelte';

export type MarkdownPost = {
	metadata: {
		title: string;
		publishedAt: string;
		summary: string;
	};
	default: Component;
};

export type Post = {
	title: string;
	publishedAt: string;
	summary: string;
	categories: string[];
	slug: string;
	published: boolean;
};
