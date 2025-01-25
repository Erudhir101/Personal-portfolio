export function formatDate(dateString: string, language = 'en') {
	const date = new Date(dateString);

	if (isNaN(date.getTime())) {
		throw new Error('Invalid date string');
	}

	const weekDay = new Intl.DateTimeFormat(language, { weekday: 'long' }).format(date);
	const day = String(date.getDate()).padStart(2, '0');
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const year = date.getFullYear();

	return `${weekDay}, ${day}/${month}/${year}`;
}
