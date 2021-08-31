var mouseX = 0;
var mouseY = 0;
function onLoad() {
	canvas_s = document.getElementById("back-static");
	c_s = canvas_s.getContext("2d");
	canvas_d = document.getElementById("back-dynamic");
	c_d = canvas_s.getContext("2d");
	points = [];
	grid = [];
	for (i = 0; i < 8; i++) {
		points.push({x: 0, y: 0});
	}
	for (i = 0; i < 625; i++) {
		grid.push({x:0, y:0});
	}
	refresh();
}

function refresh() {
	canvas_s.width = window.innerWidth;
	canvas_s.height = window.innerHeight;
	c_s = canvas_s.getContext("2d");
	c_s.strokeStyle = "#ffffff";
	c_s.shadowBlur = 5;
	c_s.shadowColor = "rgba(25, 50, 255, 255)"

	canvas_d.width = window.innerWidth;
	canvas_d.height = window.innerHeight;
	c_d = canvas_d.getContext("2d");
	c_d.strokeStyle = "#ffffff";
	c_d.shadowBlur = 5;
	c_d.shadowColor = "rgba(25, 50, 255, 255)"
	let index = Math.round(Math.sqrt(grid.length));
	for (i = 0; i < index; i++) {
		for (j = 0; j < index; j++) {
			grid[i*index+j].x = i*canvas_s.width/(index-1);
			grid[i*index+j].y = j*canvas_s.height/(index-1);
		}
	}
	changeGrid();
	draw(mouseX, mouseY);
}

function genBg() {
	c_s.beginPath();
	let index = Math.round(Math.sqrt(grid.length));
	for (i = 0; i < grid.length; i++) {
		const p = grid[i];
		var b, l;
		if (i+1 < grid.length) {
			b = grid[i+1];
		} else {
			b = {x: p.x, y: p.y+canvas_s.height/index};
		}
		if (i + index < grid.length) {
			l = grid[i+index];
		} else {
			l = {x: p.x+canvas_s.width/index, y: p.y};
		}
		if (i%index == index-1) {
			continue;
		}
		c_s.moveTo(p.x, p.y);
		c_s.lineTo(b.x, b.y);
		c_s.moveTo(p.x, p.y);
		c_s.lineTo(l.x, l.y);
	}
	c_s.stroke();

}

function draw(mx, my) {
	for (const p of points) {
		c_d.beginPath();
		c_d.moveTo(p.x, p.y);
		c_d.lineTo(mx, my);
		c_d.stroke();
	}
}

function dist(a, b = {x:0, y:0}) {
	return Math.sqrt((b.x-a.x)*(b.x-a.x)+(b.y-a.y)*(b.y-a.y));
}

function mouseMove(e) {
	mouseX = event.clientX;
	mouseY = event.clientY;
	mousePos = {x:mouseX, y: mouseY};
	for (i = 0; i < points.length; i++) {
		if (dist(mousePos, points[i]) > 60) {
			let p = points[i];

			p.x = Math.random()*80 - 40 + mouseX;
			p.y = Math.random()*80 - 40 + mouseY;
		}
	}
	c_d.clearRect(0, 0, canvas_d.width, canvas_d.height);
	draw(mouseX, mouseY);
}

function changeGrid() {
	c_s.beginPath();
	let index = Math.round(Math.sqrt(grid.length));
	for (var i = 0; i < grid.length; i++) {
		if (i%index == 0 || i < index || i > grid.length - index || i % index == index-1) {
			continue;
		}
	grid[i].x += (Math.random()*-0.5)*30;
	grid[i].y += (Math.random()*-0.5)*30;
	}
	c_s.clearRect(0, 0, canvas_s.width, canvas_s.height);
	genBg();
}

