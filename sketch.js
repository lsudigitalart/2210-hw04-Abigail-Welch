//i figured this needs to just be turned in and as finished as i can make it for midterm grades.
//it works for the most part, but there's just one issue with where the block lands for each of the jump platforms


difficulty = 0

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
    rect (680, -2, 100, 100);

    //jump platforms

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

    //character

    fill (255, 255, 255);
    stroke (114, 163, 85);
    strokeWeight (3)
    rect(rx, ry, 40, 40);

    // game boarders 

     if (rx < 0){
        rx = rx + 10;
     }
     if (rx > width){
        rx = rx - 20;
     }
     if (ry < 0){
        ry = ry + 10;
     }
     if (ry > height){
        ry = ry - 20;
    }

    //score 

    fill(0)
    textSize(25);
    text(difficulty, 10, 25)

    //mouse location

    //  stroke (0);
    //  strokeWeight (1)
    //  textSize (15)
    //  text (mouseX, 100, 20)
    // text (mouseY, 100, 40)

    //key controls

    if(keyIsPressed) {
        if (key == "a") {
            rx--;
        }
        if (key == "d") {
            rx++;
        }
        if (key == " ") {
            jump();
        }
    }

    //platform jumps

    if(jumped) {
        // if(frameCount % 10 == 0) {
        //     jumpTime++;
        // }
        // if(jumpTime > 5) {
            if(rx < 230) {
                if(ry < 190 - 43 && ry > 5) {
                    ry = ry + 5;
                }
            }
            if(rx > 230 && rx < 375) {
                if(ry < 137 - 43) {
                    ry = ry + 5;
                }
            }

            if(rx > 375 && rx < 520) {
                if(ry < 95 - 43) {
                    ry = ry + 5;
                }
            }
        // } 
    } 

print(rx, ry, jumpTime);

}

    let jumpTime = 0;
    let jumped = false;

    function jump() {
        ry = ry - 15;
        rx = rx + 2.5;
    jumped = true;

    //goal contact

    if (rx + 100 > 680 && ry + 40 > -2 && ry < -2 + 40){
        console.log ('bumped');
        rx = width - 650;
        ry = height - 50
        difficulty += 1;
    } 

    }
