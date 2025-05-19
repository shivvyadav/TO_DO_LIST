let input = document.querySelector("input");
let add = document.querySelector(".add");
let ul = document.querySelector("ul");

add.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = input.value;

  let btn = document.createElement("button");
  btn.innerText = "Delete";
  btn.classList.add("delete");
  item.appendChild(btn);
  ul.appendChild(item);
  input.value = "";
});

input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    let item = document.createElement("li");
    item.innerText = input.value;

    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.classList.add("delete");
    item.appendChild(btn);
    ul.appendChild(item);
    input.value = "";
  }
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let parent = event.target.parentElement;
    parent.remove();
  }
});
