import productWomenData from "../static/product_women_data.js";
import productMensData from "../static/product_men_data.js";
import productKidsData from "../static/product_kids_data.js";

const productCardTemplate = document.getElementById("product-card").content;
const cardContainer = (categoryId) => document.getElementById(categoryId);
const categoryContainer = document.getElementById("categories");

const categoryTemplate = document.getElementById("category-template").content;

const createProductCard = (img, title, price) => {
  const card = productCardTemplate.cloneNode(true);
  card.querySelector(".product-image").src = img;
  card.querySelector(".product-title").textContent = title;
  card.querySelector(".product-price").textContent = price;

  return card
};

const addCardsToCategory = (products, categoryId) => {

  const categoryElement = document.getElementById(categoryId); 
  const productList = categoryElement.querySelector("#product-list")

  products.forEach((product) => {
    const productCard = createProductCard(product.img, product.title, product.price);
    productList.appendChild(productCard);
  });
};

const createCategory = (categoryTitle, categoryId) => {
  const category = categoryTemplate.cloneNode(true);
  category.querySelector(".category-title").textContent = categoryTitle;
  category.querySelector("#category-container").id = categoryId; 

  categoryContainer.appendChild(category);
};

createCategory("Women's Products", "category-women");
createCategory("Kids' Products", "category-kids");
createCategory("Men's Products", "category-men");

addCardsToCategory(productWomenData, "category-women");
addCardsToCategory(productKidsData, "category-kids");
addCardsToCategory(productMensData, "category-men");