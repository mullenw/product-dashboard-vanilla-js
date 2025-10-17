function fetchProductsThen() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => {
    
      return response.json();
    })
    .then((data) => {
      console.log("Products loaded with .then():");
      data.forEach((product) => {
        console.log(product.title);
      });
    })
    .catch((error) => {
      console.log("Error with .then() fetch:", error);
    });
}

async function fetchProductsAsync() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}

function displayProducts(products) {
  const container = document.getElementById("product-container");
  const firstFive = products.slice(0, 5);
  if (!container) {
    console.log("Error: product-container not found");
    return;
  }

    firstFive.forEach((product) => {
    const { title, price, image } = product;
    const imgURL = image;
    const priceDollars = price.toFixed(2);

    const card = document.createElement("div");
    card.classList.add("product-card");

    const img = document.createElement("img");
    img.src = imgURL;
    img.alt = title;

    const productName = document.createElement("h3");
    productName.textContent = title;

    const productPrice = document.createElement("p");
    productPrice.textContent = `$${priceDollars}`;

    card.appendChild(img);
    card.appendChild(productName);
    card.appendChild(productPrice);

        container.appendChild(card);
  });
}

function handleError(error) {
  const container = document.getElementById("product-container");
  if (container) container.textContent = "Error loading products.";
  console.log("An error occurred:", error.message);
}
window.addEventListener("load", () => {
  fetchProductsThen();
  fetchProductsAsync();
});
