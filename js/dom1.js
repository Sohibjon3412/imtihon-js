let elItem = document.querySelectorAll('.box__item');
let elBox = document.querySelector('.box');


elItem.forEach(element => {
  element.addEventListener('click', ()=> {
    reClass();
    element.classList.add('active');
    if(element.id == "item1") {
      elBox.style.backgroundColor = "#3A91DA";
    }
    else if(element.id == "item2") {
      elBox.style.backgroundColor = "#36DB66";
    }
    else if(element.id == "item3") {
      elBox.style.backgroundColor = "#E88F0F";
    }
    else if(element.id == "item4") {
      elBox.style.backgroundColor = "#D43134";
    }
    else if(element.id == "item5") {
      elBox.style.backgroundColor = "#8C40AF";
    }
  });
  
});

function reClass() {
  elItem.forEach((e)=> {
    e.classList.remove('active')
  })
}
