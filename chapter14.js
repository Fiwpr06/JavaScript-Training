console.log(document.documentElement.nodeType); // 1
console.log(document.createTextNode("test").nodeType); // 3

let body = document.body;
console.log(body.firstChild); //text
console.log(body.children[0]); //p

// prints all tags in the body
// BODY
// P
// STRONG
// SCRIPT
function printTags(node) {
  if (node.nodeType === 1) {
    console.log(node.tagName);
  }
  for (let child of node.childNodes) {
    printTags(child);
  }
}
printTags(document.body);

let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);

let para = document.createElement("p");
para.textContent = "New paragraph";
document.body.appendChild(para);

let newDiv = document.createElement("div");
newDiv.textContent = "New div";
document.body.replaceChild(newDiv, para);

let ele = document.getElementsByTagName("div");
while (ele.length > 0) {
  ele[0].remove();
}

let link = document.createElement("a");
document.body.appendChild(link);
link.href = "https://www.google.com/";
link.textContent = "Google";

console.log(link.href);

let p = document.querySelector("p");
p.setAttribute("data-user", "12345");

console.log(p.getAttribute("data-user"));

let paraSeccond = document.createElement("p");
paraSeccond.textContent = "New paragraph second";
document.body.appendChild(paraSeccond);

paraSeccond.className = "highlighted";
paraSeccond.style.color = "blue";

let box = document.createElement("box");
document.body.appendChild(box);
console.log(box.offsetWidth, box.offsetHeight);
console.log(box.clientWidth, box.clientHeight);
console.log(box.getBoundingClientRect());

paraSeccond.style.fontSize = "24px";
paraSeccond.style.color = "green";

let pa = document.createElement("p");
for (let i = 1; i <= 3; i++) {
  pa.textContent = i.toString();
  pa.style.fontSize = "50px";
  document.body.appendChild(pa.cloneNode(true));
}

let firstP = document.querySelector("p");
let allInfo = document.querySelectorAll("p");
console.log(firstP.textContent); // First <p> element
console.log(allInfo); // NodeList of all <p> elements

box.style.position = "absolute";
box.style.width = "200px";
box.style.height = "100px";
box.style.backgroundColor = "cyan";
box.style.left = "400px";
box.style.top = "50px";

let angle = 0;
function animate(time) {
  box.style.left = 400 + Math.cos(angle) * 50 + "px";
  box.style.top = 100 + Math.sin(angle) * 50 + "px";
  angle += 0.05;
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
