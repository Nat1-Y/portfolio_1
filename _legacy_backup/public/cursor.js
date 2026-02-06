// Custom cursor effect
class CustomCursor {
    constructor() {
        this.cursor = null;
        this.cursorDot = null;
        this.cursorPos = { x: 0, y: 0 };
        this.cursorDotPos = { x: 0, y: 0 };
        this.init();
    }

    init() {
        if (window.matchMedia('(pointer: coarse)').matches) {
            return;
        }

        this.createCursor();
        this.bindEvents();
        this.animate();
    }

    createCursor() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        this.cursor.innerHTML = `
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15" stroke="currentColor" stroke-width="2"/>
                <circle cx="16" cy="16" r="3" fill="currentColor"/>
            </svg>
        `;
        
        this.cursorDot = document.createElement('div');
        this.cursorDot.className = 'custom-cursor-dot';
        
        document.body.appendChild(this.cursor);
        document.body.appendChild(this.cursorDot);
    }

    bindEvents() {
        document.addEventListener('mousemove', (e) => {
            this.cursorPos.x = e.clientX;
            this.cursorPos.y = e.clientY;
        });

        const interactiveElements = 'a, button, .skill-card, .timeline-content, .stat, .contact-item, input, textarea';
        
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest(interactiveElements)) {
                this.cursor.classList.add('hover');
                this.cursorDot.classList.add('hover');
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.closest(interactiveElements)) {
                this.cursor.classList.remove('hover');
                this.cursorDot.classList.remove('hover');
            }
        });

        document.addEventListener('mousedown', () => {
            this.cursor.classList.add('click');
            this.cursorDot.classList.add('click');
        });

        document.addEventListener('mouseup', () => {
            this.cursor.classList.remove('click');
            this.cursorDot.classList.remove('click');
        });
    }

    animate() {
        const lerp = (start, end, factor) => start + (end - start) * factor;
        
        const updateCursor = () => {
            this.cursorDotPos.x = lerp(this.cursorDotPos.x, this.cursorPos.x, 0.15);
            this.cursorDotPos.y = lerp(this.cursorDotPos.y, this.cursorPos.y, 0.15);
            
            this.cursor.style.transform = `translate(${this.cursorPos.x}px, ${this.cursorPos.y}px)`;
            this.cursorDot.style.transform = `translate(${this.cursorDotPos.x}px, ${this.cursorDotPos.y}px)`;
            
            requestAnimationFrame(updateCursor);
        };
        
        updateCursor();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new CustomCursor());
} else {
    new CustomCursor();
}
