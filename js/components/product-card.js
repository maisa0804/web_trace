import productWomenData from "../static/product_women_data.js";
import productMensData from "../static/product_men_data.js";
import productKidsData from "../static/product_kids_data.js";
import productRestockData from "../static/product_restock_data.js";
import salesData from "../static/sales_data.js";

const productCardTemplate = document.getElementById("product-card").content;
const categoryContainer = document.getElementById("categories");
const salesContainer = document.getElementById("sales");

const categoryTemplate = document.getElementById("category-template").content;

const calcSalesPrice = (price) => {
  const priceNumber = Number(price.replace(/,/g, '')) * 0.7; 
  return priceNumber.toString()
};

const createProductCard = (img, title, price) => {
  const card = productCardTemplate.cloneNode(true);
  const imageElement = card.querySelector(".product-image");
  const titleElement = card.querySelector(".product-title");
  const priceElement = card.querySelector(".product-price");
  const container = card.querySelector(".image-container");

  imageElement.src = img;
  titleElement.textContent = title;
  
  if(img.includes("sales")) {
    priceElement.textContent = calcSalesPrice(price); 
  }
  priceElement.textContent = price



  if (img.includes("sales")) {
    if (container) {
      container.classList.add("sales-image");
      priceElement.classList.add("sale-price");

      const discountedPriceSpan = document.createElement("span");
      discountedPriceSpan.textContent = `¥${price}(税込)`;
      discountedPriceSpan.classList.add("original-price");
      priceElement.appendChild(discountedPriceSpan);
    }
  }

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
