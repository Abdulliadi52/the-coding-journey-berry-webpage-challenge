const btn = document.getElementById("menu");
const socialLink = document.getElementById("links");

btn.addEventListener("click", function () {
  socialLink.classList.toggle("active");
  document.body.classList.toggle("fixed");
});
