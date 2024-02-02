let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

//event listeners

openBtn.addEventListener('click', function () {
    modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
    modalContainer.style.display = 'none';
})

modalContainer.addEventListener('click', function(){
    modalContainer.style.display = 'none';
})