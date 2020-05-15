// JavaScript File
var randomNum;
function tellNegativePositive() {
  randomNum = document.getElementById("number").value;
  if (isNaN(randomNum))
  {
    alert ("NaN choose a number");
  }
  else if (Number.isInteger(randomNum / 1))
  {
    if (randomNum < 0)
    {
      alert ("Your number is negative");
    }
    else
    {
      alert ("Your number is positive");
    }
  }
  else
  {
    alert ("Please enter an integer");
  }
} 