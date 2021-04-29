<?php include("header.html"); ?>
<link rel="stylesheet" href="./estilos.css">
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

  <div class="body1">
    <div class="coordinates">
      <div>X:<span class="posX">95</span></div>
      <div>Y:<span class="posY">80</span></div>
    </div>
  
    <svg width="600" height="500" viewBox="0 0 190 160" xmlns="http://www.w3.org/2000/svg">
      <path d="M 10 80 Q 95 80 180 80" stroke="blue"  id="curve" />
  
      <circle cx="10" cy="80" r="2" fill="white" id="start-point" />
      <circle cx="180" cy="80" r="2" fill="white" id="end-point" />
      <circle cx="95" cy="80" r="5" fill="gray" id="control-point" />
    </svg>
  </div>

</center>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js'></script>
<script src="./funcion.js"></script>

<?php include("footer.html"); ?>