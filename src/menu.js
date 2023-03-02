function menu() {
    const menu = document.createElement('div');
    menu.classList.add('menu-div');

    // Create and add h1
    const menuH1 = document.createElement('h1');
    menuH1.classList.add('menu-h1');
    menuH1.textContent = 'Our Menu';
    menu.appendChild(menuH1);

    // Create menu options div
    const menuIntro = document.createElement('div');

    const menuH2 = document.createElement('h2');
    menuH2.classList.add('menu-h2');
    menuH2.textContent =
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.';
    menuIntro.appendChild(menuH2);

    const pricing = document.createElement('h4');
    pricing.classList.add('pricing');
    pricing.textContent = '$X0.00 per person';
    menuIntro.appendChild(pricing);

    const menuOpts = document.createElement('div');

    const main = document.createElement('h1');
    main.textContent = 'Mains';
    menuOpts.appendChild(main);

    const opt1 = document.createElement('h2');
    opt1.textContent = 'Wagyu New York Strip';
    const opt1Text = document.createElement('p');
    opt1Text.textContent = 'XXoz. premium graded, aged for XX days. XXXX cals';
    menuOpts.appendChild(opt1);
    menuOpts.appendChild(opt1Text);

    const opt2 = document.createElement('h2');
    opt2.textContent = 'Dry Aged Tomahawk';
    const opt2Text = document.createElement('p');
    opt2Text.textContent =
        'XXoz. Long Bone Ribeye, aged for XX days. XXXX cals';
    menuOpts.appendChild(opt2);
    menuOpts.appendChild(opt2Text);

    const opt3 = document.createElement('h2');
    opt3.textContent = 'Wagyu Ancho';
    const opt3Text = document.createElement('p');
    opt3Text.textContent =
        'XXoz. Long Bone Ribeye, aged for XX days. XXXX cals';
    menuOpts.appendChild(opt3);
    menuOpts.appendChild(opt3Text);

    menu.appendChild(menuIntro);
    menu.appendChild(menuOpts);
    return menu;
}

export default menu;
