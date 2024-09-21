import productWomenData from "../static/product_women_data.js";
import productMensData from "../static/product_men_data.js";
import productKidsData from "../static/product_kids_data.js";

const productCardTemplate = document.getElementById("product-card").content;
const cardContainer = (categoryId) => document.getElementById(categoryId);

const createProductCard = (img, title, price, categoryId) => {
  const card = productCardTemplate.cloneNode(true);
  card.querySelector(".product-image").src = img;
  card.querySelector(".product-title").textContent = title;
  card.querySelector(".product-price").textContent = price;

  const container = cardContainer(categoryId);
  container.appendChild(card);
};

const addCardsToCategory = (categoryId) => {
  switch (categoryId) {
    case "category-women":
      for (let i = 0; i < productWomenData.length; i++) {
        createProductCard(
          productWomenData[i].img,
          productWomenData[i].title,
          productWomenData[i].price,
          categoryId
        );
      }
      break;
    case "category-kids":
      for (let i = 0; i < productKidsData.length; i++) {
        createProductCard(
          productKidsData[i].img,
          productKidsData[i].title,
          productKidsData[i].price,
          categoryId
        );
      }
      break;
    case "category-men":
      for (let i = 0; i < productMensData.length; i++) {
        createProductCard(
          productMensData[i].img,
          productMensData[i].title,
          productMensData[i].price,
          categoryId
        );
      }
      break;
    default:
      break;
  }
};

addCardsToCategory("category-women")
addCardsToCategory("category-kids")
addCardsToCategory("category-men")
