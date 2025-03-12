document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.classList.add('animated');
        setTimeout(() => icon.classList.remove('animated'), 400); // Remove class after animation
    });
});

