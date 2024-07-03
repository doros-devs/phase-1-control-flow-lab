function scuberGreetingForFeet(distance) {
  let cost;

  if (distance <= 400) {
    cost = "This one is on me!";
  } else if (distance > 400 && distance <= 2000) {
    cost = "That will be twenty bucks.";
  } else if (distance > 2000 && distance <= 2500) {
    cost = "I will gladly take your thirty bucks.";
  } else if (distance > 2500) {
    cost = "No can do.";
  }
  return cost;
}



function ternaryCheckCity(city){

return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';

}

function switchOnCharmFromTip(tip){
  let message;

    switch (tip) {
      case "generous":
        message = "Thank you so much."
        break;
      case "not as generous":
        message = "Thank you."
        break;
    
      default:
        message = "Bye."
        break;
    }
    
    return message;
    }