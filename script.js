let inputbox = document.querySelector("#inputbox");
let list = document.querySelector("#list");

inputbox.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addItem(this.value);
    this.value = "";
  }
});

let addItem = (inputText) => {
  if (inputText.trim() !== "") {
    // Check if the input is not empty
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputText} <i></i>`;

    listItem.addEventListener("click", function () {
      this.classList.toggle("done");
    });
    listItem.querySelector("i").addEventListener("click", function () {
      listItem.remove();
    });
    list.appendChild(listItem);
  }
};