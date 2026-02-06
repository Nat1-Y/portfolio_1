// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollProgress = document.getElementById('scroll-progress');
const backToTopBtn = document.getElementById('back-to-top');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }

    if (scrollProgress) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)) : 0;
        scrollProgress.style.width = `${progress}%`;
    }

    if (backToTopBtn) {
        if (window.scrollY > 600) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }
});

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Load profile data from static JSON
async function loadProfileData() {
    try {
        const response = await fetch('profile.json');
        const data = await response.json();

        const heroName = document.getElementById('hero-name');
        const heroTitle = document.getElementById('hero-title');
        const heroTagline = document.getElementById('hero-tagline');

        if (heroName) {
            const originalText = data.name || heroName.textContent;
            typeWriter(heroName, originalText, 120);
        }

        if (heroTitle) {
            heroTitle.textContent = data.title || '';
        }

        if (heroTagline) {
            heroTagline.textContent = data.tagline || '';
        }

        if (data.name && data.title) {
            document.title = `${data.name} - ${data.title}`;
        }
        
        // Update profile text
        document.getElementById('profile-text').textContent = data.profile;
        
        // Update contact information
        const phoneEl = document.getElementById('contact-phone');
        const emailEl = document.getElementById('contact-email');
        const githubEl = document.getElementById('contact-github');

        if (phoneEl && data.contact?.phone) {
            phoneEl.innerHTML = `<a href="tel:${data.contact.phone}">${data.contact.phone}</a>`;
        }

        if (emailEl && data.contact?.email) {
            emailEl.innerHTML = `<a href="mailto:${data.contact.email}">${data.contact.email}</a>`;
        }

        if (githubEl && data.contact?.github) {
            githubEl.innerHTML = `<a href="${data.contact.github}" target="_blank" rel="noopener noreferrer">${data.contact.github}</a>`;
        }
        
        // Update education
        document.getElementById('education-institution').textContent = data.education.institution;
        document.getElementById('education-degree').textContent = data.education.degree;
        
        // Load experience timeline
        loadExperienceTimeline(data.experience);
        
        // Load skills
        loadSkills(data.skills);
        
    } catch (error) {
        console.error('Error loading profile data:', error);
        showErrorMessage('Failed to load profile data. Please refresh the page.');
    }
}

// Load experience timeline
function loadExperienceTimeline(experience) {
    const timeline = document.getElementById('experience-timeline');
    
    experience.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item reveal';

        const techTags = Array.isArray(exp.tech) && exp.tech.length
            ? `<div class="tech-tags">${exp.tech.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}</div>`
            : '';
        
        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h3 class="timeline-title">${exp.position}</h3>
                <p class="timeline-company">${exp.company}</p>
                <p class="timeline-period">${exp.location} • ${exp.period}</p>
                ${techTags}
                <ul class="timeline-achievements">
                    ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
        observeRevealElement(timelineItem);
    });
}

// Load skills
function loadSkills(skills) {
    const skillsGrid = document.getElementById('skills-grid');
    
    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card reveal';
        
        skillCard.innerHTML = `
            <h3>${skill}</h3>
        `;
        
        skillsGrid.appendChild(skillCard);
        observeRevealElement(skillCard);
    });
}

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !message) {
            showErrorMessage('Please fill in all fields.');
            return;
        }
        
        if (!isValidEmail(email)) {
            showErrorMessage('Please enter a valid email address.');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            // Simulate form submission (in a real app, you'd send to your backend)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            showSuccessMessage('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
            
        } catch (error) {
            showErrorMessage('Failed to send message. Please try again.');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show success message
function showSuccessMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message success';
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 300);
    }, 3000);
}

// Show error message
function showErrorMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message error';
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #dc3545;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 300);
    }, 3000);
}

// Add CSS animations for messages
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });

function observeRevealElement(element) {
    if (element && element.classList && element.classList.contains('reveal')) {
        revealObserver.observe(element);
    }
}

function observeInitialRevealElements() {
    document.querySelectorAll('.reveal').forEach(el => observeRevealElement(el));
}

const navHighlightObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (!id) return;

        const link = document.querySelector(`.nav-menu a[href="#${id}"]`);
        if (!link) return;

        if (entry.isIntersecting) {
            document.querySelectorAll('.nav-link.active').forEach(a => a.classList.remove('active'));
            link.classList.add('active');
        }
    });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

function observeNavSections() {
    document.querySelectorAll('section[id]').forEach(section => navHighlightObserver.observe(section));
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    observeInitialRevealElements();
    observeNavSections();
    loadProfileData();
});

// Add hover effects for skill cards
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers for skill cards
    document.addEventListener('click', (e) => {
        if (e.target.closest('.skill-card')) {
            const skillCard = e.target.closest('.skill-card');
            skillCard.style.transform = 'scale(1.05)';
            setTimeout(() => {
                skillCard.style.transform = '';
            }, 200);
        }
    });
});

// Add loading animation for profile data
function showLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = '<div class="loading"></div>';
    }
}

// Initialize loading states
document.addEventListener('DOMContentLoaded', () => {
    showLoading('profile-text');
    showLoading('contact-phone');
    showLoading('contact-email');
    showLoading('contact-github');
    showLoading('education-institution');
    showLoading('education-degree');
}); 