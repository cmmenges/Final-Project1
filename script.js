//Create a basic HTML webpage
//Create multiple divs with CSS "boxes" as content
//link each box with an href to simple sound bytes
/*Add an onclick event listener to each box individually that triggers
  specified sound to play*/

function clickedA(){
//  alert('You clicked box A!');
  document.getElementById('play1').play();
}
function clickedB(){
//  alert('You clicked box B!');
  document.getElementById('play2').play();
}
function clickedC(){
//  alert('You clicked box C!');
  document.getElementById('play3').play();
}
function clickedD(){
//  alert('You clicked box D!');
  document.getElementById('play4').play();
}
function clickedE(){
//  alert('You clicked box E!');
  document.getElementById('play5').play();
}
function clickedF(){
//  alert('You clicked box F!');
  document.getElementById('play6').play();
}
function clickedG(){
//  alert('You clicked box G!');
  document.getElementById('play7').play();
}
document.body.addEventListener("keydown", keyDownPlay, false);
function keyDownPlay(e){
  var keyCode = e.keyCode;
  if(keyCode==65){
    document.getElementById('play1').play();
  }else if(keyCode==83){
  document.getElementById('play2').play();
  }else if(keyCode==68){
    document.getElementById('play3').play();
  }else if(keyCode==70){
    document.getElementById('play4').play();
  }else if(keyCode==71){
    document.getElementById('play5').play();
  }else if(keyCode==72){
    document.getElementById('play6').play();
  }else if(keyCode==74){
    document.getElementById('play7').play();
  }else return false;
}
function boxASwitch (){
  document.getElementsByClassName('box1')[0].innerHTML = 'Gross!';
}
function boxAReturn(){
  document.getElementsByClassName('box1')[0].innerHTML = 'Simple Toot';
}
function boxBSwitch (){
  document.getElementsByClassName('box2')[0].innerHTML = 'Gross!';
}
function boxBReturn(){
  document.getElementsByClassName('box2')[0].innerHTML = '"Uh Ohhh"';
}
function boxCSwitch (){
  document.getElementsByClassName('box3')[0].innerHTML = 'Gross!';
}
function boxCReturn(){
  document.getElementsByClassName('box3')[0].innerHTML = 'Noble Toot';
}
function boxDSwitch (){
  document.getElementsByClassName('box4')[0].innerHTML = 'Gross!';
}
function boxDReturn(){
  document.getElementsByClassName('box4')[0].innerHTML = 'Quick Rip';
}
function boxESwitch (){
  document.getElementsByClassName('box5')[0].innerHTML = 'Gross!';
}
function boxEReturn(){
  document.getElementsByClassName('box5')[0].innerHTML = 'Crop Duster';
}
function boxFSwitch (){
  document.getElementsByClassName('box6')[0].innerHTML = 'Gross!';
}
function boxFReturn(){
  document.getElementsByClassName('box6')[0].innerHTML = 'Pretentious Toot';
}
