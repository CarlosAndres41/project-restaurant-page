function intro() {
    const intro = document.createElement('div');
    intro.classList.add('intro');

    const welcome = document.createElement('h2');
    welcome.classList.add('welcome-text');
    welcome.textContent = 'Welcome to';

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-text');
    restaurantName.textContent = "Restaurant's name";

    const attribution = document.createElement('a');
    attribution.classList.add('attribution');
    attribution.setAttribute('href', 'https://unsplash.com/photos/DCmUhk54F6M');
    attribution.textContent = 'Image by Piotr Szulawski at Unsplash.com';

    intro.appendChild(welcome);
    intro.appendChild(restaurantName);
    intro.appendChild(attribution);

    return intro;
}

export default intro;
