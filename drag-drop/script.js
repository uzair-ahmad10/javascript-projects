let left = document.querySelector(".left");
let right = document.querySelector(".right");
let lists = document.querySelectorAll(".list");

let selected = null;

for (let list of lists) {
  list.addEventListener("dragstart", (evt) => {
    selected = evt.target;

    right.addEventListener("dragover", (evt) => {
      evt.preventDefault();
    });

    right.addEventListener("drop", (evt) => {
      if (selected) {
        right.appendChild(selected);
        selected = null;
      }
    });

    left.addEventListener("dragover", (evt) => {
      evt.preventDefault();
    });

    left.addEventListener("drop", (evt) => {
      if (selected) {
        left.appendChild(selected);
        selected = null;
      }
    });
  });
}
