let input = document.querySelector("input");
let img = document.querySelector("img");

img.addEventListener("click", (e) => {
  if (input.type == "password") {
    img.src = "eye-open.png";
    input.type = "text";
  }
  else{
    img.src = "eye-close.png";
    input.type = "password";
  }
});
