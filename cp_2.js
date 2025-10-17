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
