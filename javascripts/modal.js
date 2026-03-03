const openBtn = document.getElementById('openSigninBtn');
const modal = document.getElementById('signinModal');
const closeBtn = document.getElementById('closeModalBtn');

const forgotModal = document.getElementById('forgotModal');
const forgotCloseBtn = document.getElementById('forgotModal');
const forgotLink = document.querySelector('.modal__forgot');
const backToSignInLink = document.querySelector('.modal__back-to-login');
const signUpLinkInForgot = document.querySelector('#forgotModal .modal__link');

const signUpLink = document.getElementById('signUpLink');
const signupModal = document.getElementById('signupModal');
const closeSignupBtn = document.getElementById('closeSignupBtn');
const signInLink = document.getElementById('signInLink');

const emailInput = document.getElementById('email');
const checkboxes = document.querySelectorAll('.care__checkbox');
const showPoint = document.getElementById('showPoint');

function openModal() {
	modal.style.display = 'block';
}

function closeModal() {
	modal.style.display = 'none';
}

function openForgotModal() {
	modal.style.display = 'none';
	forgotModal.style.display = 'block';
}

function closeForgotModal() {
	forgotModal.style.display = 'none';
}

function openSignupModal() {
	modal.style.display = 'none';
	signupModal.style.display = 'block';
}

function closeSignupModal() {
	signupModal.style.display = 'none';
}

function goBackToSignIn() {
	forgotModal.style.display = 'none';
	modal.style.display = 'block';
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

if (forgotCloseBtn) {
	forgotCloseBtn.addEventListener('click', closeForgotModal);
}

if (forgotLink) {
	forgotLink.addEventListener('click', function(event) {
		event.preventDefault();
		openForgotModal();
	});
}

if (backToSignInLink) {
	backToSignInLink.addEventListener('click', function(event) {
		event.preventDefault();
		goBackToSignIn();
	});
}

if (signUpLinkInForgot) {
	signUpLinkInForgot.addEventListener('click', function(event) {
		event.preventDefault();
		forgotModal.style.display = 'none';
		signupModal.style.display = 'block';
	});
}

if (signUpLink) {
	signUpLink.addEventListener('click', function(event) {
		event.preventDefault();
		openSignupModal();
	});
}

if (closeSignupBtn) {
	closeSignupBtn.addEventListener('click', closeSignupModal);
}

if (signInLink) {
	signInLink.addEventListener('click', function(event) {
		event.preventDefault();
		signupModal.style.display = 'none';
		modal.style.display = 'block';
	});
}

window.addEventListener('click', function(event) {
	if (event.target === modal) {
		closeModal();
	}
	if (event.target === signupModal) {
		closeSignupModal();
	}
	if (event.target === forgotModal) {
		closeForgotModal();
	}
});

document.addEventListener('keydown', function(event) {
	if (event.key === 'Escape') {
		modal.style.display = 'none';
		signupModal.style.display = 'none';
		forgotModal.style.display = 'none';
	}
});

function validateEmail(email) {
	return email.includes('@') && email.includes('.', email.indexOf('@'));
}

function closeAllPoints() {
	checkboxes.forEach(checkbox => {
		checkbox.checked = false;
	});
}

if (showPoint) {
	showPoint.addEventListener('click', function(event) {
		event.preventDefault();
		event.stopPropagation();

		const targetCheckbox = document.getElementById('care-exchange');

		if (targetCheckbox) {
			if (targetCheckbox.checked) {
				targetCheckbox.checked = false;
			} else {
				closeAllPoints();
				targetCheckbox.checked = true;
			}
		}
	});
}

checkboxes.forEach(checkbox => {
	checkbox.addEventListener('change', function() {
		if (this.checked) {
			checkboxes.forEach(cb => {
				if (cb !== this) {
					cb.checked = false;
				}
			});
		}
	});
});

const demoModal = document.getElementById('demoModal');
const learnModal = document.getElementById('learnModal');
const postsModal = document.getElementById('postsModal');

const demoButtons = document.querySelectorAll('.header__button--demo, .hero__button--demo, .set__button, .start__header-button');
const learnButton = document.querySelector('.hero__button--learn');
const postsButton = document.querySelector('.blog__button');

const closeDemoBtn = document.getElementById('closeDemoBtn');
const closeDemoBtn2 = document.getElementById('closeDemoBtn2');
const closeLearnBtn = document.getElementById('closeLearnBtn');
const closeLearnBtn2 = document.getElementById('closeLearnBtn2');
const closePostsBtn = document.getElementById('closePostsBtn');
const closePostsBtn2 = document.getElementById('closePostsBtn2');

function openDemoModal() {
	demoModal.style.display = 'block';
}

function openLearnModal() {
	learnModal.style.display = 'block';
}

function openPostsModal() {
	postsModal.style.display = 'block';
}

function closeDemoModal() {
	demoModal.style.display = 'none';
}

function closeLearnModal() {
	learnModal.style.display = 'none';
}

function closePostsModal() {
	postsModal.style.display = 'none';
}

demoButtons.forEach(btn => {
	btn.addEventListener('click', function(event) {
		event.preventDefault();
		openDemoModal();
	});
});

if (learnButton) {
	learnButton.addEventListener('click', function(event) {
		event.preventDefault();
		openLearnModal();
	});
}

if (postsButton) {
	postsButton.addEventListener('click', function(event) {
		event.preventDefault();
		openPostsModal();
	});
}

if (closeDemoBtn) {
	closeDemoBtn.addEventListener('click', closeDemoModal);
}
if (closeDemoBtn2) {
	closeDemoBtn2.addEventListener('click', closeDemoModal);
}

if (closeLearnBtn) {
	closeLearnBtn.addEventListener('click', closeLearnModal);
}
if (closeLearnBtn2) {
	closeLearnBtn2.addEventListener('click', closeLearnModal);
}

if (closePostsBtn) {
	closePostsBtn.addEventListener('click', closePostsModal);
}
if (closePostsBtn2) {
	closePostsBtn2.addEventListener('click', closePostsModal);
}

window.addEventListener('click', function(event) {
	if (event.target === demoModal) {
		closeDemoModal();
	}
	if (event.target === learnModal) {
		closeLearnModal();
	}
	if (event.target === postsModal) {
		closePostsModal();
	}
});

const themeToggleBtn = document.getElementById('theme-toggle-btn');

function setTheme(theme) {
	document.documentElement.setAttribute('data-theme', theme);

	localStorage.setItem('site-theme', theme);
}

function toggleTheme() {
	const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
	const newTheme = currentTheme === 'light' ? 'dark' : 'light';
	setTheme(newTheme);
}

function loadTheme() {
	const savedTheme = localStorage.getItem('site-theme');

	if (savedTheme) {
		setTheme(savedTheme);
	} else {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		setTheme(prefersDark ? 'dark' : 'light');
	}
}

themeToggleBtn.addEventListener('click', toggleTheme);

document.addEventListener('DOMContentLoaded', loadTheme);