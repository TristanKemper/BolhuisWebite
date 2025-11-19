const sliderContainer = document.getElementById('slideContainer');
const slider = document.getElementById('slider');
const cards = slider.getElementsByTagName('li');

const sliderContainerWidth = sliderContainer.clientWidth;
const cardsToShow = 3;

const cardWidth = sliderContainerWidth / cardsToShow;

slider.style.width = cards.length * cardWidth + 'px';

for (let i = 0; i < cards.length; i++) {
    cards[i].style.width = cardWidth + 'px';
}

function next() {
    sliderContainer.scrollTo({left: sliderContainer.scrollLeft + cardWidth, behavior: 'smooth'});
}
function prev() {
    sliderContainer.scrollTo({left: sliderContainer.scrollLeft - cardWidth, behavior: 'smooth'});
}