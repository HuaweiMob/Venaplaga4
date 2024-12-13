const snowflakeImages = [
    './img/snowflake1.svg',
    './img/snowflake2.svg',
    './img/snowflake3.svg'
];

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    // Случайное изображение
    const randomImage = snowflakeImages[Math.floor(Math.random() * snowflakeImages.length)];
    snowflake.style.backgroundImage = `url('${randomImage}')`;

    // Случайный размер
    const size = Math.random() * 20 + 10 + 'px'; // Размер от 10px до 30px
    snowflake.style.width = size;
    snowflake.style.height = size;

    // Случайная позиция и анимация
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.animationDelay = Math.random() * 5 + 's';

    document.body.appendChild(snowflake);

    // Удаляем снежинку после завершения анимации
    setTimeout(() => snowflake.remove(), 8000);
}

function startSnowfall() {
    setInterval(createSnowflake, 200);
}

startSnowfall();
