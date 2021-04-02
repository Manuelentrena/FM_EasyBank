const btnBurguer = document.querySelector("#btnBurguer");
const menuBurguer = document.querySelector("#menuBurguer");
const body = document.querySelector("body");
btnBurguer.addEventListener("click", showMenuBurguer);

function showMenuBurguer() {
  body.classList.toggle("u-hidden");
  btnBurguer.classList.toggle("changeIconMenu");
  menuBurguer.classList.toggle("u-none");
}
