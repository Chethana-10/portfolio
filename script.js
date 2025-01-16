// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animation (Fade in)
const fadeElements = document.querySelectorAll('.fade-in');

const checkFadeIn = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = window.innerHeight - 100;

        if (elementTop < elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', checkFadeIn);

// Initialize the animation on page load
window.addEventListener('load', checkFadeIn);

// Scroll-to-top Button functionality
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form validation (Optional)
document.getElementById('contact-form').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        event.preventDefault();
        alert('Please fill out all fields before submitting the form!');
    } else {
        alert('Thank you for your message! I will get back to you soon.');
    }
});

