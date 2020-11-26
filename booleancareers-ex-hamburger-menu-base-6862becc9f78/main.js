//Variabile collegata all'icona hamburger
var hamburger = $('.fa-bars');
//Creare un menu che compare al click dell'icona a forma di hamburger
hamburger.click(function (){
    $('.hamburger-menu').fadeIn();
});
//Variabile collegata all'icona croce
var x = $('.fa-times');
//Far sparire il menu al click dell'icona a forma di X
x.click(function (){
    $('.hamburger-menu').fadeOut();
});

//VERSIONE CON SHOW E HIDE
// hamburger.click(function (){
//     $('.hamburger-menu').show();
// });

// x.click(function (){
//      $('.hamburger-menu').hide();
// });