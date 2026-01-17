const modalFirst = document.querySelector('.one');
const modalSecond = document.querySelector('.two');
const modalThird = document.querySelector('.three');
const hiddenModal = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

function closeOnEscape(event) {
  console.log(event);
  if (event.key === 'Escape' && !hiddenModal.classList.contains('hidden')) {
    hiddenModal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
}

modalFirst.addEventListener('click', () => {
  hiddenModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.addEventListener('keydown', closeOnEscape);
})

closeModal.addEventListener('click', () => {
  hiddenModal.classList.add('hidden');
  overlay.classList.add('hidden');
  document.removeEventListener('keydown', closeOnEscape);
})

overlay.addEventListener('click', () => {
  hiddenModal.classList.add('hidden');
  overlay.classList.add('hidden');
})

