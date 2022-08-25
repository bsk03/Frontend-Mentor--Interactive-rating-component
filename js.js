const rates = document.querySelectorAll('.rateBtn');

const clicked = (e) => {
    const but = e.target;
    console.log(but);
    // but.classList.toggle('chosen')
}

rates.forEach(rate => rate.addEventListener('click',clicked));