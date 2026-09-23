function setup() {
    createCanvas(windowWidth, windowHeight);

    x = 0;
    y = height/2;
    d = 50;
}

function draw() {
  //set background color to black
    background(0);
   // once the circle reaches the edge it will be sent back
    if (x > width) {

        x = 0;
    }

    if (x < width/2) {

    fill("blue")

    }

    else{

      fill("Green")
    }

    circle(x,y,d);
    
    if (x < width/2) {

    fill("purple");

    }

    else {

    fill("yellow");

    }

    triangle
    (x, y, x - 50,
      y + 50, x + 50, 
      y + 50);

    
    
    x += 2; 

  }