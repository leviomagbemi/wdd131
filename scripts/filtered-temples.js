const hamburgerMenu = document.querySelector("#menu");
const headerLogo = document.querySelector("#header-logo")
const navigationList = document.querySelector(".nav-list");
const mainSection = document.querySelector("section");
const navLinks = document.querySelectorAll('.nav-list li a');

let filteredArray;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Greater Accra, Ghana",
    dedicated: "2004, January 11",
    area: 9600,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/7cf8e8b9e5a5a1f379d4e2c9bc2166f9c6007aca/full/640%2C/0/default"
  },
  {
    templeName: "Alabang Philippines",
    location: "Accra, Greater Accra, Ghana",
    dedicated: "Construction",
    area: 156558,
    imageUrl: "https://churchofjesuschrist.org/imgs/ec00d8889229f1ef142442028072ac5f472e553d/full/640%2C/0/default"
  },
  {
    templeName: "Chicago Illinois",
    location: "Accra, Greater Accra, Ghana",
    dedicated: "1985, August 9",
    area: 74792,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/5dcf1ba0e76511eca9fbeeeeac1e06cbebd2c32a/full/640%2C/0/default"
  }
];


hamburgerMenu.addEventListener('click', function (){
  hamburgerMenu.classList.toggle("open");
  headerLogo.classList.toggle("logo-hide");
  navigationList.classList.toggle("show-nav-list");
});

navLinks.forEach(function(link){
  link.addEventListener('click', function(){
    const linkText = link.textContent.toLowerCase()
    
    switch(linkText){
      case "old":
        filteredArray = temples.filter((temple) => parseInt(temple.dedicated.split(",")[0]) < 1990);
        break;

      case "new":
        filteredArray = temples.filter((temple) => parseInt(temple.dedicated.split(",")[0]) > 2000);
        break;

      case "large":
        filteredArray = temples.filter((temple) => temple.area > 90000);
        break;

      case "small":
        filteredArray = temples.filter((temple) => temple.area < 10000);
        break;

      default:
        filteredArray = temples;
    }

    render(filteredArray);
  })
})

function createListItem(label, value){
  const listItem = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = `${label}: `;
  listItem.appendChild(span);
  listItem.appendChild(document.createTextNode(value));

  return listItem;
}

function render(filteredTemples){
  mainSection.innerHTML = "";

  filteredTemples.forEach(function(temple){
  // Create Elements
  const article = document.createElement('article');
  const heading = document.createElement('h3');

  const infoList = document.createElement('ul');
  const listItem1 = createListItem("Located", temple.location);
  const listItem2 = createListItem("Dedicated", temple.dedicated);
  const listItem3 = createListItem("Size", `${temple.area} sq ft`);

  const image = document.createElement('img');

  // Add content to Elements
  heading.textContent = temple.templeName;

  image.width = "400";
  image.height = "250";
  image.setAttribute("loading",  "lazy");
  image.src = temple.imageUrl;
  image.alt = temple.templeName;
  
  infoList.appendChild(listItem1);
  infoList.appendChild(listItem2);
  infoList.appendChild(listItem3);

  article.appendChild(heading); 
  article.appendChild(infoList); 
  article.appendChild(image); 

  mainSection.appendChild(article);
})
}

render(temples);