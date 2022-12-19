/*
let body = document.getElementsByTagName("body")[0];
const namespace = "http://www.w3.org/2000/svg";
let svg = document.createElementNS(namespace, "svg");
svg.setAttribute("width", "100%");
svg.setAttribute("height", "100%");
const rect = document.createElementNS(namespace, "rect");
rect.setAttribute("x", "0");
rect.setAttribute("y", "0");
rect.setAttribute("width", "10vh");
rect.setAttribute("height", "10vh");
rect.setAttribute("fill", "red");
svg.appendChild(rect);
svg.style.display = "block";
svg.style.position = "fixed";
svg.style.top = "0px";
body.appendChild(svg);
*/
["h1", "span", "span", "svg", ".button", ".post-entry", "h2", "p", "blockquote", ".profile img"].forEach((e, index) => {
	setTimeout(
	() => {document.querySelectorAll(e).forEach((i) => {
		i.style.opacity = "1";
		i.style.filter = "blur(0px)";
		i.style.transform = "translateY(0rem)";
	})}, index*400);	
});

