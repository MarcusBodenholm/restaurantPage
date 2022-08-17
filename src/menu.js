const gelato = [
  { name: "Biscotto della Nonna", src: "./images/biscottodellanonna.jpg" },
  { name: "Cioccolato al Latte", src: "./images/cioccolatoallatte.jpeg" },
  { name: "Croccante della Nonna", src: "./images/croccantedellanonna.jpeg" },
  { name: "Fragola", src: "./images/fragola.jpeg" },
  { name: "Frutto di Bosco", src: "./images/futtodibosco.jpeg" },
  { name: "Panna Cotta", src: "./images/pannacotta.jpeg" },
  { name: "Stracciatella", src: "./images/stracciatella.jpeg" },
  { name: "Yogurt al Lampone", src: "./images/yogurtallampone.jpeg" },
  { name: "Pesto di Pistacchio", src: "./images/pestodipistacchio.jpeg" },]

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
  const h2 = document.createElement('h2');
  h2.innerHTML = "Gelato Flavors";
  menu.appendChild(h2);
  const para = document.createElement('p');
  para.innerHTML = `Below are but a few of the flavors you can choose from at Gelateria Generica!`;
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
initMenu();