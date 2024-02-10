const buttons = document.querySelectorAll('button');

const buttonClickHandler = (event) => {
    // event.target.disabled = true;
    console.log(event);
};

const anotherButtonClickHandler = () => {
    console.log('Grdoba se grbi!');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

const buttonFn = buttonClickHandler.bind(this);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//     button.removeEventListener('click', buttonClickHandler);
// }, 2000);

buttons.forEach(btn => {
    btn.addEventListener('mouseenter', buttonClickHandler)
});

window.addEventListener('scroll', event => {
    console.log(event);
})
