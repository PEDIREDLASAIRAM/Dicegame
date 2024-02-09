function addEvent()
{
var a=Math.random();
a=a*6;
a=Math.floor(a);
a=a+1;
var b="dice"+a+".png";
var image1="./images/"+b;
document.querySelectorAll("img")[0].setAttribute("src",image1)
var c=Math.random();
c=c*6;
c=Math.floor(c);
c=c+1;
var d="./images/"+"dice"+c+".png";
document.querySelectorAll("img")[1].setAttribute("src",d);
if(a>c)
{
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(c>a)
{
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Oops! Game is Draw"
}
}
document.querySelector("button").addEventListener("click",addEvent);