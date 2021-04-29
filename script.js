//Primer boton
var basicTimeline = anime.timeline({
   autoplay: false
 });
 
 var pathEls = $(".check");
 for (var i = 0; i < pathEls.length; i++) {
   var pathEl = pathEls[i];
   var offset = anime.setDashoffset(pathEl);
   pathEl.setAttribute("stroke-dashoffset", offset);
 }
 
 basicTimeline
   .add({
     targets: ".text",
     duration: 1,
     opacity: "0"
   })
   .add({
     targets: ".button",
     duration: 1300,
     height: 10,
     width: 300,
     backgroundColor: "#2B2D2F",
     border: "0",
     borderRadius: 100
   })
   .add({
     targets: ".progress-bar",
     duration: 2000,
     width: 300,
     easing: "linear"
   })
   .add({
     targets: ".button",
     width: 0,
     duration: 1
   })
   .add({
     targets: ".progress-bar",
     width: 80,
     height: 80,
     delay: 500,
     duration: 750,
     borderRadius: 80,
     backgroundColor: "#71DFBE"
   })
   .add({
     targets: pathEl,
     strokeDashoffset: [offset, 0],
     duration: 200,
     easing: "easeInOutSine"
   });
 
 $(".button").click(function() {
   basicTimeline.play();
 });
 
 $(".text").click(function() {
   basicTimeline.play();
 });

//segundo boton
var t2 = just.animate({
  targets: ".boton2",
  duration: 1300,
  props: {
    innerHTML: ['Boton 2', 'Boton 2'] 
  },
  web: {
     transform: [
        { offset: 0, value: "scale(1, 1)" },
        { offset: 0.3, value: "scale(1.25, 1.25)" },
        { offset: 0.4, value: "scale(1.50, 1.50)" },
        { offset: 0.5, value: "scale(1.75, 1.75)" },
        { offset: 0.65, value: "scale(2, 2)" },
        { offset: 0.75, value: "scale(3, 3)" },
        { offset: 1, value: "scale(1, 1)" }
     ]
  }
});
t2.play();
just.tools.player(t2);
//tercer boton
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

//quinto boton
var t5 = just.animate({
 targets: ".boton5",
 duration: 2000,
 props: {
   innerHTML: ['Boton 5', 'Boton 5'] 
 },
 web: {
    transform: [
       { offset: 0, value: "scale(1, 1)" },
       { offset: 0.3, value: "scale(1.25, 4)" },
       { offset: 0.4, value: "scale(4, 1.25)" },
       { offset: 0.5, value: "scale(1.25, 4)"},
       { offset: 0.65, value: "scale(4, 1.25)" },
       { offset: 0.75, value: "scale(1.25, 4)" },
       { offset: 0.90, value: "scale(4, 1.25)" },
       { offset: 1, value: "scale(1.25, 4)" },
       { offset: 1.3, value: "scale(4, 1.25)" },
       { offset: 1.4, value: "scale(1.25, 4)"},
       { offset: 1.5, value: "scale(4, 1.25)" },
       { offset: 1.65, value: "scale(1.25, 4)" },
       { offset: 1.75, value: "scale(4, 1.25)" },
       { offset: 2, value: "scale(1, 1)" }
    ]
 }
});
t5.play();
just.tools.player(t5);
//sexto boton
var t6 = just.animate({
 targets: ".boton6",
 duration: 2000,
 props: {
   innerHTML: ['Boton 6', 'Boton 6'] 
 },
 web: {
    transform: [
       { offset: 0, value: "scale(1, 1)" },
       { offset: 0.3, value: "scale(0, 0)" },
       { offset: 0.4, value: "scale(1, 1)" },
       { offset: 0.5, value: "scale(0, 0)"},
       { offset: 0.65, value: "scale(1, 1)" },
       { offset: 0.75, value: "scale(0, 0)" },
       { offset: 0.90, value: "scale(1, 1)" },
       { offset: 1, value: "scale(0, 0)" },
       { offset: 1.3, value: "scale(1, 1)" },
       { offset: 1.4, value: "scale(0, 0)"},
       { offset: 1.5, value: "scale(1, 1)" },
       { offset: 1.65, value: "scale(0, 0)" },
       { offset: 1.75, value: "scale(1, 1)" }
    ]
 }
});
t6.play();
just.tools.player(t6);
//septimo boton
var t7 = just.animate({
 targets: ".boton7",
 duration: 5000,
 props: {
   innerHTML: ['Boton 7', 'Boton 7'] 
 },
 web: {
    transform: [
       { offset: 0, value: "scale(5, 1)" },
       { offset: 0.3, value: "scale(1, 5)" },
       { offset: 0.4, value: "scale(5, 1)" },
       { offset: 0.5, value: "scale(1, 5)"},
       { offset: 0.65, value: "scale(5, 1)" },
       { offset: 0.75, value: "scale(1, 5)" },
       { offset: 0.90, value: "scale(5, 1)" },
       { offset: 1, value: "scale(1, 5)" },
       { offset: 1.3, value: "scale(5, 1)" },
       { offset: 1.4, value: "scale(1, 5)"},
       { offset: 1.5, value: "scale(5, 1)" },
       { offset: 1.65, value: "scale(1, 5)" },
       { offset: 1.75, value: "scale(5, 1)" }
    ]
 }
});
t7.play();
just.tools.player(t7);
//octavo boton
var t8 = just.animate({
 targets: ".boton8",
 duration: 2000,
 props: {
   innerHTML: ['Boton 8', 'Boton 8'] 
 },
 web: {
    transform: [
       { offset: 0, value: "scale(4, 1)" },
       { offset: 0.3, value: "scale(1, 1)" },
       { offset: 0.4, value: "scale(4, 1)" },
       { offset: 0.5, value: "scale(1, 1)"},
       { offset: 0.65, value: "scale(4, 1)" },
       { offset: 0.75, value: "scale(1, 1)" },
       { offset: 0.90, value: "scale(4, 1)" },
       { offset: 1, value: "scale(1, 1)" },
       { offset: 1.3, value: "scale(4, 1)" },
       { offset: 1.4, value: "scale(1, 1)"},
       { offset: 1.5, value: "scale(4, 1)" },
       { offset: 1.65, value: "scale(1, 1)" },
       { offset: 1.75, value: "scale(4, 1)" }
    ]
 }
});
t8.play();
just.tools.player(t8);
//noveno boton
var t9 = just.animate({
 targets: ".boton9",
 duration: 2000,
 props: {
   innerHTML: ['Boton 9', 'Boton 9'] 
 },
 web: {
    transform: [
       { offset: 0, value: "scale(1, 1)" },
       { offset: 0.3, value: "scale(1, 4)" },
       { offset: 0.4, value: "scale(1, 1)" },
       { offset: 0.5, value: "scale(1, 4)"},
       { offset: 0.65, value: "scale(1, 1)" },
       { offset: 0.75, value: "scale(1, 4)" },
       { offset: 0.90, value: "scale(1, 1)" },
       { offset: 1, value: "scale(1, 4)" },
       { offset: 1.3, value: "scale(1, 1)" },
       { offset: 1.4, value: "scale(1, 4)"},
       { offset: 1.5, value: "scale(1, 1)" },
       { offset: 1.65, value: "scale(1, 4)" },
       { offset: 1.75, value: "scale(1, 1)" }
    ]
 }
});
t9.play();
just.tools.player(t9);
//decimo boton
var t10 = just.animate({
 targets: ".boton10",
 duration: 2000,
 props: {
   innerHTML: ['Boton 10', 'Boton 10'] 
 },
 web: {
    transform: [
       { offset: 0, value: "scale(1, 1)" },
       { offset: 0.3, value: "scale(2, 2)" },
       { offset: 0.4, value: "scale(3, 3)" },
       { offset: 0.5, value: "scale(4, 4)"},
       { offset: 0.65, value: "scale(5, 5)" },
       { offset: 0.75, value: "scale(6, 6)" },
       { offset: 0.90, value: "scale(5, 5)" },
       { offset: 1, value: "scale(4, 4)" },
       { offset: 1.3, value: "scale(3, 3)" },
       { offset: 1.4, value: "scale(2, 2)"},
       { offset: 1.75, value: "scale(1, 1)" },
       { offset: 1.9, value: "scale(2, 2)" },
       { offset: 2, value: "scale(3, 3)" },
       { offset: 2.2, value: "scale(4, 4)"},
       { offset: 2.4, value: "scale(5, 5)" },
       { offset: 2.5, value: "scale(6, 6)" },
       { offset: 2.65, value: "scale(5, 5)" },
       { offset: 2.8, value: "scale(4, 4)" },
       { offset: 3, value: "scale(3, 3)" },
       { offset: 3.2, value: "scale(2, 2)"},
       { offset: 3.4, value: "scale(1, 1)" }
    ]
 }
});
t10.play();
just.tools.player(t10);





/*----------- AGRANDAR BOTÓN ----------- */
var t2 = just.animate({
  targets: ".ball2",
  duration: 1300,
  props: {
    innerHTML: [' ( ͡❛ ᴗ ͡❛)', '( ͡❛ ᴗ ͡❛)'] 
  },
  web: {
     transform: [
        { offset: 0, value: "scale(1, 1)" },
        { offset: 0.3, value: "scale(1.25, 1.25)" },
        { offset: 0.4, value: "scale(1.50, 1.50)" },
        { offset: 0.5, value: "scale(1.75, 1.75)" },
        { offset: 0.65, value: "scale(2, 2)" },
        { offset: 0.75, value: "scale(3, 3)" },
        { offset: 1, value: "scale(1, 1)" }
     ]
  }
 });
 t2.play();
 just.tools.player(t2);