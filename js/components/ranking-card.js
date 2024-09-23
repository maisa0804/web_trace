import rankingData from "../static/ranking_data.js";

const rankingCardTemplate = document.getElementById("ranking-card").content;
const rankingContainer = document.getElementById("ranking-list");

const createRankingCard = (img, title, price, index) => {
  const card = rankingCardTemplate.cloneNode(true);
  card.querySelector(".ranking-image").src = img;
  card.querySelector(".ranking-title").textContent = title;
  card.querySelector(".ranking-price").textContent = price;
  card.querySelector(".rank-number").textContent = index + 1

  const rankNumberElement = card.querySelector(".rank-number");
  rankNumberElement.classList.add(`rank-${index + 1}`);
  
  return card;
};

const addRankingCards = (rankingData) => {
  if (rankingData) {
    for (let i = 0; i < rankingData.length; i++) {
      // span.textContent = i + 1
      const rankingCard = createRankingCard(
        rankingData[i].img,
        rankingData[i].title,
        rankingData[i].price,
        i
      );
      rankingContainer.appendChild(rankingCard);
    }
  } else return;
};

addRankingCards(rankingData);
