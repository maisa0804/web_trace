import rankingData from "../static/ranking_data.js";

const rankingCardTemplate = document.getElementById("ranking-card").content;
const rankingContainer = document.getElementById("ranking-list");

const createRankingCard = (img, title, price) => {
  const card = rankingCardTemplate.cloneNode(true);
  card.querySelector(".ranking-image").src = img;
  card.querySelector(".ranking-title").textContent = title;
  card.querySelector(".ranking-price").textContent = price;
  return card;
};

const addRankingCards = (rankingData) => {
  if (rankingData) {
    for (let i = 0; i < rankingData.length; i++) {
      const rankingCard = createRankingCard(
        rankingData[i].img,
        rankingData[i].title,
        rankingData[i].price
      );
      rankingContainer.appendChild(rankingCard);
    }
  } else return;
};

addRankingCards(rankingData);
