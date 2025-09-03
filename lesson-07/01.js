/*
В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю переключаться между созданными нейросетью изображениями веб-технологий.
Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже написано - нужно добавить только js-код.

Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` менялось на предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.

Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному переключению изображений.
*/

const WEB_TECH_IMAGES = [
    'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg',
    'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg',
    'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg',
];
let index_image = 0;


window.addEventListener('load', function () {
    console.log('Вся страница полностью загружена.');
    // Запуск анимаций или сложных визуальных скриптов
    const image = document.getElementById("web-tech-image");
    const button_next = document.getElementById("next-button");
    const button_prev = document.getElementById("prev-button");


    image.setAttribute('src', WEB_TECH_IMAGES[index_image]);

    button_next.addEventListener('click', function () {
        console.log('clicked next');
        index_image = function_image_swap(index_image += 1);
    });
    button_prev.addEventListener('click', function () {
        console.log('clicked prev');
        index_image = function_image_swap(index_image -= 1);
    });

    function function_image_swap(index) {
        if (index > WEB_TECH_IMAGES.length - 1) {
            index = 0;
        }
        if (index < 0){
            index = WEB_TECH_IMAGES.length - 1;
        }
        console.log(`index_image+${index}`);
        image.setAttribute('src', WEB_TECH_IMAGES[index]);
        return index;
    }


})
