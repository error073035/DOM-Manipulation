const userContainer = document.querySelector(".userListContainer");
const search = document.querySelector(".search");

const users = [
  {
    ProfileUrl:"https://picsum.photos/200",
    name:"Kahan Hirani",
    email:"kahan@gmail.com"
  },
  {
    ProfileUrl:"https://picsum.photos/201",
    name:"krunal rajpura",
    email:"krunalrajpura@gmail.com"
  },
  {
    ProfileUrl:"https://picsum.photos/203",
    name:"Hirath Gohel",
    email:"lalo@gmail.com"
  },
  {
    ProfileUrl:"https://picsum.photos/204",
    name:"Param Buddh",
    email:"param@gmail.com"
  },
]

function renderUsers(arr){  
  userContainer.innerHTML = "";
  arr.map((obj)=>{
  let {ProfileUrl: profileUrl, name, email} = obj;
  const elem = document.createElement("div");
  elem.className = "user";
  elem.innerHTML = `
    <img src="${profileUrl}" alt="Profile Picture">
    <div class="user-info">
      <p>${name}</p>
      <p>${email}</p>
    </div>
  `;
  userContainer.append(elem);
})
}

renderUsers(users);

search.addEventListener("input", (e)=> {
  const searchValue = e.target.value.toLowerCase();
  const NewArray = users.filter((obj) => {
    return obj.name.toLowerCase().includes(searchValue) || obj.email.toLowerCase().includes(searchValue);
  })
 renderUsers(NewArray);

})