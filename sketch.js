
difficulty = 1

function setup () {
    createCanvas (700,300);

}

function draw () {

    background (232, 226, 162);

    fill (115, 191, 77);
    noStroke();
    rect (680, -2, 100);


    fill (179, 151, 70);
    noStroke ()
    rect (0, 290, 700, 100)

    fill (179, 151, 70);
    noStroke ();
    rect (230, 190, 100, 10);

    fill (179, 151, 70);
    rect (375, 137, 100, 10);

    fill (179, 151, 70);
    rect (520, 95, 100, 10);

    fill (255, 255, 255);
    stroke (114, 163, 85);
    strokeWeight (3)
    rect(mouseX, 250, 40, 40);


    if (mouseX < 0){
        mouseX = mouseX + 10;
    }
    if (mouseX > width){
        mouseX = mouseX - 20;
    }
    if (mouseY < 0){
        mouseY = mouseY + 10;
    }
    if (mouseY > height){
        mouseY = mouseY - 20;
    }


  fill(0)
  textSize(25);
  text(difficulty, 10, 25)


    





    //mouse location
    stroke (0);
    strokeWeight (1)
    textSize (15)
    text (mouseX, 100, 40)
    text (mouseY, 100, 20)

}

