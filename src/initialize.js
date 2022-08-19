function initialize() {
  const header = document.createElement('header')
  const nav = list();
  header.appendChild(nav)
  const div = document.createElement('div');
  div.id = "content";
  const body = document.querySelector('body');
  const footerEl = footer();
  body.appendChild(header);
  body.appendChild(div);
  body.appendChild(footerEl);
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
  home.classList.add('current')
  ul.appendChild(home);
  ul.appendChild(menu);
  ul.appendChild(contact);
  nav.appendChild(ul);
  return nav;
}

function footer() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  const a = document.createElement('a');
  a.href = "https://www.gelateriaromana.com/en/";
  a.innerHTML = "Click here to check out Gelateria La Romana, one of the best gelaterias in Italy!";
  footer.appendChild(a);
  return footer;
}

export default initialize;