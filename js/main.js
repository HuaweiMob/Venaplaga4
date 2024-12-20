const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1. Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
    btnDarkMode.classList.add("dark-mode-btn--active");
	document.body.classList.add("dark");
}

// 2. Проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}

// Если меняются системные настройки, меняем тему
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";

        if (newColorScheme === "dark") {
			btnDarkMode.classList.add("dark-mode-btn--active");
			document.body.classList.add("dark");
			localStorage.setItem("darkMode", "dark");
		} else {
			btnDarkMode.classList.remove("dark-mode-btn--active");
			document.body.classList.remove("dark");
			localStorage.setItem("darkMode", "light");
		}
    });

// Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
};
document.addEventListener("DOMContentLoaded", () => {
    const openDialogBtn = document.querySelector(".btn"); // Кнопка "Записаться" в header
    const dialog = document.getElementById("dialog"); // Диалоговое окно
    const closeDialogBtn = dialog.querySelector(".close-dialog"); // Кнопка "Закрыть" в диалоговом окне
    const bookingButtons = dialog.querySelectorAll(".small-btn"); // Кнопки "Записаться" в диалоговом окне

    // Открытие диалогового окна
    openDialogBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Останавливаем переход по ссылке
        dialog.classList.remove("none"); // Показываем окно
    });

    // Закрытие диалогового окна
    closeDialogBtn.addEventListener("click", () => {
        dialog.classList.add("none"); // Скрываем окно
    });

    // Закрытие при клике вне окна
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.classList.add("none");
        }
    });

    // Обработка нажатия на кнопки "Записаться"
    bookingButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Получаем название съемки
            const shootingType = button.closest('li').querySelector('h4').textContent;

            // Формируем сообщение для отправки в WhatsApp
            const message = `Здравствуйте! Я хотел(а) записаться на съемку: ${shootingType}.`;

            // Укажите свой номер телефона, например: +7XXXXXXXXXX
            const phoneNumber = "79502925044"; // Замените на ваш реальный номер

            // Формируем ссылку на WhatsApp
            const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            // Направляем пользователя в WhatsApp
            window.open(whatsappLink, '_blank'); // Открывает WhatsApp в новой вкладке

            // Закрываем окно после записи
            dialog.classList.add("none");
        });
    });
});
