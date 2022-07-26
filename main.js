canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["NASA IMG_1.jpg", "NASA IMG_2.jpg", "NASA IMG_3.jpg", "NASA IMG_4.jpg"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);

rover_width = 100;
rover_height = 90;

background_image = nasa_mars_images_array[random_number];
console.log("background_image = " + background_image);
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground(){
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '37')
    {
        Left();
        console.log("Left");
    }

    if(keyPressed == '38')
    {
        Up();
        console.log("up");
    }

    if(keyPressed == '39')
    {
        Right();
        console.log("Right");
    }

    if(keyPressed == '40')
    {
        Down();
        console.log("Down");
    }
}

function Up()
{
    if(rover_y >=0)
    {
        rover_y = rover_y - 10;
        console.log("When Up arrow is Pressed, X = " + rover_x + ", Y = " + rover_y);
        uploadBackground();
        uploadrover();

    }
}

function Down()
{
    if(rover_y <=500)
    {
        rover_y = rover_y + 10;
        console.log("When Up arrow is Pressed, X = " + rover_x + ", Y = " + rover_y);
        uploadBackground();
        uploadrover();
        
    }
}

function Left()
{
    if(rover_x >=0)
    {
        rover_x = rover_x - 10;
        console.log("When Up arrow is Pressed, X = " + rover_x + ", Y = " + rover_y);
        uploadBackground();
        uploadrover();
        
    }
}

function Right()
{
    if(rover_x <=700)
    {
        rover_x = rover_x + 10;
        console.log("When Up arrow is Pressed, X = " + rover_x + ", Y = " + rover_y);
        uploadBackground();
        uploadrover();
        
    }
}