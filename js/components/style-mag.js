import styleMagData from "../static/styleMag_data.js";

const stylemagTemplate = document.getElementById("style-mag-template").content;
const container = document.getElementById("style-mag-list");

const createStylemagContent = (img, description) => {
  const stylemag = stylemagTemplate.cloneNode(true);
  stylemag.querySelector(".style-mag-image").src = img;
  stylemag.querySelector(".style-mag-text").textContent = description;
  container.appendChild(stylemag);
};

const addStylemags = (styleMagData) => {
  if (styleMagData) {
    for (let i = 0; i < styleMagData.length; i++) {
      createStylemagContent(
        styleMagData[i].img,
        styleMagData[i].description
      );
    }
  } else return;
};

addStylemags(styleMagData);
