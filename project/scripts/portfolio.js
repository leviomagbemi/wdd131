const portfolioImages = [
  { src: 'https://images.unsplash.com/photo-1582054802212-e67b106d6fca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlMjBwaG90b3Nob290fGVufDB8fDB8fHww', category: 'Portrait' },
  { src: 'https://images.unsplash.com/photo-1605988178022-c85ec62c7267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5ld2Jvcm4lMjBwaG90b3Nob290fGVufDB8fDB8fHww', category: 'Newborn' },
  { src: 'https://images.unsplash.com/photo-1731932776998-e809d58fbc06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhbWlseSUyMHBob3Rvc2hvb3R8ZW58MHx8MHx8fDA%3D', category: 'Family' },
  { src: 'https://plus.unsplash.com/premium_photo-1661610681259-65823ea607fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV3Ym9ybiUyMHBob3Rvc2hvb3R8ZW58MHx8MHx8fDA%3D', category: 'Newborn' },
  { src: 'https://images.unsplash.com/photo-1732831387596-4fa883920e2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ld2Jvcm4lMjBwaG90b3Nob290fGVufDB8fDB8fHww', category: 'Newborn' },
  { src: 'https://plus.unsplash.com/premium_photo-1690148812608-9942834931a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D', category: 'Weddings' },
  { src: 'https://images.unsplash.com/photo-1702360682815-abdb776cf840?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hdGVybml0eSUyMHBob3Rvc2hvb3R8ZW58MHx8MHx8fDA%3D', category: 'Maternity' },
  { src: 'https://images.unsplash.com/photo-1684919556999-a42d37ffccc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0JTIwcGhvdG9zaG9vdHxlbnwwfHwwfHx8MA%3D%3D', category: 'Portrait' },
  { src: 'https://images.unsplash.com/photo-1655879258401-a939a35efaea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHdlZGRpbmdwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D', category: 'Weddings' },
  { src: 'https://images.unsplash.com/photo-1656633702381-939966720da4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV3Ym9ybiUyMHBob3Rvc2hvb3R8ZW58MHx8MHx8fDA%3D', category: 'Newborn' },
  { src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D', category: 'Weddings' },
  { src: 'https://plus.unsplash.com/premium_photo-1663076211121-36754a46de8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D', category: 'Weddings' },
  { src: 'https://images.unsplash.com/photo-1705746401517-f0c2641b33a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hdGVybml0eSUyMHBob3Rvc2hvb3R8ZW58MHx8MHx8fDA%3D', category: 'Maternity' },
  { src: 'https://media.istockphoto.com/id/694079616/photo/amazing-blue-dress.webp?a=1&b=1&s=612x612&w=0&k=20&c=-UnYInvPxXx4Sc0KONArPvsHM1LiPu5Ssqu9et6mPBM=', category: 'Maternity' },
  { src: 'https://plus.unsplash.com/premium_photo-1661681219321-e61a69db543c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFtaWx5JTIwcGhvdG9zaG9vdHxlbnwwfHwwfHx8MA%3D%3D', category: 'Family' },
  { src: 'https://images.unsplash.com/photo-1581952975975-08cd95a728d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhbWlseSUyMHBob3Rvc2hvb3R8ZW58MHx8MHx8fDA%3D', category: 'Family' },
 
  { src: 'https://plus.unsplash.com/premium_photo-1661680817756-a0d690181c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhbWlseSUyMHBob3Rvc2hvb3R8ZW58MHx8MHx8fDA%3D', category: 'Family' },
  { src: 'https://plus.unsplash.com/premium_photo-1664053011442-67d7852daed0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWF0ZXJuaXR5JTIwcGhvdG9zaG9vdHxlbnwwfHwwfHx8MA%3D%3D', category: 'Maternity' },
  { src: 'https://plus.unsplash.com/premium_photo-1664360496884-ffd556c1023c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRyYWl0JTIwcGhvdG9zaG9vdHxlbnwwfHwwfHx8MA%3D%3D', category: 'Portrait' },
  { src: 'https://images.unsplash.com/photo-1676856057497-878f2cd30c53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXQlMjBwaG90b3Nob290fGVufDB8fDB8fHww', category: 'Portrait' },
];
const currentUrl = window.location.href;
const portfolioNavItems = document.querySelectorAll(".portfolio-nav-item");
const imageContainer = document.querySelector(".portfolio-filtered-result");

let previousNav;


portfolioNavItems.forEach(function(item){
  item.addEventListener("click", () => {
    const category = item.textContent;

    // Remove Active Class From Default Nav If
    // Another Nav is Clicked First
    portfolioNavItems[0].querySelector("button").classList.remove("active");

    // Make Previous Nav Inactive if Present
    if (previousNav)
      previousNav.classList.remove("active");

    // Get Current Nav and Make it Active
    const currentNav = item.querySelector("button");
    currentNav.classList.add("active");

   currentUrl.includes("portfolio.html") ? renderImgElement(filterImages(category, 0, portfolioImages.length)) : renderImgElement(filterImages(category, 0, 10));

   // Get Previous Nav
   previousNav = currentNav;
  });
});

function filterImages(category, start, end){
  const arr = portfolioImages.slice(start, end);

  if (category == "All"){
    return arr;
  }

  return arr.filter((image) => image.category == category);
}

function renderImgElement(images){
  imageContainer.innerHTML = "";

  images.forEach((image) => {
    const img = document.createElement("img");
    const div = document.createElement("div");

    img.src = image.src
    img.width = 500;
    img.height = 250;
    img.loading = "lazy";
    img.alt = `${image.category} Photography`;

    div.appendChild(img)

    imageContainer.appendChild(div);
  })

}

// Determine Number of Images to Load based on Page
currentUrl.includes("portfolio.html") ? document.addEventListener("DOMContentLoaded", renderImgElement(filterImages("All", 0, portfolioImages.length))) : document.addEventListener("DOMContentLoaded", renderImgElement(filterImages("All", 0, 10)));