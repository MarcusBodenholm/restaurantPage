import initHome from './home';
import initialize from './initialize';
import initMenu from './menu';
import initContact from './contact';
import './style.css';

initialize();
initHome();
initMenu();
initContact();

const functions = {
  "initHome": initHome,
  "initMenu": initMenu,
  "initContact": initContact,
}

const content = document.querySelector('#content')

const tabs = document.querySelectorAll('.tabs > li');
tabs.forEach(tab => tab.addEventListener('click', (e) => {
  console.log(e)
  reset()
  const test = functions[e.target.id];
  console.log(test)
  test()
}))

function reset() {
  while (content.lastElementChild) {
    content.removeChild(content.lastElementChild);
  }
}