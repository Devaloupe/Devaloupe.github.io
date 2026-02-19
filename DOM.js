
function showAddNew(){
  let addForm = document.getElementById('newContent');
  if (addForm.style.display === 'none'){
    addForm.style.display = 'block';
  }
  else {
    addForm.style.display = 'none';
  }
  
  //console.log("show");
}

function showFilter(){
  let filters = document.getElementById('filterContent');
  if (filters.style.display === 'none'){
    filters.style.display = 'block';
  }
  else {
    filters.style.display = 'none';
  }
}

function filterArticles(){
  const checkOpinion = document.getElementById('opinionCheckbox');
  const opinionArticles = document.getElementsByClassName('opinion');
  
  const checkRecipe = document.getElementById('recipeCheckbox');
  const recipeArticles = document.getElementsByClassName('recipe');
  
  const checkUpdate = document.getElementById('updateCheckbox');
  const updateArticles = document.getElementsByClassName('update');
  
  if (checkOpinion.checked){
    for (let element of opinionArticles){
      element.style.display = "block";
    }
    //console.log("opinion checked");
  }
  else {
    for (let element of opinionArticles){
      element.style.display = "none";
    }
    //console.log("opinion not checked");
  }
  if (checkRecipe.checked){
    for (let element of recipeArticles){
      element.style.display = "block";
    }
  }
  else{
    for (let element of recipeArticles){
      element.style.display = "none";
    }
  }
  if (checkUpdate.checked){
    for (let element of updateArticles){
      element.style.display = "block";
    }
  }
  else{
    for (let element of updateArticles){
      element.style.display = "none";
    }
  }
}

function getType(text){
  if (text == "opinionRadio"){
    return "opinion";
  }
  if (text == "recipeRadio"){
    return "recipe";
  }
  if (text == "lifeRadio"){
    return "update";
  }
}

function capitalize(text){
  const capital = text.charAt(0).toUpperCase() + text.slice(1);
  return capital;
}

function addNewArticle(){
  let title = document.getElementById('inputHeader').value;
  let types = document.getElementsByName('articleType');
  let newArticleType;
  let text = document.getElementById('inputArticle').value;
  
  for (i = 0; i < types.length; i++){
    //console.log(types[i]);
    if (types[i].checked){
      newArticleType = getType(types[i].id);
    }
  }
  console.log(title);
  //console.log(types);
  console.log(newArticleType);
  console.log(text);
  
  const articleArea = document.getElementById('articleList');
  const newArticle = document.createElement('article');
  newArticle.className = newArticleType;
  articleArea.appendChild(newArticle);
  
  const newSpan = document.createElement('span');
  newSpan.className = "marker";
  newSpan.innerHTML = capitalize(newArticleType);
  newArticle.appendChild(newSpan);
  
  const articleTitle = document.createElement('h2');
  const titleText = document.createTextNode(title);
  articleTitle.appendChild(titleText);
  newArticle.appendChild(articleTitle);
  
  const paragraph = document.createElement("p");
  const articleText = document.createTextNode(text);
  paragraph.appendChild(articleText);
  newArticle.appendChild(paragraph);
  
}




