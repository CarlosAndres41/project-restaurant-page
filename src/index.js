import './style.css';
import navBar from './nav-bar.js';
import intro from './intro.js';
import aboutUs from './about-us.js';
import menu from './menu.js';

// Content div:

const cont = document.querySelector('#content');
cont.appendChild(navBar());
cont.appendChild(intro());
cont.appendChild(aboutUs());
cont.appendChild(menu());
