const openBtn = document.querySelector(".nav-menu-open-btn");
const closeBtn = document.querySelector(".nav-menu-close-btn");

openBtn.addEventListener("click", () => {
  const menu = document.querySelector(".nav-menu");

  openBtn.classList.toggle("active");
  closeBtn.classList.toggle("active");
  menu.classList.toggle("active");
});
closeBtn.addEventListener("click", () => {
  const menu = document.querySelector(".nav-menu");

  openBtn.classList.toggle("active");
  closeBtn.classList.toggle("active");
  menu.classList.toggle("active");
});
