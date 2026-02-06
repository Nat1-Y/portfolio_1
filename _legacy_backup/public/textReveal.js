// Text reveal animations with split and stagger effects
class TextReveal {
    constructor() {
        this.init();
    }

    init() {
        this.applyToElements();
    }

    splitText(element) {
        const text = element.textContent;
        element.innerHTML = '';
        
        const words = text.split(' ');
        words.forEach((word, wordIndex) => {
            const wordSpan = document.createElement('span');
            wordSpan.style.display = 'inline-block';
            wordSpan.style.overflow = 'hidden';
            wordSpan.style.verticalAlign = 'top';
            
            const innerSpan = document.createElement('span');
            innerSpan.style.display = 'inline-block';
            innerSpan.textContent = word;
            innerSpan.style.transform = 'translateY(100%)';
            innerSpan.style.transition = `transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${wordIndex * 0.05}s`;
            
            wordSpan.appendChild(innerSpan);
            element.appendChild(wordSpan);
            
            if (wordIndex < words.length - 1) {
                element.appendChild(document.createTextNode(' '));
            }
        });
    }

    revealText(element) {
        const words = element.querySelectorAll('span > span');
        words.forEach(word => {
            word.style.transform = 'translateY(0)';
        });
    }

    applyToElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.revealed) {
                    this.revealText(entry.target);
                    entry.target.dataset.revealed = 'true';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -10% 0px'
        });

        document.querySelectorAll('.hero-title, .section-title').forEach(el => {
            if (!el.dataset.split) {
                this.splitText(el);
                el.dataset.split = 'true';
                observer.observe(el);
            }
        });
    }
}

// Magnetic button effect
class MagneticButton {
    constructor(element, strength = 0.3) {
        this.element = element;
        this.strength = strength;
        this.rect = null;
        this.init();
    }

    init() {
        this.element.addEventListener('mouseenter', () => {
            this.rect = this.element.getBoundingClientRect();
        });

        this.element.addEventListener('mousemove', (e) => {
            if (!this.rect) return;
            
            const x = e.clientX - this.rect.left - this.rect.width / 2;
            const y = e.clientY - this.rect.top - this.rect.height / 2;
            
            const moveX = x * this.strength;
            const moveY = y * this.strength;
            
            this.element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        this.element.addEventListener('mouseleave', () => {
            this.element.style.transform = '';
            this.rect = null;
        });
    }
}

// Tilt effect for cards
class TiltEffect {
    constructor(element, maxTilt = 10) {
        this.element = element;
        this.maxTilt = maxTilt;
        this.rect = null;
        this.init();
    }

    init() {
        this.element.addEventListener('mouseenter', () => {
            this.rect = this.element.getBoundingClientRect();
        });

        this.element.addEventListener('mousemove', (e) => {
            if (!this.rect) return;
            
            const x = e.clientX - this.rect.left;
            const y = e.clientY - this.rect.top;
            
            const centerX = this.rect.width / 2;
            const centerY = this.rect.height / 2;
            
            const percentX = (x - centerX) / centerX;
            const percentY = (y - centerY) / centerY;
            
            const tiltX = percentY * this.maxTilt;
            const tiltY = -percentX * this.maxTilt;
            
            this.element.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        this.element.addEventListener('mouseleave', () => {
            this.element.style.transform = '';
            this.rect = null;
        });
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            new TextReveal();
            
            document.querySelectorAll('.btn').forEach(btn => {
                new MagneticButton(btn, 0.2);
            });
            
            document.querySelectorAll('.skill-card, .stat, .education-card').forEach(card => {
                new TiltEffect(card, 8);
            });
        }, 100);
    });
} else {
    setTimeout(() => {
        new TextReveal();
        
        document.querySelectorAll('.btn').forEach(btn => {
            new MagneticButton(btn, 0.2);
        });
        
        document.querySelectorAll('.skill-card, .stat, .education-card').forEach(card => {
            new TiltEffect(card, 8);
        });
    }, 100);
}
