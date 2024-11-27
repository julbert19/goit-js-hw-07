const mainContainer = document.querySelector('#categories');
mainContainer.style.padding = "0";
mainContainer.style.width="500px";

const numbOfCategories = document.querySelectorAll('.item');
console.log('Numbers of categories:', numbOfCategories.length);
numbOfCategories.forEach(category => {
    category.style.backgroundColor = "rgba(246, 246, 254, 1)";
    category.style.margin = "24px";
    category.style.listStyle = "none";
    category.style.borderRadius = "8px";
    category.style.padding = "16px";

});

const categories = document.querySelectorAll('.item');

for (const category of categories) {
    const nameOfCategories = category.querySelector("h2");
    
    const itemOfElements = category.querySelector("ul");
    itemOfElements.style.padding = "0";
    
    const numOfElements = category.querySelectorAll("li");
    
    console.log('Category:', nameOfCategories.textContent);
    console.log('Elements:', numOfElements.length)
    for (const number of numOfElements) {
        number.style.listStyle = "none";
        number.style.fontSize = "24px";
        number.style.marginTop = "8px";
        number.style.padding = "8px 16px 8px";
        number.style.border = "1px solid rgba(128, 128, 128, 1)";
        number.style.borderRadius = "4px";

        
    }

}
