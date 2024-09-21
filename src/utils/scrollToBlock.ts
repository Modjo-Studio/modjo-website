export default function scrollToBlock(id: string) {
	const scrollTarget = document.getElementById(id);
	const elementPosition = scrollTarget?.getBoundingClientRect().top;

	window.scrollTo({
		left: 0,
		top: elementPosition,
		behavior: 'smooth',
	});
}
