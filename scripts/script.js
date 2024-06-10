// анимация бургер-меню
let burgerIcon_firstChild = document.querySelector('.burger-icon .line:first-child');
let burgerIcon_lastChild =  document.querySelector('.burger-icon .line:last-child');
let navigationMenu =  document.querySelector('.nav');
document.querySelector('.burger-icon').addEventListener('click', function (){
    burgerIcon_firstChild.classList.toggle('active');
    burgerIcon_lastChild.classList.toggle('active');
    navigationMenu.classList.toggle('active');
});


