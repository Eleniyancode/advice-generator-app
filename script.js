'use strict';
//getting the needed element
const adviceIdEl = document.getElementById('adviceId');
const adviceTextEl = document.querySelector('.advice-text');
const buttonSearchEl = document.querySelector('.dice-container')
const spinnerEl = document.getElementById('spinner');
const containerEl = document.querySelector('.advice-div');
// console.log(adviceIdEl);
// console.log(adviceTextEl);
// console.log(buttonSearchEl);

//changing the size of the pattern divider base on window width
if (window.innerWidth >= 400) {
    document.querySelector('.pattern-divider').src = './images/pattern-divider-desktop.svg'
}
const getAdvice = async function() {
    try {
        //show spinner and hide advice container until advice is load 
        spinnerEl.classList.remove('hidden');
        containerEl.classList.add('hidden');

        //simulate load
        setTimeout(() => {
            spinnerEl.classList.add('hidden');
            containerEl.classList.remove('hidden')
        }, 6000)

        const res = await fetch('https://api.adviceslip.com/advice');
        console.log(res);
        const data = await res.json();
    
        console.log(data);
        // console.log(data.slip.id)
        adviceIdEl.innerText = `#${data.slip.id}`;
        adviceTextEl.textContent = data.slip.advice
    } catch(err) {
        console.log(err);
    }
}

// getAdvice()
buttonSearchEl.addEventListener('click', getAdvice)