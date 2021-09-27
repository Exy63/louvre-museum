function imageComparison(selector) {
  let comparison = $(selector)
    .addClass("image-comparison")
    .prepend('<div class="image-comparison__before"></div>')
    .append('<button class="image-comparison__slider"></button>');

  let images = comparison
    .find("img")
    .addClass("image-comparison__image")
    .css("max-width", comparison.width());

  let before = comparison
    .find(".image-comparison__before")
    .append(images.eq(0));

  comparison
    .find(".image-comparison__slider")
    .on("dragstart", () => false) // отмена станд. drug&drop
    .on("mousedown", function (e) {
      let slider = $(this);
      let doc = $(document).on("mousemove", (e) => {
        let offset = e.pageX - comparison.position().left;
        let width = comparison.width();

        // установим границы, чтобы ползунок не выходил
        if (offset < 0) offset = 0;
        if (offset > width) offset = width;

        slider.css("left", offset + "px");
        before.css("width", offset + "px");
      });

      doc.on("mouseup", () => doc.off("mousemove"));
    });
}

imageComparison("#image-comparison");

const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const image5 = document.getElementById("image5");
const image6 = document.getElementById("image6");
const image7 = document.getElementById("image7");
const image8 = document.getElementById("image8");
const image9 = document.getElementById("image9");
const image10 = document.getElementById("image10");
const image11 = document.getElementById("image11");
const image12 = document.getElementById("image12");

const images = [
  image1,
  image2,
  image3,
  image5,
  image6,
  image7,
  image9,
  image10,
  image11,
];

const pictureUrl = [
  "./assets/img/galery/galery2.jpg",
  "./assets/img/galery//galery9.jpg",
  "./assets/img/galery/galery4.jpg",
  "./assets/img/galery/galery1.jpg",
  "./assets/img/galery//galery8.jpg",
  "./assets/img/galery/galery3.jpg",
  "./assets/img/galery/galery7.jpg",
  "./assets/img/galery//galery10.jpg",
  "./assets/img/galery/galery15.jpg",
];

images.forEach(image => {
    const src = pictureUrl[Math.floor(Math.random()*pictureUrl.length)]
    image.src = src
    const index = pictureUrl.indexOf(src)
    pictureUrl.splice(index, 1)
})

console.log(`Самооценка: 145/160\n
Вёрстка валидная +10 \n
Вёрстка семантическая. В коде страницы присутствуют следующие элементы +24 \n
(header, main, footer, section, h1, h2, h3, nav, ul > li, button, radio, number, range, img) \n
Верстка соответствует макету + 45 \n
Форма покупки билетов + 10/22 \n
Требования к css + 18 \n
Интерактивность через css +25 \n
Интерактивность, реализуемая через js +13/16`);
