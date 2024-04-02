window.addEventListener("load", () => {
	const cards = document.querySelectorAll("body > div");
	for (const card of cards) {
		card.addEventListener("mouseenter", (e) => {
			const boundingBox = card.getBoundingClientRect();
			const mrx =  (e.x - boundingBox.x) / boundingBox.width;
			const mry =  (e.y - boundingBox.y) / boundingBox.height;
			card.style.transform = `skew(${mrx}deg, ${mry}deg)`
		}, true)
		card.addEventListener("mouseleave", (e) => {
			card.style.transform = ``;
		})
	}
})
