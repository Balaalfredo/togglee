const box = document.querySelectorAll('.box');
const box1 = document.querySelectorAll('.box1');

box1.forEach((a) => {
    a.addEventListener('click', function () {


        if (a.classList.contains('select')) {
            a.classList.remove('select');
            a.innerText = 'off';

        }
        else {
            a.classList.add('select'); a.innerText = 'on';
        }




    })



})