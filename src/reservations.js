function reserv() {
    const reservations = document.createElement('div');
    reservations.classList.add('res-div');

    // Create and add h1
    const reservH1 = document.createElement('h1');
    reservH1.classList.add('reserv-h1');
    reservH1.textContent = 'Reserve your table';
    reservations.appendChild(reservH1);

    // Create form
    const form = document.createElement('form');
    form.classList.add('res-form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', '');

    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.setAttribute('name', 'date');
    date.setAttribute('id', 'date');
    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Date';
    dateLabel.setAttribute('for', 'date');
    form.appendChild(dateLabel);
    form.appendChild(date);
    form.appendChild(document.createElement('br'));

    const time = document.createElement('input');
    time.setAttribute('type', 'time');
    time.setAttribute('name', 'time');
    time.setAttribute('id', 'time');
    const timeLabel = document.createElement('label');
    timeLabel.textContent = 'Time';
    timeLabel.setAttribute('for', 'time');
    form.appendChild(timeLabel);
    form.appendChild(time);
    form.appendChild(document.createElement('br'));

    const party = document.createElement('input');
    party.setAttribute('type', 'number');
    party.setAttribute('name', 'party');
    party.setAttribute('id', 'party');
    const partyLabel = document.createElement('label');
    partyLabel.textContent = 'Party Size';
    partyLabel.setAttribute('for', 'party');
    form.appendChild(partyLabel);
    form.appendChild(party);
    form.appendChild(document.createElement('br'));

    const checkButton = document.createElement('button');
    checkButton.classList.add('check-btn');
    checkButton.textContent = 'Check Availability';
    form.appendChild(checkButton);

    reservations.appendChild(form);

    return reservations;
}

export default reserv;
