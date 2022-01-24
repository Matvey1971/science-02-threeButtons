const blockButtons = document.querySelector('.container');

function describeBlockButtonsContainerStyle() {
    blockButtons.style.display = "flex";
    blockButtons.style.justifyContent = 'center';
};
describeBlockButtonsContainerStyle();


const buttonLeft = document.querySelector('#btn-left').addEventListener('click', function addBodyBackgroundColor() {
    document.body.style.backgroundColor = 'red'; 
});

const buttonCenter = document.querySelector('#btn-center').addEventListener('click', function addBodyBackgroundColor() {
    document.body.style.backgroundColor = 'green'; 
});

const buttonRightt = document.querySelector('#btn-right').addEventListener('click', function addBodyBackgroundColor() {
    document.body.style.backgroundColor = 'yellow'; 
});



