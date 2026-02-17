let buffer = 0;
function tickUp(){
  //let buffer = 0;
  buffer = parseInt(document.getElementById('counter').innerHTML);
  buffer++;
  document.getElementById('counter').innerHTML = buffer;
}

function tickDown(){
  //let buffer = 0;
  buffer = parseInt(document.getElementById('counter').innerHTML);
  buffer--;
  document.getElementById('counter').innerHTML = buffer;
}

function runForLoop(){
  const numbers = new Array();
  //let current = 0;
  //current = parseInt(document.getElementById('counter').innerHTML);
  for (let i = 0; i < (buffer+1);i++){
    numbers.push(i);
    //console.log(i);
  }
  document.getElementById('forLoopResult').innerHTML = numbers;
}

function showOddNumbers(){
  const oddNumbers = new Array();
  for (let i = 0; i < (buffer+1); i++){
    if (i & 1 == 1 ){
      oddNumbers.push(i);
    }
  }
  document.getElementById('oddNumberResult').innerHTML = oddNumbers;
}

function addMultiplesToArray(){
  const multiples = new Array();
  if (buffer > 5){
    for (let i = buffer; i > 0; i--){
      if (i % 5 == 0){
        multiples.push(i);
      }
    }
  }
  console.log("Printing multiples:");
  console.log(multiples);
}

function printCarObject(){
  let type = document.getElementById('carType');
  let MPG = document.getElementById('carMPG');
  let color = document.getElementById('carColor');
  //const printCar = {cType: type, cMPG: MPG, cColor: color};
  const printCar = {};
  printCar.cType = type.value;
  printCar.cMPG = MPG.value;
  printCar.cColor = color.value;
  console.log(printCar);
}

function loadCar(num){
  if (num == 1){
    document.getElementById('carType').value = carObject1.cType;
    document.getElementById('carMPG').value = carObject1.cMPG;
    document.getElementById('carColor').value = carObject1.cColor;
  }
  if (num == 2){
    document.getElementById('carType').value = carObject2.cType;
    document.getElementById('carMPG').value = carObject2.cMPG;
    document.getElementById('carColor').value = carObject2.cColor;
  }
  if (num == 3){
    document.getElementById('carType').value = carObject3.cType;
    document.getElementById('carMPG').value = carObject3.cMPG;
    document.getElementById('carColor').value = carObject3.cColor;
  }
  
}

function changeColor(num){
  let paragraph = document.getElementById('styleParagraph');
  if (num == 1){
    paragraph.style.color = 'red';
  }
  if (num == 2){
    paragraph.style.color = 'green';
  }
  if (num == 3){
    paragraph.style.color = 'blue';
  }
  
}