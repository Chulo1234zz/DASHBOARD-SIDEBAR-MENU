'use strict';
let navigation = document.querySelector('.navigation');
let toggle = document.querySelector('.toggle');
toggle.addEventListener('click', function(){
    navigation.classList.toggle('active')
})