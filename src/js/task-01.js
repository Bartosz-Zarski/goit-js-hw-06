const itemEl = document.querySelectorAll('.item');


const totalCategories = document.querySelectorAll('h2').length;
console.log(`Number of categories: ${totalCategories}`);


for (const element of itemEl) {
    console.log(`Categories: ${element.children[0].innerText}`);
    console.log(`Elements: ${element.children[1].childElementCount}`);
}