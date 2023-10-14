const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElemet = document.getElementById('ingredients');
const listFragment = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  listFragment.appendChild(item);
});

listElemet.appendChild(listFragment);
