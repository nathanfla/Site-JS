const themebutton = document.querySelector(".themebutton");
themebutton.addEventListener("click", () => {
  const body = document.body;

  body.classList.toggle("dark");
});
