// Un alert espone 5 numeri casuali diversi.
var numbersList = [];

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

while (numbersList.length < 5){
  var numRndPc = getRandomNumber(1, 100);

  if(numbersList.includes(numRndPc) == false){
    numbersList.push(numRndPc);
  }
}
console.log(numbersList, numbersList.length);


document.getElementById('numbers').innerHTML = "Hai 30 secondi per memorizzare questi numeri " + numbersList;

// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
var interval = setInterval(function (){
  document.getElementById('numbers').innerHTML = " ";
}, 29000);

setTimeout(timer, 30000);

var listUser = [];
var numbersUser;

function timer(){
  for(var i = 0; i < 5; i++){
    numbersUser = Number(prompt("Inserisci i numeri che hai visto prima"));

    for (var j = 0; j < numbersList.length; j++){
      if(numbersUser == numbersList[j]){
        listUser.push(numbersUser);
        console.log(numbersUser);
      }
    }
  }
  // Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
  alert("Hai ricordato esattamente " + listUser.length + " numeri " + "quelli che hai ricordato sono " + listUser + ".");
}
