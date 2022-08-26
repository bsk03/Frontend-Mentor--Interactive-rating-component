const rates = document.querySelectorAll('.rateBtn');
const submit = document.querySelector('.submit');
const texfAfterRate = document.querySelector('.rated');
const box1 = document.querySelector('.box');
const box2 = document.querySelector('.box2');
console.log(box1);
console.log(box2);
const clicked = (e) => {
    const but = e.target;
    // console.log(but.textContent);
    const yourRate = but.textContent;

    texfAfterRate.textContent = `You selected ${yourRate} out of 5`;
    
}
const submited = () => {
    
    box1.classList.add('hide');
    box2.classList.remove('hide');
    clicked(e)

}
rates.forEach(rate => rate.addEventListener('click',clicked));
submit.addEventListener('click',submited)