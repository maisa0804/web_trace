import instagramData from "../components/instagram-card.js";

const instagramCardsContainer = document.getElementById("instagram-articles");
const instagramCardTemplate = document.getElementById("instagram-card").content;

const createInstgramCard = (img, description) => {
  const article = instagramCardTemplate.cloneNode(true);
  article.querySelector(".article-image").src = img;
  article.querySelector(".description").textContent = description;

  instagramCardsContainer.appendChild(article);
};

const addArticles = (data) => {
  if (data) {
    for (let i = 0; i < data.length; i++) {
      createInstgramCard(data[i].img, data[i].description);
    }
  } else return;
};

addArticles(instagramData);
