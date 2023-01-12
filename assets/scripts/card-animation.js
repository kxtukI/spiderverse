function handleMouseEnter(){
    this.classList.add("hg-card--hovered");
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave(){
    this.classList.remove("hg-card--hovered");
    document.body.id = ""
}

function addEventListenerToCards(){
    const cardElements = document.getElementsByClassName("hg-card");

    for(let index = 0; index < cardElements.length; index++){
        const card = cardElements[index];
        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);
    }
}

function selectCarouselItem(selectedButtonElement){
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector(".hg-cards-carousel");
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selectedItem) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
    carousel.style.transform = newTransform;

    const activeButtonElement = document.querySelector(".hg-controller__button--active");
    activeButtonElement.classList.remove("hg-controller__button--active");
    selectedButtonElement.classList.add("hg-controller__button--active");
}
document.addEventListener("DOMContentLoaded", addEventListenerToCards, false);