//event listener
// element.addEventlistner("click", function)

const buttonTwo = document.querySelector('.btn2');

function alertBtn(){
    alert('i love javascript')
};

buttonTwo.addEventListener("click", alertBtn);



//mouseover
const newBgcolor = document.querySelector('.box3');

function changebgcolor(){
    newBgcolor.style.backgroundColor = 'blue';
};

newBgcolor.addEventListener("mouseover", changebgcolor);


//reveal event
// const revealbtn = document.querySelector('.revealButton');

// const hiddemcnt = document.querySelector('hidden-content');

// function revealcnt(){
//     if(hiddemcnt.classList.contains('revealButton'))
//     {
//         hiddemcnt.classList.remove('revealButton')
//     }
//     else{
//         hiddemcnt.classList.add('revealButton')
//     }
// }

// revealButton.addEventListener('click', revealcnt );
