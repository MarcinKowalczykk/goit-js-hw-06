const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector('#value');

let counterValue = 0;

function updateView() {
  valueSpan.textContent = counterValue;
}

decrementBtn.addEventListener('click', function () {
  counterValue--;
  updateView();
});

incrementBtn.addEventListener('click', function () {
  counterValue++;
  updateView();
});

updateView();
