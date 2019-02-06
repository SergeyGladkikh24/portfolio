
var hamburger = document.querySelector('.header__hamburger-button');
var navigation = document.querySelector('.header__menu');

hamburger.onclick = function() {

	navigation.classList.toggle('header__menu--show');
	this.classList.toggle('header__hamburger-button--show');
}

