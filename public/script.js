// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

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
});

// Load profile data from static JSON
async function loadProfileData() {
    try {
        const response = await fetch('profile.json');
        const data = await response.json();
        
        // Update profile text
        document.getElementById('profile-text').textContent = data.profile;
        
        // Update contact information
        document.getElementById('contact-phone').textContent = data.contact.phone;
        document.getElementById('contact-email').textContent = data.contact.email;
        document.getElementById('contact-github').textContent = data.contact.github;
        
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
        timelineItem.className = 'timeline-item fade-in-up';
        
        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h3 class="timeline-title">${exp.position}</h3>
                <p class="timeline-company">${exp.company}</p>
                <p class="timeline-period">${exp.location} • ${exp.period}</p>
                <ul class="timeline-achievements">
                    ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Load skills
function loadSkills(skills) {
    const skillsGrid = document.getElementById('skills-grid');
    
    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card fade-in-up';
        
        skillCard.innerHTML = `
            <h3>${skill}</h3>
        `;
        
        skillsGrid.appendChild(skillCard);
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

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

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
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
    
    // Load profile data
    loadProfileData();
});

// Add scroll reveal animation
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in-up');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in-up');
        }
    });
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