document.getElementById('buton1').addEventListener('click', () => {
    const container = document.getElementById('container');

    if (!document.querySelector('.square')) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
});

document.getElementById('buton2').addEventListener('click', () => {
    const square = document.querySelector('.square');

    if (square) {
        const colors = ['red', 'blue', 'green', 'purple', 'orange'];
        const currentColor = square.style.backgroundColor;

        let newColor;
        do {
            newColor = colors[Math.floor(Math.random() * colors.length)];
        } while (newColor === currentColor);

        square.style.backgroundColor = newColor;
    }
});