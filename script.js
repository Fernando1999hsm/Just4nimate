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
var t3 = just.animate({
 targets: ".boton3",
 duration: 1300,
 props: {
   innerHTML: ['Boton 3', 'Boton 3'] 
 },
 web: {
    transform: [
       { offset: 0, value: "scale(1, 1)" },
       { offset: 0.3, value: "scale(1.25, 0)" },
       { offset: 0.4, value: "scale(0, 1.25)" },
       { offset: 0.5, value: "scale(2, 2)" },
       { offset: 0.65, value: "scale(3, 3)" },
       { offset: 0.75, value: "scale(4, 4)" },
       { offset: 0.90, value: "scale(1, 1)" },
       { offset: 1, value: "scale(0, 0.25)" }
    ]
 }
});
t3.play();
just.tools.player(t3);
//cuerto boton
var t4 = just.animate({
 targets: ".boton4",
 duration: 1300,
 props: {
   innerHTML: ['Boton 4', 'Boton 4'] 
 },
 web: {
    transform: [
       { offset: 0, value: "scale(1, 1)" },
       { offset: 0.3, value: "scale(1.25, 4)" },
       { offset: 0.4, value: "scale(4, 1.25)" },
       { offset: 0.5, value: "scale(2, 3)" },
       { offset: 0.65, value: "scale(3, 2)" },
       { offset: 0.75, value: "scale(2.3, 1)" },
       { offset: 0.90, value: "scale(1, 2.3)" },
       { offset: 1, value: "scale(1, 1)" }
    ]
 }
});
t4.play();
just.tools.player(t4);
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