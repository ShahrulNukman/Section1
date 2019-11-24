var pos = [0,0];
var snake1 = 15;
var falltopos1 = 5;
var snake2 = 23;
var falltopos2 = 16;
var ladder1 = 8;
var climbtopos1 = 15;
var ladder2 = 19;
var climbtopos2 = 24;

  function Roll(user){
    out = document.getElementById("playarea");
    rolldie = Math.floor(Math.random() * 6) + 1;

    pos[user-1] += rolldie;
    var stumble = "";
    switch(pos[user-1]){
      case snake1:
      pos[user-1] = falltopos1;
      stumble = ", You stumble on a snake, fall back to position ";
      break;
      case snake2:

      pos[user-1] = falltopos2;
      stumble = ", You stumble on a snake, fall back to position ";
      break;
      case ladder1:

      pos[user-1] = climbtopos1;
      stumble = ", You stumble on a ladder, foward to position ";
      break;
      case ladder2:

      pos[user-1] = climbtopos2;
      stumble = ", You stumble on a ladder, foward to postion ";
      break;
      default :
      stumble = ", move to position ";
      break;
    }

    if(pos[user-1] > 25){
      out.textContent += "Player " +user+ " has WON ! \n...Game Over...";
      inps = document.getElementById("button1");
      inps.disabled = true;
      inps = document.getElementById("button2");
      inps.disabled = true;
    }
    else
    out.textContent += "Player "+ user + " rolls...Die: " + rolldie + stumble + pos[user-1] + "\n";
  }
