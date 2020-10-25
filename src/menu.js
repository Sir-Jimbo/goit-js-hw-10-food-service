import menuTemplate from './menu.hbs';
import menu from './menu.json';

const menuContainer = document.querySelector('ul.js-menu');

const cards = menuTemplate(menu);

menuContainer.insertAdjacentHTML('beforeend', cards);