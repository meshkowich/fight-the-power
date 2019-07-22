<template>
  <canvas id="gameCanvas" width="700" height="500" ></canvas>  
</template>

<script>
export default {
  mounted() {
    initGame();
  }
}
function initGame() {
  const shipSize = 30; // height in px
  const turnSpeed = 360; //deg per second
  const thrustSpeed = 0.05; //accelleration
  const friction = 0.03; //slow down
  const roidsNum = 5; //starting number of asteroids
  const roidsSpd = 1; //starting speed
  const roidsSize = 100; // starting size in px
  const roidsVert = 8; // avg number of vertices on each asteroid
  var canvas = document.getElementById('gameCanvas');
  var ctx = canvas.getContext('2d');
  var ship = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    r: shipSize / 1,
    a: 90 / 180 * Math.PI, // convert to radians
    rot: 0,
    thrusting: false,
    thrust: {x:0, y:0}
  };
  //asteroids
  var roids = [];
  createAsteroidBelt();

  //event handlers
  document.addEventListener('keydown', keyDown);
  document.addEventListener('keyup', keyUp);
  //image
  var pilotImg = new Image();
  pilotImg.src = require(`@/assets/pilot.png`);

  function createAsteroidBelt() {
    roids = [];
    var x, y;
    for (let i=0; i<roidsNum; i++ ) {
      do {
        x = Math.floor(Math.random() * canvas.width);
        y = Math.floor(Math.random() * canvas.height);
      } while (distBetweenPoints(ship.x, ship.y, x, y) < roidsSize * 2 + ship.r);      
        roids.push(newAsteroid(x,y));
      }   
  }
  function distBetweenPoints(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

  function keyDown( /** @type {keyboardEvent}*/ ev) {
    switch(ev.keyCode) {
      case 37: //left arrow
      case 65: //a
        ship.rot = -0.1;
        break;
      case 39: //right arrow
      case 68: //d
        ship.rot = 0.1;
        break;
      case 38: //up
      case 87: //w
        ship.thrusting = true
        break;
    }
  }
  function keyUp( /** @type {keyboardEvent}*/ ev) {    
    switch(ev.keyCode) {
      case 37: //stop rotate
      case 65:
        ship.rot = 0;
        break;
      case 39: //stop rotate
      case 68:
        ship.rot = 0;
        break;
      case 38: //up arrow
      case 87:
        ship.thrusting = false;
        break;
    }
  }
  function newAsteroid(x,y) {
    var roid = {
      x: x,
      y: y,
      xv: Math.random() * roidsSpd * (Math.random() < 0.5 ? 1 : -1),
      yv: Math.random() * roidsSpd * (Math.random() < 0.5 ? 1 : -1),
      r: roidsSize / 2,
      a: Math.random() * Math.PI * 2, //in radians
      vert: Math.floor(Math.random() * (roidsVert + 1) + roidsVert / 2)
    };
    return roid;
  }
  requestAnimationFrame(update);
  function update() {
    // draw space
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //thrust the ship
    if (ship.thrusting) {
      ship.thrust.x += thrustSpeed * Math.cos(ship.a);
      ship.thrust.y -= thrustSpeed * Math.sin(ship.a);  
    } else {
      ship.thrust.x -= friction * ship.thrust.x;
      ship.thrust.y -= friction * ship.thrust.y;
    }
    // draw the triangular ship
    ctx.strokeStyle = "white";
    ctx.lineWidth = shipSize / 20;
    ctx.beginPath();
    ctx.moveTo( // nose of the ship
        ship.x + 4 / 3 * ship.r * Math.cos(ship.a),
        ship.y - 4 / 3 * ship.r * Math.sin(ship.a)
    );
    ctx.lineTo( // rear left
        ship.x - ship.r * (2 / 3 * Math.cos(ship.a) + Math.sin(ship.a)),
        ship.y + ship.r * (2 / 3 * Math.sin(ship.a) - Math.cos(ship.a))
    );
    ctx.lineTo( // rear right
        ship.x - ship.r * (2 / 3 * Math.cos(ship.a) - Math.sin(ship.a)),
        ship.y + ship.r * (2 / 3 * Math.sin(ship.a) + Math.cos(ship.a))
    );
    ctx.closePath();
    ctx.stroke();
    // draw the asteroids
    ctx.strokeStyle = 'slategray';
    ctx.lineWidth = shipSize / 20;
    var x,y,r,a,vert;
    for (let i=0; i < roids.length; i++) {
      //get asteroid properties
      x = roids[i].x;
      y = roids[i].y;
      r = roids[i].r;
      a = roids[i].a;
      vert = roids[i].vert;
      //draw a path
      ctx.beginPath();
      ctx.moveTo(
        x + r * Math.cos(a),
        y + r * Math.sin(a)
      );
      //draw the polygon
      for (let j=0; j < vert; j++) {
        ctx.lineTo(
          x + r * Math.cos(a + j * Math.PI * 2 / vert),
          y + r * Math.sin(a + j * Math.PI * 2 / vert)
        );
      }
      ctx.closePath();
      ctx.stroke();
      //move the  asteroid
      roids[i].x += roids[i].xv;
      roids[i].y += roids[i].yv;
      //handle edge of screen
      if (roids[i].x < 0 - roids[i].r) {
        roids[i].x = canvas.width + roids[i].r;
      } else if (roids[i].x > canvas.width + roids[i].r) {
        roids[i].x = 0 - roids[i].r
      }
      if (roids[i].y < 0 - roids[i].r) {
        roids[i].y = canvas.height + roids[i].r;
      } else if (roids[i].y > canvas.height + roids[i].r) {
        roids[i].y = 0 - roids[i].r
      }
    }
    //rotate ship
    ship.a += ship.rot;
    //move ship
    ship.x += ship.thrust.x;
    ship.y += ship.thrust.y;
    //handle edge of screen
    if (ship.x < 0 - ship.r) {
      ship.x = canvas.width + ship.r;
    } else if (ship.x > canvas.width + ship.r) {
      ship.x = 0 - ship.r;
    }
    if (ship.y < 0 - ship.r) {
      ship.y = canvas.height + ship.r;
    } else if (ship.y > canvas.height + ship.r) {
      ship.y = 0 - ship.r;
    }
    // centre dot (optional)
    ctx.fillStyle = "red";
    ctx.fillRect(ship.x - 1, ship.y - 1, 2, 2);
    //update
    requestAnimationFrame(update);
  }
}

</script>
<style>
#gameCanvas {
  background-color: beige;
}
</style>

