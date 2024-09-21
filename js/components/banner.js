import bannerData from "../static/banner_data.js";

const bannerTemplate = document.getElementById("banner-temp").content;
const bannerContainer = document.getElementById("main-banners")

const createBanner = (img, title, description) => {
  const banner = bannerTemplate.cloneNode(true);
  banner.querySelector(".banner-img").src = img
  banner.querySelector(".banner-title").textContent = title
  banner.querySelector(".banner-description").textContent = description

  bannerContainer.appendChild(banner)
}

const addBanners = (banners) => {
  if(bannerData) {
    for(let i = 0; i < bannerData.length; i++) {
      createBanner(banners[i].img, banners[i].title, banners[i].description )
    }
  } else return
}

addBanners(bannerData)