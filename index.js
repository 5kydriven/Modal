const openModal = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeModal = document.querySelector('.close-btn');

openModal.addEventListener('click', () => {
    modal.classList.add('open-modal'); 
})


closeModal.addEventListener('click', () => {
    modal.classList.remove('open-modal'); 
})