const navButton = document.querySelector('.nav-button')
const modileNav = document.querySelector('.modile-nav')

navButton.addEventListener('click', function() {
	modileNav.classList.toggle('modile-nav-active')
	navButton.classList.toggle('nav-button-close')
})