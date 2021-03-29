function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } 
else if (2000 < feet && feet < 2501) {return 'I will gladly take your thirty bucks.'}

else {
  return 'No can do.'
}
}

//use tenary function here. Tenary else/if statements are necessary. but 'return' is. ':' if not what the variable is set then or else the other side of ':' 
function ternaryCheckCity(city) {
  return city=='NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){

if (tip === "generous") {
  return 'Thank you so much.'
}
else if (tip == 'not as generous'){
  return 'Thank you.'
}
else {
  return 'Bye.'
}
}