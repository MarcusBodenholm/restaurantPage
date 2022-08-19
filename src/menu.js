import biscotto from "./images/biscottodellanonna.jpg";
import cioccolato from "./images/cioccolatoallatte.jpeg";
import croccante from "./images/croccantedellanonna.jpeg";
import fragola from "./images/fragola.jpeg";
import frutto from "./images/futtodibosco.jpeg";
import pannacotta from "./images/pannacotta.jpeg";
import straccia from "./images/stracciatella.jpeg";
import yogurtLampone from "./images/yogurtallampone.jpeg";
import pistacchio from "./images/pestodipistacchio.jpeg";

const gelato = [
  { name: "Biscotto della Nonna", src: biscotto },
  { name: "Cioccolato al Latte", src: cioccolato },
  { name: "Croccante della Nonna", src: croccante },
  { name: "Fragola", src: fragola },
  { name: "Frutto di Bosco", src: frutto },
  { name: "Panna Cotta", src: pannacotta },
  { name: "Stracciatella", src: straccia },
  { name: "Yogurt al Lampone", src: yogurtLampone },
  { name: "Pesto di Pistacchio", src: pistacchio },]

function card(obj) {
  const div = document.createElement('div');
  div.classList.add('card');
  const img = document.createElement('img');
  img.src = obj.src;
  img.alt = obj.name;
  img.classList.add('cardimg');
  const p = document.createElement('p');
  p.innerHTML = obj.name;
  div.appendChild(img);
  div.appendChild(p);
  return div;
}

function initMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  const h1 = document.createElement('h1');
  h1.innerHTML = "Gelato Flavors";
  menu.appendChild(h1);
  const para = document.createElement('p');
  para.innerHTML = `Below are but a few of the flavors you can choose from at Gelateria Generica! Remember that you can choose your own combination of these flavors to create your own favorite gelato. Our recommendation is to start with Le Due Nonne: Combine Biscotto della Nonna with Croccante della Nonna! You will not regret it.`;
  menu.appendChild(para);
  const grid = document.createElement('div');
  grid.classList.add('grid');
  gelato.forEach(x => {
    const gridCard = card(x);
    grid.appendChild(gridCard);
  })
  menu.appendChild(grid);
  document.querySelector('#content').appendChild(menu);
}

export default initMenu;