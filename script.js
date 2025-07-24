const container = document.querySelector('.card-container');
const card = container.querySelector('.card');

container.addEventListener('click', () => {
  card.classList.toggle('flipped');
});