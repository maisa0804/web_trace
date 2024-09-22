import productWomenData from "../static/product_women_data.js";
import productMensData from "../static/product_men_data.js";
import productKidsData from "../static/product_kids_data.js";
import productRestockData from "../static/product_restock_data.js";
import salesData from "../static/sales_data.js";

const productCardTemplate = document.getElementById("product-card").content;
const categoryContainer = document.getElementById("categories");
const salesContainer = document.getElementById("sales");

const categoryTemplate = document.getElementById("category-template").content;

const createProductCard = (img, title, price) => {
  const card = productCardTemplate.cloneNode(true);
  card.querySelector(".product-image").src = img;
  card.querySelector(".product-title").textContent = title;
  card.querySelector(".product-price").textContent = price;

  return card;
};

const addCardsToCategory = (products, categoryId) => {
  const categoryElement = document.getElementById(categoryId);
  const productList = categoryElement.querySelector("#product-list");

  products.forEach((product) => {
    const productCard = createProductCard(
      product.img,
      product.title,
      product.price
    );
    productList.appendChild(productCard);
  });
};

const createCategory = (categoryTitle, categoryId) => {
  const category = categoryTemplate.cloneNode(true);
  category.querySelector(".category-title").textContent = categoryTitle;
  category.querySelector("#category-container").id = categoryId;

  console.log(categoryTitle);
  if (categoryTitle.startsWith("Sale")) {
    salesContainer.appendChild(category);
  }

  categoryContainer.appendChild(category);
};

createCategory("Women", "category-women");
createCategory("Kids", "category-kids");
createCategory("Men", "category-men");
createCategory("Restock/Reorder", "category-restock");
createCategory("Sale/Pickup", "category-restock");

addCardsToCategory(productWomenData, "category-women");
addCardsToCategory(productKidsData, "category-kids");
addCardsToCategory(productMensData, "category-men");
addCardsToCategory(productRestockData, "category-restock");
addCardsToCategory(salesData, "sales");
