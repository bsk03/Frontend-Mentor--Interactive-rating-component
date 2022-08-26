const rates = document.querySelectorAll('.rateBtn');
const submit = document.querySelector('.submit');
const texfAfterRate = document.querySelector('.rated');
const box1 = document.querySelector('.box');
const box2 = document.querySelector('.box2');
const hidee = document.querySelector('.hidee');
const error = document.querySelector('.error');


const clicked = (e) => {
	const but = e.target;
	const yourRate = but.textContent;
    error.textContent = '';
	texfAfterRate.textContent = `You selected ${yourRate} out of 5`;
	hidee.textContent = yourRate;
};

const show = () => {
	box1.classList.add('hide');
	box2.classList.remove('hide');
	clicked();
};

const check = () => {
	if (hidee.textContent === '') {
        error.style.color = 'red';
        error.textContent = 'You have to chose rate!';
	} else {
		show();
	}
};


rates.forEach((rate) => rate.addEventListener('click', clicked));
submit.addEventListener('click', check);
