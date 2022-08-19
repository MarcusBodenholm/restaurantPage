const locations = [
  ["New York", "Address: New York Street 561, New York"],
  ["Boston", "Address: Boston Avenue 721, Boston"],
  ["Los Angeles", "Address: LA Corner 123, Los Angeles"],
  ["Houston", "Address: Houston we have a problem 851, Houston"],
  ["Paris", "Address: Rue de la Paris 1, Paris"],
  ["London", "Address: London Bridge 39161, London"],
  ["Rome", "Address: Via Garibaldi 9991234, Rome"],
  ["Milano", "Address: Via Lombardy, Milano"],
  ["Stockholm", "Address: Kunsgårdsgatvägen 2, Stockholm"],
]
const contactText = [
  ["Email us!", `If you visited us and your visit left you speechless and provided you with an unforgettable moment, we would
  love to hear it! Throw us an email to gelateriagenerica@notarealemail.com and we will make sure to get back to
  you within 24 hours.`],
  ["Visit us!", `Visit one of our many non-existent locations around the world. Below you will find a list of all the locations
  where we are located:`]
]

function initContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');
  const h1 = document.createElement('h1');
  h1.innerHTML = "Ways to contact us";
  contact.appendChild(h1);
  contactText.forEach(text => {
    const [header, para] = text;
    const h3 = document.createElement('h3');
    h3.innerHTML = header;
    const p = document.createElement('p');
    p.innerHTML = para;
    contact.appendChild(h3);
    contact.appendChild(p)
  });
  const ul = document.createElement('ul');
  locations.forEach(location => {
    const [city, address] = location;
    const li = document.createElement('li');
    li.innerHTML = city;
    const p = document.createElement('p');
    p.innerHTML = address;
    li.appendChild(p);
    ul.appendChild(li);
  })
  const p = document.createElement('p');
  p.innerHTML = `Credit for the images on this simple page goes to my favorite gelateria in Italy, Gelateria La Romana. Please check them out, link in the footer below, and visit them if you ever find yourself near one of their locations!`
  p.classList.add('credit');
  contact.appendChild(ul);
  contact.appendChild(p)
  document.querySelector('#content').appendChild(contact)
}

export default initContact;