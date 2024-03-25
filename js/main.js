// add hover in every list item

let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
    this.classList.add("hovered");
  });
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// menu toggle

let navigation = document.querySelector(".navigation"),
  toggle = document.querySelector(".toggle");
main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};
