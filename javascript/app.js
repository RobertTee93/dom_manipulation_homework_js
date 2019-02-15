document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleFormSubmit);

  const deleteButton = document.querySelector("#delete-btn");
  deleteButton.addEventListener("click", handleDeleteClick)

});


const createWrapper = function(){
  const gamesList = document.querySelector("#games-list");
  const gamesWrapper = document.createElement("div");
  gamesWrapper.classList.add("game");
  gamesList.appendChild(gamesWrapper);
  return gamesWrapper

};

const valueHandler = function(formField){
  const newElement = document.createElement("p");
  newElement.textContent = this[formField].value;
  return newElement
}


const handleFormSubmit = function(event){
  event.preventDefault();
  gamesWrapper = createWrapper()
  gamesWrapper.appendChild(valueHandler("title"));
  gamesWrapper.appendChild(valueHandler("genre"));
  gamesWrapper.appendChild(valueHandler("platform"));
  this.reset();
}

const handleDeleteClick = function(){
  const gamesList = document.querySelector("#games-list");
  gamesList.innerHTML = ""
}
