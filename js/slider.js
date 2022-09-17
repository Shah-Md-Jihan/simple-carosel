const slieImage = document.getElementById('sideImage');
const images = [
    'images/slide-1.png',
    'images/slide-2.png',
    'images/slide-3.png',
];

let imageIndex = 0;
setInterval(() => {
    if (imageIndex === images.length) {
        imageIndex = 0;
    }
    const imgLink = images[imageIndex];
    slieImage.setAttribute('src', imgLink);
    imageIndex++;
}, 2000)