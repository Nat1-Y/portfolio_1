// Parallax scrolling effects
class ParallaxEffect {
    constructor() {
        this.sections = [];
        this.ticking = false;
        this.init();
    }

    init() {
        this.bindElements();
        this.bindEvents();
    }

    bindElements() {
        document.querySelectorAll('.hero-content, .hero-image, .about-content, .timeline-item, .skill-card').forEach((el, index) => {
            const speed = el.classList.contains('hero-content') ? 0.3 :
                         el.classList.contains('hero-image') ? 0.5 :
                         el.classList.contains('timeline-item') ? (index % 2 === 0 ? 0.15 : -0.15) :
                         0.1;
            
            this.sections.push({
                element: el,
                speed: speed,
                initialY: 0
            });
        });
    }

    bindEvents() {
        window.addEventListener('scroll', () => {
            if (!this.ticking) {
                requestAnimationFrame(() => {
                    this.update();
                    this.ticking = false;
                });
                this.ticking = true;
            }
        });
    }

    update() {
        const scrollY = window.scrollY;
        
        this.sections.forEach(section => {
            const rect = section.element.getBoundingClientRect();
            const elementTop = rect.top + scrollY;
            const elementHeight = rect.height;
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight && rect.bottom > 0) {
                const scrolled = scrollY - elementTop + windowHeight;
                const range = windowHeight + elementHeight;
                const percentage = scrolled / range;
                
                const translateY = (percentage - 0.5) * section.speed * 100;
                section.element.style.transform = `translateY(${translateY}px)`;
            }
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (window.innerWidth >= 768) {
            new ParallaxEffect();
        }
    });
} else {
    if (window.innerWidth >= 768) {
        new ParallaxEffect();
    }
}
