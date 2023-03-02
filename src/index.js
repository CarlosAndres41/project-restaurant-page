import './style.css';
import navBar from './nav-bar.js';
import intro from './intro.js';
import aboutUs from './about-us.js';
import menu from './menu.js';
import reserv from './reservations.js';

// Content div:

const cont = document.querySelector('#content');
cont.appendChild(navBar());
cont.appendChild(intro());

// Select buttons
const about = document.querySelector('.abt-btn');
const menuBtn = document.querySelector('.menu-btn');
const reservBtn = document.querySelector('.res-btn');
const name = document.querySelector('.name');
const logo = document.querySelector('.logo');

// Add onclick method to buttons to display its corresponding information

name.onclick = function () {
    const toDelete = cont.childNodes[1];
    cont.removeChild(toDelete);
    cont.appendChild(intro());
};

logo.onclick = function () {
    const toDelete = cont.childNodes[1];
    cont.removeChild(toDelete);
    cont.appendChild(intro());
};

about.onclick = function () {
    const toDelete = cont.childNodes[1];
    cont.removeChild(toDelete);
    cont.appendChild(aboutUs());
};

menuBtn.onclick = function () {
    const toDelete = cont.childNodes[1];
    cont.removeChild(toDelete);
    cont.appendChild(menu());
};

reservBtn.onclick = function () {
    const toDelete = cont.childNodes[1];
    cont.removeChild(toDelete);
    cont.appendChild(reserv());
};
