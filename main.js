canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var c1_width=120;
var c1_height=70;
var c1_x=10;
var c1_y=10;
var c1_image="https://i.postimg.cc/YqdnnNX1/car1.png";
var background_image="https://i.postimg.cc/bv5d35nK/racing.jpg"

var c2_width=120;
var c2_height=70;
var c2_x=10;
var c2_y=100;
var c2_image="https://i.postimg.cc/wM0VrHk6/car2.png";



function add(){
    bg_img=new Image();
    bg_img.onload=uploadbackground;
    bg_img.src=background_image;

    c1_img=new Image();
    c1_img.onload=uploadc1;
    c1_img.src=c1_image;
    

    c2_img=new Image();
    c2_img.onload=uploadc2;
    c2_img.src=c2_image;
     
    
}

function uploadbackground(){
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
    
}

function uploadc1(){
    ctx.drawImage(c1_img,c1_x,c1_y,c1_width,c1_height);
}
function uploadc2(){
        ctx.drawImage(c2_img,c2_x,c2_y,c2_width,c2_height);
    
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
		car1up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			car1down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			car1left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			car1right();
			console.log("right");
		}



        if(keyPressed == '87')
		{
		car2up();
			console.log("w");
		}
		if(keyPressed == '83')
		{
			car2down();
			console.log("s");
		}
		if(keyPressed == '65')
		{
			car2left();
			console.log("a");
		}
		if(keyPressed == '68')
		{
			car2right();
			console.log("d");
		}
        if(c1_x > 700)
	{
		console.log("car1");
		document.getElementById('game_status').innerHTML = "Car 1 Won!!";
	}
	else if(c2_x > 700)
	{
		console.log("car2");
		document.getElementById('game_status').innerHTML = "Car 2 Won!!";
	} 
}

function car1up(){
    if(c1_y>=0){
        c1_y=c1_y-10;
        console.log("when up arrow is pressed,x= "+c1_x+"and y="+c1_y) ;
        uploadbackground();
        uploadc1();
uploadc2();
    }




}
function car1down(){
    if(c1_y<=500){
        c1_y=c1_y+10;
        console.log("when up arrow is pressed,x= "+c1_x+"and y="+c1_y) ;
        uploadbackground();
        uploadc1();
        uploadc2();
    }
}
function car1left(){
    if(c1_x>=0){
        c1_x=c1_x-10;
        console.log("when up arrow is pressed,x= "+c1_x+"and y="+c1_y) ;
        uploadbackground();
        uploadc1();
        uploadc2();
    }
}
function car1right(){
    if(c1_x<=700){
        c1_x=c1_x+10;
        console.log("when up arrow is pressed,x= "+c1_x+"and y="+c1_y) ;
        uploadbackground();
        uploadc1();
        uploadc2();
    }
}


function car2up(){
    if(c2_y>=0){
        c2_y=c2_y-10;
        console.log("when up arrow is pressed,x= "+c2_x+"and y="+c2_y) ;
        uploadbackground();
        uploadc2();
uploadc2();
    }




}
function car2down(){
    if(c2_y<=500){
        c2_y=c2_y+10;
        console.log("when up arrow is pressed,x= "+c2_x+"and y="+c2_y) ;
        uploadbackground();
        uploadc2();
        uploadc2();
    }
}
function car2left(){
    if(c2_x>=0){
        c2_x=c2_x-10;
        console.log("when up arrow is pressed,x= "+c2_x+"and y="+c2_y) ;
        uploadbackground();
        uploadc2();
        uploadc2();
    }
}
function car2right(){
    if(c2_x<=700){
        c2_x=c2_x+10;
        console.log("when up arrow is pressed,x= "+c2_x+"and y="+c2_y) ;
        uploadbackground();
        uploadc2();
        uploadc2();
    }
}







