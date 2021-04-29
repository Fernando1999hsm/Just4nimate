<?php include("header.html"); ?>
<link rel="stylesheet" href="./last.css">
<body>
    
    <!-- Image and text -->
<nav class="navbar bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.php">
         <img
             src="./excudo.png"
             height="60"
             alt=""
             loading="lazy"
         />
        
      </a>
      <div><a href="Animacion1.php">Animacion #1</a></div>
      <div><a href="Animacion2.php">Animacion #2</a></div>
      <div><a href="Animacion3.php">Animacion #3</a></div>
      <div><a href="Animacion4.php">Animacion #4</a></div>
      <div><a href="Animacion5.php">Animacion #5</a></div>
      <div><a href="Animacion6.php">Animacion #6</a></div>
      <div><a href="Animacion7.php">Animacion #7</a></div>
      <div><a href="Animacion8.php">Animacion #8</a></div>
      <div><a href="Animacion9.php">Animacion #9</a></div>
      <div><a href="Animacion10.php">Animacion #10</a></div>
    </div>
  </nav>

  <center>
  <title>MovimientoGSAP</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

</head>

<body>
 <div id="botones">
    <input type="button" id="play_one" value="one" hidden>
    <input type="button" id="play_two" value="Locos">
    <input type="button" id="play_three" value="three" hidden>
    <input type="button" id="play_four" value="four" hidden>
    <input type="button" id="play_five" value="five" hidden>
  </div>

    <div id="circulos">
      <div class="circulo" id="botonRojo" ></div>
      <div class="circulo" id="botonNaranja"></div>
      <div class="circulo" id="botonAmarillo"></div>
      <div class="circulo" id="botonVerde"></div>
      <div class="circulo" id="botonTurquesa"></div>
      <div class="circulo" id="botonAzul"></div>
      <div class="circulo" id="botonGris"></div>
    </div>


</center>

<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js'></script>
<script  src="./lats.js"></script>
<?php include("footer.html"); ?>