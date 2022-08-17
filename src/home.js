import homeImage from './test.jpg';

const text = [
  `Welcome to the best Gelateria this side of the Italian border. At our establishments you can enjoy authentic
  Italian gelato. Choose
  from a myriad of different flavors, all made locally by our talented artisans using the finest ingredients.`,
  `Take a look at our menu for more information on our flavors, so that you can plan out your ultimate gelato!`,
  `Head over to our contact page to learn the best ways to contact us and leave feedback on our fantastic
  products,
  or to find a list of our non-existent gelaterias.`
]

function initHome() {
  const home = document.createElement('div');
  home.classList.add('home');
  const div = document.createElement('div');
  div.classList.add('image');
  const image = document.createElement('img');
  image.src = homeImage;
  image.alt = "Gelateria";
  div.appendChild(image);
  home.appendChild(div);
  const h1 = document.createElement('h1');
  h1.innerHTML = "Gelateria Generica";
  home.appendChild(h1);
  text.forEach(para => {
    const p = document.createElement('p');
    p.innerHTML = para;
    home.appendChild(p);
  })
  document.querySelector('#content').appendChild(home);
}
export default initHome;