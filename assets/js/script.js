// js file 

const changeTheme = (bgcolor) => {
    document.body.style.backgroundColor = bgcolor;
}

const containerArray = [];


for (let i = 1; i <= 5; i++) {
  const div = document.createElement('div');
  div.classList.add("main_container");
 

  
 

  const btnNext = document.createElement('button');
  btnNext.textContent = 'next';
  btnNext.setAttribute('id','btn_next');
  div.appendChild(btnNext);

  const p = document.createElement('p');
  p.textContent = `Screen ${i}`;
  div.appendChild(p);
  const btnPrev = document.createElement('button');
  btnPrev.textContent = 'prev';
  btnPrev.setAttribute('id','btn_prev');
 
  div.appendChild(btnPrev);

  containerArray.push(div);
}

function generateRandomLightColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      color += letters[randomIndex];
    }
  
    return color;
  }


let currPage = 0;
const nextPage = () => {
    console.log("next page trigger");
    currPage = (currPage + 1) % containerArray.length;
    let cont = document.getElementsByClassName("main_container");
    cont[0].style.backgroundColor = generateRandomLightColor();
    cont[0].innerHTML = containerArray[currPage].innerHTML;
    const nextButton = document.getElementById("btn_next");
    nextButton.addEventListener('click', nextPage);

    const prevButton = document.getElementById("btn_prev");
    prevButton.addEventListener('click', prevPage);
    
}

const prevPage = () => {
    currPage = (currPage - 1 + containerArray.length) % containerArray.length
    let cont = document.getElementsByClassName("main_container");
    cont[0].style.backgroundColor = generateRandomLightColor();

    cont[0].innerHTML = containerArray[currPage].innerHTML;
    const nextButton = document.getElementById("btn_next");
    nextButton.addEventListener('click', nextPage);

    const prevButton = document.getElementById("btn_prev");
    prevButton.addEventListener('click', prevPage);

}

const nextButton = document.getElementById("btn_next");
nextButton.addEventListener('click', nextPage);

const prevButton = document.getElementById("btn_prev");
prevButton.addEventListener('click', prevPage);



// setInterval(nextPage, 5000);