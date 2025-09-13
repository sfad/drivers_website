document.getElementById('year').textContent = new Date().getFullYear();

// Device detection and smart download links
function detectDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);

    return { isIOS, isAndroid, isMobile: isIOS || isAndroid };
}

// Initialize download page enhancements
function initDownloadPage() {
    const device = detectDevice();
    const platformDetection = document.getElementById('platform-detection');

    if (platformDetection) {
        if (device.isIOS) {
            platformDetection.innerHTML = `
                <h2 class="animate-slide-up">Perfect for iPhone</h2>
                <p class="animate-slide-up" style="animation-delay: 0.1s">Get the best experience on iOS</p>
            `;
            // Highlight iOS button
            const iosButton = document.getElementById('ios-cta');
            if (iosButton) {
                iosButton.style.transform = 'scale(1.05)';
                iosButton.style.boxShadow = '0 0 20px rgba(31, 182, 255, 0.5)';
            }
        } else if (device.isAndroid) {
            platformDetection.innerHTML = `
                <h2 class="animate-slide-up">Made for Android</h2>
                <p class="animate-slide-up" style="animation-delay: 0.1s">Optimized for your Android device</p>
            `;
            // Highlight Android button
            const androidButton = document.getElementById('android-cta');
            if (androidButton) {
                androidButton.style.transform = 'scale(1.05)';
                androidButton.style.boxShadow = '0 0 20px rgba(1, 135, 95, 0.5)';
            }
        }
    }
}

// Scroll animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.animate-slide-up, .animate-fade-in').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

// Add smooth scroll behavior
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Parallax effect for hero elements
function initParallax() {
    const heroElements = document.querySelectorAll('.animate-float');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        heroElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

// Add interactive button effects
function initButtonEffects() {
    document.querySelectorAll('.btn, .store-button-large').forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });

        button.addEventListener('mousedown', function () {
            this.style.transform = 'translateY(0) scale(0.98)';
        });

        button.addEventListener('mouseup', function () {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
    });
}

// Add loading animation for page transitions
function initPageTransitions() {
    // Add fade-in effect when page loads
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';

    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });

    // Add loading effect for external links
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.addEventListener('click', function (e) {
            // Add a subtle loading indicator
            this.style.opacity = '0.7';
            this.style.pointerEvents = 'none';

            setTimeout(() => {
                this.style.opacity = '1';
                this.style.pointerEvents = 'auto';
            }, 2000);
        });
    });
}

// Initialize all enhancements when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initDownloadPage();
    initScrollAnimations();
    initSmoothScroll();
    initParallax();
    initButtonEffects();
    initPageTransitions();

    // Add special effects for mobile devices
    if (detectDevice().isMobile) {
        // Disable parallax on mobile for better performance
        document.querySelectorAll('.animate-float').forEach(element => {
            element.style.animation = 'none';
        });

        // Add touch feedback
        document.addEventListener('touchstart', function (e) {
            if (e.target.closest('.btn, .store-button-large')) {
                e.target.closest('.btn, .store-button-large').style.transform = 'scale(0.95)';
            }
        });

        document.addEventListener('touchend', function (e) {
            if (e.target.closest('.btn, .store-button-large')) {
                setTimeout(() => {
                    e.target.closest('.btn, .store-button-large').style.transform = 'scale(1)';
                }, 150);
            }
        });
    }
});

// Legacy featured routes for backward compatibility
const featured = [
    { id: 'r1', title: 'Downtown Morning Commute', type: 'Business', summary: 'Daily shuttle to business district', price: '$3' },
    { id: 'r2', title: 'School Route A (Elementary)', type: 'School', summary: 'Morning pickup to Main School', price: '$2' }
];

const list = document.getElementById('featured-list');
if (list) {
    featured.forEach(r => {
        const card = document.createElement('article');
        card.className = 'card animate-slide-up';
        card.innerHTML = `<h3>${r.title}</h3><p>${r.summary}</p><p><strong>${r.price}</strong></p><a href="#" class="btn">Learn More</a>`;
        list.appendChild(card);
    });
}
