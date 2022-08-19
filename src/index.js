import initHome from './home';
import initialize from './initialize';
import initMenu from './menu';
import initContact from './contact';
import './style.css';

initialize();
initHome();

const functions = {
  "initHome": initHome,
  "initMenu": initMenu,
  "initContact": initContact,
}
let current = "initHome";

const content = document.querySelector('#content')

const tabs = document.querySelectorAll('.tabs > li');
tabs.forEach(tab => tab.addEventListener('click', (e) => {
  if (e.target.id !== current) {
    document.getElementById(current).classList.remove('current');
    document.getElementById(e.target.id).classList.add('current');
    current = e.target.id;
    reset()
    const test = functions[e.target.id];
    test()
  }
}))

function reset() {
  while (content.lastElementChild) {
    content.removeChild(content.lastElementChild);
  }
}