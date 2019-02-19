'use strict';

function JediName(firstName, lastName){
    
  const LastName2 = lastName.substring(0,3);
  const firstName2 = firstName.substring(0,2);
  console.log(LastName2);
  console.log(firstName2);
  return LastName2 + firstName2;
}


function beyond(num){
    
  if(num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY)
  {
  return console.log('and beyond');
  }
  else if (num > 0 && num < Number.POSITIVE_INFINITY  )
  {
    return console.log('To infinity');
  }
  else if(num < 0 )
  {
    return console.log('To negative infinity')
  }
  else if(num === 0)
  {
    return console.log('Staying home')
  }

}




function decode(word){

if(word[0] === 'a')
{
  return word[1];
}

if(word[0] === 'b')
{
  return word[2];
}

if(word[0] === 'c')
{
  return word[3];
}

if(word[0] === 'd')
{
  return word[4];
}

else
{
  return ' ';
}

}

function daysinMonth(month, leapYear){

switch(month){
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    return `${month} has 31 days`;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    return `${month} has 30 days`;
  case 'Febuary':
  {
    if(leapYear === true)
     {return 'Febuary has 29 days'}
    else{
      return 'Febuary has 28 days'
    }
  }

``}

}


function playRPS(num){
  let player = null;
  let comp = null;
   if (num <= 0 || num > 3)
   {
     throw new Error("Invalid input");
   }
   if (num === 1)
    player = 'rock';
   
    if (num === 2)
    player = 'paper';

    
   if (num === 3)
   player = 'scissor';

   const randomNo = Math.floor(Math.random() * 3) + 1;
   
   if (randomNo === 1)
   comp = 'rock';
  
   if (randomNo === 2)
   comp = 'paper';

   
  if (randomNo === 3)
  comp = 'scissor';

  if  ((player === 'rock' && comp == 'paper') || (player === 'paper' && comp == 'scissor') || (player === 'scissor' && comp == 'rock'))
    return `PLayer lost. Player was ${player} and the Computer was ${comp}`;
  if  ((player === 'rock' && comp == 'scissor') || (player === 'paper' && comp == 'rock') || (player === 'scissor' && comp == 'paper'))
    return `PLayer wins. Player was ${player} and the Computer was ${comp}`;
  if  ((player === 'rock' && comp == 'rock') || (player === 'paper' && comp == 'paper') || (player === 'scissor' && comp == 'scissor'))
    return `Tie. Player was ${player} and the Computer was ${comp}`;
}

console.log(playRPS(1));
console.log(playRPS(2));
console.log(playRPS(3));