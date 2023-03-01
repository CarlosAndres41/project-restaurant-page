function navBar() {
    const navBar = document.createElement('div');
    navBar.classList.add('navbar');
    const logo = document.createElement('i');
    logo.classList.add('logo');

    // Create a div fo buttons
    const buttons = document.createElement('div');
    buttons.classList.add('buttons');

    // Create buttons
    const restButton = document.createElement('button');
    restButton.classList.add('btn');
    restButton.textContent = 'My Restaurant';
    const menuButton = document.createElement('button');
    menuButton.classList.add('btn');
    menuButton.textContent = 'Menu';
    const contactButton = document.createElement('button');
    contactButton.classList.add('btn');
    contactButton.textContent = 'Contact Us';

    // Append buttons to their div
    buttons.appendChild(restButton);
    buttons.appendChild(menuButton);
    buttons.appendChild(contactButton);

    // Add logo and buttons div to navbar
    navBar.appendChild(logo);
    navBar.appendChild(buttons);

    return navBar;
}

export default navBar;
