let img;

var num_x = 60;
var num_y = 80;
var scale = 10;

function setup() {
   var myCanvas = createCanvas(0.25*windowWidth, 0.25*windowWidth, WEBGL);
   myCanvas.parent('#visualizer')
  img = loadImage("https://freight.cargo.site/t/original/i/66007faae078732c7a471d68d059280a77760116e5b8e6f7251e837b5921eaef/al3.jpg");
  img.loadPixels();
  fill(255);
  background(0);
  noStroke();
  frameRate(30)
  imageMode(CENTER)
  ellipseMode(CENTER)
}



function draw() {
   background(0);
   // rotateY(frameCount/20);
   rotateZ(frameCount/30);
   translate(-1 * width/2, -1 * height/2)
   scale = (7 + (mouseY / 75));
   num_x = width / scale;
   num_y = height / scale;
   var x_step = img.width / num_x;
   var y_step = img.height / num_y;
   for (var y = 0; y < num_y; y++) {
      for (var x = 0; x < num_x; x++) {
          let value = (img.get(x * x_step, y * y_step)[0] + 
                       img.get(x * x_step, y * y_step)[1] +
                       img.get(x * x_step, y * y_step)[2]) / 3.0;
          ellipse(x * scale, y * scale, scale * sqrt( 5*sqrt(value) / 255.0));
        
      }
   }
}
