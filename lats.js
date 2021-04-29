$(document).ready(function() {
    var $botonR = $('#botonRojo');
    var $botonN = $('#botonNaranja');
    var $botonA = $('#botonAmarillo');
    var $botonV = $('#botonVerde');
    var $botonT = $('#botonTurquesa');
    var $botonAz = $('#botonAzul');
    var $botonG = $('#botonGris');
 
 
 play_one = document.getElementById("play_one"),
 play_one.onclick = function() {
 
 TweenMax.to($botonR, 1, {y: '+=40px', ease:Elastic.easeOut});
 TweenMax.to($botonR, 1, {y: '-=40px', ease:Elastic.easeOut, delay:0.2});
 
 TweenMax.to($botonN, 1, {y: '+=40px', ease:Elastic.easeOut, delay:0.2});
 TweenMax.to($botonN, 1, {y: '-=40px', ease:Elastic.easeOut, delay:0.4});
 
 
 TweenMax.to($botonA, 1, {y: '+=40px', ease:Elastic.easeOut, delay:0.4});
 TweenMax.to($botonA, 1, {y: '-=40px', ease:Elastic.easeOut, delay:0.6});
 
 
 TweenMax.to($botonV, 1, {y: '+=40px', ease:Elastic.easeOut, delay:0.6});
 TweenMax.to($botonV, 1, {y: '-=40px', ease:Elastic.easeOut, delay:0.8});
 
 
 TweenMax.to($botonT, 1, {y: '+=40px', ease:Elastic.easeOut, delay:0.8});
 TweenMax.to($botonT, 1, {y: '-=40px', ease:Elastic.easeOut, delay:1});
 
 
 TweenMax.to($botonAz, 1, {y: '+=40px', ease:Elastic.easeOut, delay:1});
 TweenMax.to($botonAz, 1, {y: '-=40px', ease:Elastic.easeOut, delay:1.2});
 
 
 TweenMax.to($botonG, 1, {y: '+=40px', ease:Elastic.easeOut, delay:1.2});
 TweenMax.to($botonG, 1, {y: '-=40px', ease:Elastic.easeOut, delay:1.4});
 
    }
 
 play_two = document.getElementById("play_two"),
 play_two.onclick = function() {
 
 
    path = [{x:0, y:0}, {x:125, y:-80}, {x:0, y:0}],
     path2 = [{x:0, y:0}, {x:125, y: 80}, {x:0, y:0}],
     path3 = [{x: 0, y: 0},{x: 50, y: 50},{x: 120, y: 0},{x: 0, y: 0}],
     path4 = [{x: 0, y: 0},{x: 70, y: -50},{x: 100, y: 0},{x: 0, y: 0}],
     path5 = [{x: 0, y: 0},{x: 80, y: 40},{x: 100, y: 20},{x: 0, y: 0}],
 
 
 
   TweenMax.to($botonR, 0.5, {bezier:{curviness: 0.5, values:path4}, ease:Power1.easeInOut, delay:0.4});
   TweenMax.to($botonN, 0.5, {bezier:{curviness: 0.3, values:path2}, ease:Power1.easeInOut, delay:0.8})
   TweenMax.to($botonA, 0.5, {bezier:{curviness: 0.6, values:path5}, ease:Power1.easeInOut, delay:0.65})
   TweenMax.to($botonV, 0.5, {bezier:{curviness: 0.2, values:path4}, ease:Power1.easeInOut, delay:0.5})
   TweenMax.to($botonT, 0.5, {bezier:{curviness: 0.3, values:path3}, ease:Power1.easeInOut, delay:0.6})
   TweenMax.to($botonAz, 0.5, {bezier:{curviness: 0.4, values:path2}, ease:Power1.easeInOut, delay:0.3})
   TweenMax.to($botonG, 0.5, {bezier:{curviness: 0.3, values:path}, ease:Power1.easeInOut, delay:0.2})
 
 
 }
 
 
 play_three = document.getElementById("play_three"),
 play_three.onclick = function() {
 
 
 TweenMax.to($botonR, 1, {y: '+=140px'});
 TweenMax.to($botonN, 1, {y: '+=120px', delay:0.1});
 TweenMax.to($botonA, 1, {y: '+=100px', delay:0.2});
 TweenMax.to($botonV, 1, {y: '+=80px', delay:0.3});
 TweenMax.to($botonT, 1, {y: '+=60px', delay:0.4});
 TweenMax.to($botonAz, 1, {y: '+=40px', delay:0.5});
 
 TweenMax.to($botonAz, 1, {y: 0, delay:0.6});
 TweenMax.to($botonT, 1, {y: 0, delay:0.7});
 TweenMax.to($botonV, 1, {y: 0, delay:0.8});
 TweenMax.to($botonA, 1, {y: 0, delay:0.9});
 TweenMax.to($botonN, 1, {y: 0, delay:1});
 TweenMax.to($botonR, 1, {y: 0 ,delay:1.2});
   }
 
   play_four = document.getElementById("play_four"),
   play_four.onclick = function() {
 
 
 TweenMax.fromTo($botonR, 0.3, {scale: 1.2}, {scale:1});
 TweenMax.fromTo($botonN, 0.3, {scale: 1.2}, {scale:1, delay:0.1});
 TweenMax.fromTo($botonA, 0.3, {scale: 1.2}, {scale:1, delay:0.2});
 TweenMax.fromTo($botonV, 0.3,  {scale: 1.2}, {scale:1, delay:0.3});
 TweenMax.fromTo($botonT, 0.3,  {scale: 1.2}, {scale:1, delay:0.4});
 TweenMax.fromTo($botonAz, 0.3,  {scale: 1.2}, {scale:1, delay:0.5});
 TweenMax.fromTo($botonG, 0.3,  {scale: 1.2}, {scale:1, delay:0.6});
 
 }
   play_five = document.getElementById("play_five"),
   play_five.onclick = function() {
 
 
 TweenMax.fromTo($botonR, 0.3, {opacity:0}, {opacity:1});
 TweenMax.fromTo($botonN, 0.3, {opacity:0}, {opacity:1, delay:0.1});
 TweenMax.fromTo($botonA, 0.3, {opacity:0}, {opacity:1, delay:0.2});
 TweenMax.fromTo($botonV, 0.3,  {opacity:0}, {opacity:1, delay:0.3});
 TweenMax.fromTo($botonT, 0.3,  {opacity:0}, {opacity:1, delay:0.4});
 TweenMax.fromTo($botonAz, 0.3,  {opacity:0}, {opacity:1, delay:0.5});
 TweenMax.fromTo($botonG, 0.3,  {opacity:0}, {opacity:1, delay:0.6});
 
 }
 
 });