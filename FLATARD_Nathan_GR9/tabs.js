const lightbox = new SimpleLightbox(".card a");

const options = {
  gutterPixels: 50,
};

const filterizr = new Filterizr(".portfolio-elements", options);

let filterItems = document.querySelectorAll(".filters li");
filterItems.forEach(function (filterItem) {
  filterItem.addEventListener("click", function () {
    document.querySelector("li.active").classList.remove("active");
    filterItem.classList.add("active");
  });
});

const themebutton = document.querySelector(".themebutton");
themebutton.addEventListener("click", () => {
  const body = document.body;

  body.classList.toggle("dark");
});
