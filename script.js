// Simple JavaScript for additional interactivity

document.addEventListener('DOMContentLoaded', function() {

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if(targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation to skill tags on hover
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Current year in footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('footer p');
    if(yearElement) {
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
    }

    // Console greeting
    console.log('%c👋 Welcome to Riyad\'s Portfolio!', 'color: #3498db; font-size: 18px; font-weight: bold;');
    console.log('%c🔒 Cybersecurity Enthusiast | Computer Science Student', 'color: #2c3e50; font-size: 14px;');
});

// Download CV button enhancement
function enhanceDownloadButton() {
    const downloadBtn = document.querySelector('a[download]');
    if(downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // Optional: Add download tracking or animation here
            console.log('CV download initiated');
        });
    }
}

// Call functions when page loads
window.onload = function() {
    enhanceDownloadButton();
};
