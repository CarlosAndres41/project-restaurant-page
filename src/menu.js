function menu() {
    const menu = document.createElement('div');
    menu.classList.add('menu-div');

    // Create and add h1
    const menuH1 = document.createElement('h1');
    menuH1.classList.add('menu-h1');
    menuH1.textContent = 'Our Menu';
    menu.appendChild(menuH1);

    // Create menu intro div
    const menuIntro = document.createElement('div');
    menuIntro.classList.add('menu-intro');

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
    menuOpts.classList.add('menu-opts');

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

    // info
    const info = document.createElement('p');
    info.classList.add('menu-info');
    info.textContent =
        'Tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium';

    menu.appendChild(menuIntro);
    menu.appendChild(menuOpts);
    menu.appendChild(info);
    return menu;
}

export default menu;
