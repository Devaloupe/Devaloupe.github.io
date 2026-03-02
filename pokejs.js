async function doFetch(){
  console.log("fetching");
  let url = "https://pokeapi.co/api/v2/pokemon";
  let searchedNameorID = document.getElementById('input').value;
  //console.log(searchedNameorID);
  let finalURL = url.concat("/", searchedNameorID,"/")
  console.log(finalURL);
  
  let response = await fetch(finalURL);
  let pokemon = await response.json();
  console.log(pokemon);
  
  let id = processJSON(pokemon)
  console.log(id)
  
  showPicture(pokemon);
  
  showNoise(pokemon);
  
  showMoves(pokemon);
  
  //fetch(finalURL)
  //.then(response => response.json())
  //.then(myJSONDocument => processJSON(myJSONDocument))
  //.then(sprite => showPicture(sprite));
  
  
}
function processJSON(json){
    let id = json.id;
    return id;
}
function showPicture(json){
  let url = json.sprites.front_default;
  //console.log(image);
  let place = document.getElementById("photo");
  place.src=url;
}

function showNoise(json){
  let latestURL =json.cries.latest;
  let legacyURL = json.cries.legacy;

  let noise = document.getElementById("cries");
  noise.src =latestURL;
}

function showMoves(json){
  const array = json.moves;
  const moveNames = new Array();
  for (let i in array){
    //console.log(array[i].move.name);
    let options = document.getElementById("moves1");
    let newOption = document.createElement("option");
    newOption.text = array[i].move.name;
    options.add(newOption);
  }
  for (let i in array){
    //console.log(array[i].move.name);
    let options = document.getElementById("moves2");
    let newOption = document.createElement("option");
    newOption.text = array[i].move.name;
    options.add(newOption);
  }
  for (let i in array){
    //console.log(array[i].move.name);
    let options = document.getElementById("moves3");
    let newOption = document.createElement("option");
    newOption.text = array[i].move.name;
    options.add(newOption);
  }
  for (let i in array){
    //console.log(array[i].move.name);
    let options = document.getElementById("moves4");
    let newOption = document.createElement("option");
    newOption.text = array[i].move.name;
    options.add(newOption);
  }

}
function addTeam(){
  //let team = document.getElementById("team");
  let teamMember = document.createElement("section");
  //teamMember.style.border-style = solid;
  
  let currentPhoto = document.createElement("img");
  let container = document.getElementById("photo").src;
  currentPhoto.src = container;
  
  teamMember.appendChild(currentPhoto);
  
  const moveset = new Array();
  const list = document.createElement("ul");
  moveset[0]  = document.getElementById("moves1").value;
  moveset[1] = document.getElementById("moves2").value;
  moveset[2] = document.getElementById("moves3").value;
  moveset[3] = document.getElementById("moves4").value;
  console.log(moveset);
  for (let i in moveset){
    let listItem = document.createElement("li");
    listItem.innerHTML = moveset[i];
    list.appendChild(listItem);
  }
  teamMember.appendChild(list);
  document.getElementById("team").appendChild(teamMember);
  
  //for (int i=0;i<4;i++){
    //let listItem = document.createElement("li");
    //list.appendChild(listItem);
  //}
  //document.getElementById("team").appendChild(list);
}