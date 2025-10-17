function fetchProductsThen() {
  fetch("https://www.course-api.com/javascript-store-products")
    .then((response) => {
    
      return response.json();
    })
    .then((data) => {
      console.log("Products loaded with .then():");
      data.forEach((product) => {
        console.log(product.fields.name);
      });
    })
    .catch((error) => {
      console.log("Error with .then() fetch:", error);
    });
}

async function fetchProductsAsync() {
  try {
    const response = await fetch("https://www.course-api.com/javascript-store-products");
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}

function displayProducts(products) {
  const container = document.getElementById("product-container");
  container.innerHTML = "";
  const firstFive = products.slice(0, 5);

    firstFive.forEach((product) => {
    const { name, price, image } = product.fields;
    const imgURL = image[0].url;
    const priceDollars = (price / 100).toFixed(2);
    const card = document.createElement("div");
    card.classList.add("product-card");

    