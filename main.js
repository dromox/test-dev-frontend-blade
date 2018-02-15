'use strict';

/////////////////////////////////////////////////////////////////////////////////////////
// FONCTIONS                                                                           //
/////////////////////////////////////////////////////////////////////////////////////////
function onClickMenu() {
    burger.toggleClass('rotate');
    main.toggleClass('aside');
}

function onClickDecline() {

    onClickClose();
    alert.toggleClass('showalert');
    main.toggleClass('opacity');
}

function onClickAccept() {

    onClickClose();
    formulaire.toggleClass('showform');
}

function onClickClose() {
    main.removeClass('opacity');
    formulaire.removeClass('showform');
    alert.removeClass('showalert');
}

/////////////////////////////////////////////////////////////////////////////////////////
// CODE PRINCIPAL                                                                      //
/////////////////////////////////////////////////////////////////////////////////////////
var burger = $('.fa-bars');
burger.on('click',onClickMenu);

var main = $('main');

var formulaire = $('.hidden1');

var alert = $('.hidden2');

var decline = $('.decline');
decline.on('click',onClickDecline);

var accept = $('.accept');
accept.on('click',onClickAccept);

var close = $('.annuler');
close.on('click',onClickClose);








