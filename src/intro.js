import bg from './background.jpg';

function intro() {
    const intro = document.createElement('div');
    intro.classList.add('intro');
    // intro.style.backgroundImage = `url(${bg})`;

    return intro;
}

export default intro;
