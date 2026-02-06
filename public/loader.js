// Loading screen animation
class LoadingScreen {
    constructor() {
        this.loader = null;
        this.progress = 0;
        this.init();
    }

    init() {
        this.createLoader();
        this.simulateLoading();
    }

    createLoader() {
        this.loader = document.createElement('div');
        this.loader.className = 'loading-screen';
        this.loader.innerHTML = `
            <div class="loader-content">
                <div class="loader-logo">
                    <svg viewBox="0 0 100 100" width="80" height="80">
                        <circle cx="50" cy="50" r="40" stroke="url(#gradient)" stroke-width="4" fill="none" 
                                stroke-dasharray="251.2" stroke-dashoffset="251.2" class="loader-circle"/>
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#007bff;stop-opacity:1" />
                                <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div class="loader-text">
                    <h2>Loading Portfolio</h2>
                    <div class="loader-bar">
                        <div class="loader-progress"></div>
                    </div>
                    <p class="loader-percentage">0%</p>
                </div>
            </div>
        `;
        
        document.body.insertBefore(this.loader, document.body.firstChild);
    }

    simulateLoading() {
        const progressBar = this.loader.querySelector('.loader-progress');
        const percentage = this.loader.querySelector('.loader-percentage');
        const circle = this.loader.querySelector('.loader-circle');
        
        const interval = setInterval(() => {
            this.progress += Math.random() * 15 + 5;
            
            if (this.progress >= 100) {
                this.progress = 100;
                clearInterval(interval);
                setTimeout(() => this.hide(), 300);
            }
            
            progressBar.style.width = `${this.progress}%`;
            percentage.textContent = `${Math.floor(this.progress)}%`;
            
            const offset = 251.2 - (251.2 * this.progress) / 100;
            circle.style.strokeDashoffset = offset;
        }, 150);
    }

    hide() {
        this.loader.classList.add('fade-out');
        setTimeout(() => {
            this.loader.remove();
            document.body.classList.add('loaded');
        }, 600);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new LoadingScreen();
    });
} else {
    new LoadingScreen();
}
