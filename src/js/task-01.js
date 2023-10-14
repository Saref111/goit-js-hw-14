const listElemet = document.getElementById('categories');

console.log(`${listElemet.children.length}`);

Array.from(listElemet.children).forEach((element) => {
    const title = element.querySelector('h2').textContent;
    console.log(`${title}`);
})
