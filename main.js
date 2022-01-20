const color = document.querySelector("#color");
const table = document.querySelector("#table > tbody");
const copy = document.querySelector("#copy");
const copied = document.querySelector("#copied");
let r, g, b;

randomColor = () => {
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  color.style.background = `rgb(${r},${g},${b})`;
};
randomColor();

const data = [];
let curr = 0;
const colors = ["white", "pink", "yellow", "orange", "green", "blue", "red", "black"];
for (const c of colors) {
  const el = document.querySelector(`#${c}`);
  el.addEventListener("click", () => {
    data.push({
      color: [r, g, b],
      choice: c,
    });
    const row = document.createElement("tr");
    for (let i = 0; i < 4; i++) row.appendChild(document.createElement("td"));
    row.children[0].style.background = `rgb(${r},${g},${b})`;
    row.children[1].innerText = `${r}, ${g}, ${b}`;
    row.children[2].innerText = c;
    row.children[3].appendChild(document.createElement("img"));
    row.children[3].children[0].src = "./x.png";
    const x = curr;
    row.children[3].children[0].addEventListener("click", () => {
      table.removeChild(row);
      console.log(x);
      data.splice(x, 1);
    });
    console.log(row);
    table.appendChild(row);
    randomColor();
    curr++;
  });
}

let rem;
copy.addEventListener("click", () => {
  navigator.clipboard.writeText(JSON.stringify(data));
});