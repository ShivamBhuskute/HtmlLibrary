// const listItems = document.querySelectorAll('list-items');
// for (i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = '5rem';
// }
// console.log(listItems);


//creating elements
// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// //adding elements
// ul.append(li);
// //modifying the text
// li.innerText = 'xman';

// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));


const ul = document.querySelector('ul');
const li = document.createElement('li');
//adding elements
ul.append(li);
//modifying the text
li.innerText = 'xman';
li.classList.add('list-names');

console.log(li.classList.contains('list-names'));

//remove elemnets
li.remove();