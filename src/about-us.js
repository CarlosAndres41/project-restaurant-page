import pic from './about.jpg';

function aboutUs() {
    const aboutUs = document.createElement('div');
    aboutUs.classList.add('about-us');

    // create containers
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-cont');
    const textContainer = document.createElement('div');
    textContainer.classList.add('text-cont');

    // add image
    const aboutPic = new Image();
    aboutPic.src = pic;
    aboutPic.classList.add('about-pic');
    imgContainer.appendChild(aboutPic);

    // Add text

    const aboutH1 = document.createElement('h1');
    aboutH1.classList.add('about-h1');
    aboutH1.textContent = 'About Us';
    textContainer.appendChild(aboutH1);

    const aboutP = document.createElement('p');
    aboutP.classList.add('about-p');
    aboutP.textContent =
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."';
    textContainer.appendChild(aboutP);

    // Add containers to aboutUs div
    aboutUs.appendChild(imgContainer);
    aboutUs.appendChild(textContainer);

    return aboutUs;
}

export default aboutUs;
