function navBar() {
    const navBar = document.createElement('div');
    navBar.classList.add('navbar');

    // Create a div for logo and restaurant's name
    const logoAndName = document.createElement('div');
    logoAndName.classList.add('logo-name');
    // Logo
    const logo = document.createElement('i');
    logo.classList.add('logo');
    // Name
    const name = document.createElement('h1');
    name.classList.add('name');
    name.textContent = "Restaurant's Name";

    // Append logo and name to div
    logoAndName.appendChild(logo);
    logoAndName.appendChild(name);

    // Create a div for buttons
    const buttons = document.createElement('div');
    buttons.classList.add('buttons');

    // Create buttons
    const aboutButton = document.createElement('span');
    aboutButton.classList.add('action');
    aboutButton.classList.add('abt-btn');
    aboutButton.textContent = 'About Us';
    const menuButton = document.createElement('span');
    menuButton.classList.add('action');
    menuButton.classList.add('menu-btn');
    menuButton.textContent = 'Menu';
    const contactButton = document.createElement('span');
    contactButton.classList.add('action');
    contactButton.classList.add('res-btn');
    contactButton.textContent = 'Reservations';

    // Append buttons to their div
    buttons.appendChild(aboutButton);
    buttons.appendChild(menuButton);
    buttons.appendChild(contactButton);

    // Add logo and buttons div to navbar
    navBar.appendChild(logoAndName);
    navBar.appendChild(buttons);

    return navBar;
}

export default navBar;
