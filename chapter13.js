const btn = document.getElementById("myButton");
btn.innerText = "Found with getElementById!";

const btn = document.querySelector("#myButton");
btn.innerText = "Found with querySelector!";

const btn = document.getElementById("myButton");
btn.innerHTML = "<b>Bold Text</b>";

const span = document.createElement("span");
span.innerText = " → New Element";
document.body.appendChild(span);

const newDiv = document.createElement("div");
newDiv.innerText = "Appended!";
document.body.appendChild(newDiv);

const btn = document.getElementById("myButton");
btn.addEventListener("click", () => {
  alert("Button was clicked!");
});

const btn = document.getElementById("myButton");
btn.classList.add("highlight");
btn.style.backgroundColor = "lightblue";

const btn = document.getElementById("myButton");
btn.remove();
