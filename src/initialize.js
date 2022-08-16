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
  function createLi(id) {
    const li = document.createElement('li');
    li.id = id.toLowerCase();
    li.innerHTML = id;
    return li;
  }
  const ul = document.createElement('ul');
  ul.classList.add('tabs')
  const home = createLi("Home");
  const menu = createLi("Menu");
  const contact = createLi("Contact");
  ul.appendChild(home);
  ul.appendChild(menu);
  ul.appendChild(contact);
  nav.appendChild(ul);
  return nav;
}
initialize();