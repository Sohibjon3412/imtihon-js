const elForm = document.querySelector('.timer__form');
const elInp = document.querySelector('.timer__input');
const elList = document.querySelector('.timer__list');

elForm.addEventListener('submit', (e)=> {
  e.preventDefault();
  
  if(elInp.value != "") {
    console.log(elInp.value);
    let li = document.createElement("li");
    li.className = "timer__item";
    li.textContent = elInp.value;
    elList.append(li);
    elInp.value = "";
  }
});
for(let i = elInp.value; i = 0; i--) {
  console.log(elInp.value[i]);
}