const nav = document.querySelector('.nav');

const fixNav = () => {
	if (window.scrollY > nav.offsetHeight + 150) {
		nav.classList.add('active');
	} else {
		nav.classList.remove('active');
	}
};
document.addEventListener('scroll', fixNav);
