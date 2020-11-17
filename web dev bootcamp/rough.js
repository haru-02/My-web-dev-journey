var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var s1=document.querySelector("#s1");
var s2=document.querySelector("#s2");
var re=document.querySelector("#re");
var num=document.querySelector("input");
var score=document.querySelector("#score");
var gameover= false;
var max=5;
var p1s=0;
var p2s=0;

p1.addEventListener("click", function(){
if(!gameover)
{
	p1s++;
	s1.textContent=p1s;
	if(p1s===max)
		{
			s1.classList.add("win");
			gameover=true;
		}	
}	
});

p2.addEventListener("click", function(){
if(!gameover)
{
	p2s++;
	s2.textContent=p2s;
	if(p2s===max)
	{
		s2.classList.add("win");
		gameover=true;
	}
}	
});

re.addEventListener("click", function(){
p1s=0;
p2s=0;
s1.textContent=0;
s2.textContent=0;
s1.classList.remove("win");
s2.classList.remove("win");
gameover = false;
});

num.addEventListener("change", function(){
score.textContent = num.value;
max = Number(num.value);
});