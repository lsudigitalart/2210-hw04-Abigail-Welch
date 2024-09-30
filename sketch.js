
difficulty = 1

function setup () {
    createCanvas (700,300);

    rx = 50;
    ry = height-50;

}

let rx, ry;

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
    rect(rx, ry, 40, 40);


    // if (mouseX < 0){
    //     mouseX = mouseX + 10;
    // }
    // if (mouseX > width){
    //     mouseX = mouseX - 20;
    // }
    // if (mouseY < 0){
    //     mouseY = mouseY + 10;
    // }
    // if (mouseY > height){
    //     mouseY = mouseY - 20;
    // }


  fill(0)
  textSize(25);
  text(difficulty, 10, 25)


    





    //mouse location
    stroke (0);
    strokeWeight (1)
    textSize (15)
    text (mouseX, 100, 40)
    text (mouseY, 100, 20)


    if(keyIsPressed) {
        if (key == "a") {
            rx--;
        }
        if (key == "d") {
            rx++;
        }
        if (key == "w") {
            ry--;
        }
        if (key == "s") {
            ry++;
        }
        if (key == " ") {
            jump();
        }
    }

    if(jumped) {
        if(frameCount % 6 == 0) {
            jumpTime++;
        }
        if(jumpTime > 5) {
            if(rx < 230) {
                if(ry < height - 50) {
                    ry = ry + 5;
                }
            }
            if(rx > 230 && rx < 375) {
                if(ry < height - 50 - 100) {
                    ry = ry + 5;
                }
            }

            if(rx > 375 && rx < 520) {
                if(ry < height - 50 - 150) {
                    ry = ry + 5;
                }
            }
        } 
    }
}

let jumpTime = 0;
let jumped = false;

function jump() {
    ry = ry - 15;
    rx = rx + 2.5;
   jumped = true;
}