["h1", "span", "span", "svg", ".button", ".post-entry", "h2", "p", "blockquote", ".profile img"].forEach((e, index) => {
	setTimeout(
	() => {document.querySelectorAll(e).forEach((i) => {
		i.style.opacity = "1";
		i.style.filter = "blur(0px)";
		i.style.transform = "translateY(0rem)";
	})}, index*400);	
});

