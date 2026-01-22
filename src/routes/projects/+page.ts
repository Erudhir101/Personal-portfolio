import type { PageLoad } from './$types';
import { projects } from '$lib/projects';

export const load: PageLoad = async () => {
	return { projects };
};
