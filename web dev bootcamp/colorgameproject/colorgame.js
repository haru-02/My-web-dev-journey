var numsq = 6;
var colors = [];
var pickedcolor;
var h1=document.querySelector("h1");
var squares= document.querySelectorAll(".square");
var reset= document.getElementById("reset");
var colordisplay= document.getElementById('colordisplay');
var message= document.querySelector("#message");
var mode= document.querySelectorAll(".mode");

init();

function init(){

	setmode();
	setsquares();
	restart();
}


for(var i=0;i<6;i++)
{
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click", function(){
		
		var clickedcolor = this.style.backgroundColor;

		if(clickedcolor==pickedcolor)
			{message.textContent="correct";
			changecolors(clickedcolor);
			h1.style.backgroundColor=pickedcolor;
			reset.textContent="play again?";
		}
		else
			{this.style.backgroundColor="#232323";
			message.textContent="try again";
		}
	});

}


reset.addEventListener("click", function(){
		restart();
	});

function changecolors(color)
{
	for (var i = colors.length - 1; i >= 0; i--) {
		squares[i].style.backgroundColor=color;
	}
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generate(num){
var arr=[];
for (var i=0; i<num ; i++) {
	arr.push(randomcolor());
}
return arr;
}

function randomcolor(){

	var r=Math.floor(Math.random() *256);
	var g=Math.floor(Math.random() *256);
	var b=Math.floor(Math.random() *256);

	return"rgb("+ r +", "+ g +", "+ b +")";
}

function restart()
{
	colors=generate(numsq);
	pickedcolor=pickColor();
	colordisplay.textContent=pickedcolor; 
	for(var i=0;i<6;i++)
	squares[i].style.backgroundColor=colors[i];
	h1.style.backgroundColor="steelblue";
	reset.textContent="New colors";
	message.textContent="";
	for (var i=0; i<squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];		
		}
		else{
			squares[i].style.display="none";
		}
	}
}

function setmode(){

	for (var i = 0; i<mode.length ; i++) {
		mode[i].addEventListener("click",function(){
			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			this.classList.add("selected");

			if(this.textContent === "easy")
				numsq=3;
			else
				numsq=6;
			restart();
		});
	}

}

function setsquares(){

	for(var i=0;i<6;i++)
	{

		squares[i].addEventListener("click", function(){
	
		var clickedcolor = this.style.backgroundColor;

		if(clickedcolor==pickedcolor)
		{	
			message.textContent="correct";
			changecolors(clickedcolor);
			h1.style.backgroundColor=pickedcolor;
			reset.textContent="play again?";
		}

		else
		{	
			this.style.backgroundColor="#232323";
			message.textContent="try again";
		}
		
		});

	}	

}