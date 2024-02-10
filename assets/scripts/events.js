const button = document.querySelector('button');

const buttonClickHandler = () => {
    alert('Gicule se gica!');
};

const anotherButtonClickHandler = () => {
    console.log('Grdoba se grbi!');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

const buttonFn = buttonClickHandler.bind(this);

button.addEventListener('click', buttonFn);

setTimeout(() => {
    button.removeEventListener('click', buttonFn);
}, 2000);