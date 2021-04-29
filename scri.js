const moonPath = "M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 52.101 13.21 55 20.209 55 27.5 C 55 34.791 52.101 41.79 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z";
		const sunPath = "M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 33.991 9.89 26.93 20.209 26.93 27.5 C 26.93 34.791 33.689 45.261 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z";
		const darkMode = document.querySelector("#dark_mode");
		let toggle = false;
		//클릭
		darkMode.addEventListener("click", ()=>{
			//anime.js
			//여기에 타임라인을 더한다
			const timeline = anime.timeline({
				duration : 750,
				easing : "easeOutExpo"
			});
			//add 다르 애니메이션 타임라인에
			timeline
			.add({
				targets:".moon",
				d:[{value: toggle ? moonPath: sunPath}] //moonPath ->sunpath
			})
			.add({
				targets:'#dark_mode',
				rotate : toggle? 0 : 320
			},"-=350")
			.add({
				targets: "section",
				backgroundColor: toggle ? 'rgba(255,255,255)' : 'rgba(22,22,22)',
				color: toggle ? 'rgba(22,22,22)' : 'rgba(255,255,255)'
			},"-=700");
			
			if(!toggle){
				toggle = true;
				$("h1").text("darkmode")
			}else{
				toggle= false;
				$("h1").text("lightmode")
			}
			
		});


		//cuerto boton
const svg = document.querySelector('svg');
const curve = document.getElementById('curve');
const controlPoint = document.getElementById('control-point');
const posXLabel = document.querySelector('.posX');
const posYLabel = document.querySelector('.posY');
const svgViewBoxWidth = 190;

let isMouseDown = false;
let point = {
  x: 95,
  y: 80
};

function updateCurve(x, y) {
  let svgRect = svg.getBoundingClientRect();
  let scale = svgRect.width / svgViewBoxWidth;
  let width = (svgRect.width / scale) - 5;
  let height = (svgRect.height / scale) - 6;
  
  // update point coordinates to mouse/touch position when dragging
  if (x && y) {
    point.x = Math.ceil((x - svgRect.x) / scale);
    point.y = Math.ceil((y - svgRect.y) / scale);
  }
  
  // clamp the coordinates to the limits of the SVG viewbox
  point.x = point.x < 5 ? 5 : point.x;
  point.y = point.y < 5 ? 5 : point.y;
  point.x = point.x > width ? Math.ceil(width) : point.x;
  point.y = point.y > height ? Math.ceil(height) : point.y;

  // update coordinate labels
  posXLabel.textContent = point.x.toFixed(2);
  posYLabel.textContent = point.y.toFixed(2);

  // update coordinates for control point and curve
  controlPoint.setAttribute('cx', point.x);
  controlPoint.setAttribute('cy', point.y);
  curve.setAttribute('d', curve.getAttribute('d').replace(/Q (\d+(\.\d+)?) (\d+(\.\d+)?)/, `Q ${point.x} ${point.y}`));
}

function onMouseDown() {
  isMouseDown = true;
}

function onMouseMove(ev) {
  if (isMouseDown) {
    updateCurve(ev.clientX, ev.clientY);
  }
}

function onMouseUp() {
  isMouseDown = false;
  
  // animate the control point and curve back to 
  // the initial positions with a bouncy effect
  // using the anime.js animation library
  anime({
    targets: point,
    x: 95, // target X coordinate
    y: 80, // target Y coordinate
    duration: 1000,
    easing: 'easeOutElastic(1.5, 0.2)',
    update: function() {
      updateCurve();
    }
  });
}

controlPoint.addEventListener('mousedown', onMouseDown);
controlPoint.addEventListener('touchstart', onMouseDown);

document.addEventListener('mousemove', onMouseMove);
document.addEventListener('touchmove', (ev) => {
  updateCurve(ev.touches[0].clientX, ev.touches[0].clientY);
});

document.addEventListener('mouseup', onMouseUp);
document.addEventListener('touchend', onMouseUp);