function initialize() {
  const header = document.createElement('header')
  const nav = list();
  header.appendChild(nav)
  const div = document.createElement('div');
  div.id = "content";
  const body = document.querySelector('body');
  body.appendChild(header);
  body.appendChild(div);
}

function list() {
  const nav = document.createElement('nav');
  function createLi(id, text) {
    const li = document.createElement('li');
    li.id = id;
    li.innerHTML = text;
    return li;
  }
  const ul = document.createElement('ul');
  ul.classList.add('tabs')
  const home = createLi("initHome", "Home");
  const menu = createLi("initMenu", "Menu");
  const contact = createLi("initContact", "Contact");
  ul.appendChild(home);
  ul.appendChild(menu);
  ul.appendChild(contact);
  nav.appendChild(ul);
  return nav;
}

export default initialize;