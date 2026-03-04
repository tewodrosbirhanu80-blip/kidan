const users = [
    { name: 'Mellat', age: 22, location: 'Addis Ababa', img: 'images/mellat.png' },
    { name: 'Abel', age: 25, location: 'Bishoftu', img: 'images/abel.png' },
    { name: 'Hanna', age: 23, location: 'Adama', img: 'images/hanna.png' },
    { name: 'Daniel', age: 27, location: 'Addis Ababa', img: 'images/daniel.png' },
    { name: 'Konjit', age: 24, location: 'Bahir Dar', img: 'images/konjit.png' }
];

const container = document.getElementById('card-stack');

function loadCards() {
    users.forEach((user, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.zIndex = users.length - index;
        card.innerHTML = `
            <img src="${user.img}" alt="${user.name}">
            <div class="card-info">
                <h2>${user.name}, ${user.age}</h2>
                <p>${user.location}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

function swipeRight() {
    const cards = document.querySelectorAll('.card');
    if (cards.length > 0) {
        const topCard = cards[0];
        topCard.style.transform = 'translateX(1000px) rotate(30deg)';
        setTimeout(() => topCard.remove(), 400);
    }
}

function swipeLeft() {
    const cards = document.querySelectorAll('.card');
    if (cards.length > 0) {
        const topCard = cards[0];
        topCard.style.transform = 'translateX(-1000px) rotate(-30deg)';
        setTimeout(() => topCard.remove(), 400);
    }
}

// Start the app
loadCards();