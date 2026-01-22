import Ifrutas from './assets/IFrutas(logo).png';
import Techfind from './assets/TechFind(logo).png';

export type Tags =
	| 'Back End'
	| 'Front End'
	| 'Full Stack'
	| 'java'
	| 'javascript'
	| 'markdown'
	| 'next.js'
	| 'postgreSQL'
	| 'react'
	| 'react native'
	| 'mobile'
	| 'supabase'
	| 'svelte'
	| 'typescript';

export type Project = {
	title: string;
	description: string;
	img: string;
	link: string;
	tags: Tags[];
};

export const projects: Project[] = [
	{
		title: 'TechFind',
		description: 'projeto pessoal.',
		img: Techfind,
		link: 'https://teste.com',
		tags: ['svelte', 'Full Stack', 'javascript', 'typescript', 'supabase']
	},

	{
		title: 'IFrutas',
		description: 'projeto de Ifood de frutas.',
		img: Ifrutas,
		link: 'https://frutas.com',
		tags: ['react native', 'Full Stack', 'mobile', 'javascript', 'typescript', 'supabase']
	}
];
