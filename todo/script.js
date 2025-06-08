const itemArray = [
  {
    task: "i am a software engineer",
  },
  {
    task: "i am a DEVEOPS engineer",
  },
  {
    task: "i am a hardware engineer",
  },
  {
    task: "i am a Cloud engineer",
  },
]

const addItem = document.querySelector('.add-btn');
const itemList = document.querySelector('.item-list');    
const itemContainer = document.querySelector('.list-item');
const UserInput = document.querySelector('.todo-input');


function renderItems(arr) {
  itemContainer.innerHTML = "";
  arr.map((obj) => {
    let { task } = obj;
    const elem = document.createElement("div");
    elem.className = "user";
    elem.innerHTML = `
    <div class="list-item">
      <p>${task}</p>
    </div>
  `;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.innerHTML = "Delete";
    elem.appendChild(deleteButton);
    itemContainer.append(elem);


    deleteButton.addEventListener("click", () => {
      itemArray.splice(itemArray.indexOf(obj), 1);
      renderItems(itemArray);
    });
  })
}

renderItems(itemArray);

addItem.addEventListener("click", () => {
  const takenInput = UserInput.value.trim();
  if (takenInput) {
    itemArray.unshift({ task: takenInput });
    renderItems(itemArray);
    UserInput.value = "";
  }
});

