const productContainerTemplate = document.getElementById("category-template").content;
const productsContainer = (catedory) => document.getElementById(catedory)

console.log(productsContainer("category-women"))

const createContrainer = (catedory) => {
  const container = productContainerTemplate.cloneNode(true);
  container.querySelector(".category-title").textContent = catedory

  productsContainer(catedory).appendChild(container)
}

createContrainer("category-women")
createContrainer("category-kids")
createContrainer("category-men")
