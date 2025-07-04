const productOptions = document.querySelector("#product-name");
const form = document.querySelector("form");

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.addEventListener("DOMContentLoaded", () => {
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;

    productOptions.appendChild(option);
  });
});


form.addEventListener("submit", () => {
  if(localStorage.getItem("reviews")){
    const reviews = parseInt(localStorage.getItem("reviews"))
    const newReviews = reviews + 1;

    localStorage.setItem("reviews", newReviews);
    return;
  }

  localStorage.setItem("reviews", 1);
});

