
const categories = document.querySelector("#categories");
const categoryItems = categories.querySelectorAll("li.item");


const numberOfCategories = categoryItems.length;
console.log("number of categories: " + numberOfCategories);

categoryItems.forEach((categoryItem) => {
   const header = categoryItem.querySelector("h2");
   const category = header.textContent;
   const elements = categoryItem.querySelectorAll("li").length

   console.log("category: " + category + " elements: " + elements);
});

