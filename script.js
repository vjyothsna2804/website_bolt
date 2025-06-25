// FAQ Toggle Functionality
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Smooth scroll to auth section
function scrollToAuth() {
    document.getElementById('auth').scrollIntoView({
        behavior: 'smooth'
    });
}

// Auth form switching
function showAuthForm(formType) {
    // Hide all forms
    document.querySelectorAll('.auth-form-container').forEach(form => {
        form.classList.add('hidden');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected form and activate tab
    if (formType === 'signup') {
        document.getElementById('signup-form').classList.remove('hidden');
        document.querySelector('.auth-tab:first-child').classList.add('active');
    } else if (formType === 'login') {
        document.getElementById('login-form').classList.remove('hidden');
        document.querySelector('.auth-tab:last-child').classList.add('active');
    }
}

// Show forgot password form
function showForgotPassword() {
    document.querySelectorAll('.auth-form-container').forEach(form => {
        form.classList.add('hidden');
    });
    document.getElementById('forgot-form').classList.remove('hidden');
    
    // Remove active class from tabs
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.classList.remove('active');
    });
}

// Handle signup form submission
function handleSignup(event) {
    event.preventDefault();
    
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm').value;
    
    // Basic validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters long!');
        return;
    }
    
    // Here you would typically send the data to your backend
    console.log('Signup attempt:', { name, email, password });
    alert('Account created successfully! Welcome to RajniCodes!');
    
    // Reset form
    event.target.reset();
}

// Handle login form submission
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Here you would typically validate credentials with your backend
    console.log('Login attempt:', { email, password });
    alert('Login successful! Welcome back to RajniCodes!');
    
    // Reset form
    event.target.reset();
}

// Handle forgot password form submission
function handleForgotPassword(event) {
    event.preventDefault();
    
    const email = document.getElementById('forgot-email').value;
    
    // Here you would typically send reset email via your backend
    console.log('Password reset requested for:', email);
    alert('Password reset instructions have been sent to your email!');
    
    // Reset form and go back to login
    event.target.reset();
    showAuthForm('login');
}

// Mobile sticky CTA visibility
function handleStickyCtaVisibility() {
    const authSection = document.querySelector('.auth-section');
    const mobileCta = document.querySelector('.mobile-sticky-cta');
    
    if (!authSection || !mobileCta) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                mobileCta.style.display = 'none';
            } else {
                mobileCta.style.display = 'block';
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(authSection);
}

// Animate elements on scroll
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements to animate
    const elementsToAnimate = document.querySelectorAll('.benefit-card, .step, .testimonial-card, .auth-form-container');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Video placeholder click handler
function handleVideoClick() {
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', () => {
            // Here you would typically embed an actual video
            alert('Video would play here! Replace this with your actual video embed.');
        });
    }
}

// Parallax effect for hero section
function handleParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.backgroundPosition = `center ${rate}px`;
    });
}

// Enhanced button hover effects
function enhanceButtonEffects() {
    const buttons = document.querySelectorAll('.cta-button, .auth-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('click', () => {
            button.style.transform = 'translateY(0) scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'translateY(-2px) scale(1.05)';
            }, 100);
        });
    });
}

// Form validation helpers
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

// Real-time form validation
function setupFormValidation() {
    const emailInputs = document.querySelectorAll('input[type="email"]');
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    
    emailInputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.value && !validateEmail(input.value)) {
                input.style.borderColor = '#ff4757';
            } else {
                input.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }
        });
    });
    
    passwordInputs.forEach(input => {
        if (input.id.includes('password') && !input.id.includes('confirm')) {
            input.addEventListener('blur', () => {
                if (input.value && !validatePassword(input.value)) {
                    input.style.borderColor = '#ff4757';
                } else {
                    input.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }
            });
        }
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    handleStickyCtaVisibility();
    animateOnScroll();
    handleVideoClick();
    handleParallax();
    enhanceButtonEffects();
    setupFormValidation();
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', () => {
    // Recalculate any size-dependent elements
    if (window.innerWidth <= 768) {
        document.querySelector('.mobile-sticky-cta').style.display = 'block';
    } else {
        document.querySelector('.mobile-sticky-cta').style.display = 'none';
    }
});

// Smooth scrolling for all internal links
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

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger hero animations
    const heroElements = document.querySelectorAll('.hero-text > *');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll-based functions
window.addEventListener('scroll', throttle(() => {
    // Any scroll-based functionality here
}, 100));

// Keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.classList.contains('auth-tab')) {
        e.target.click();
    }
});

// Auto-focus first input when switching forms
function focusFirstInput(formId) {
    setTimeout(() => {
        const form = document.getElementById(formId);
        const firstInput = form.querySelector('input');
        if (firstInput) {
            firstInput.focus();
        }
    }, 100);
}

// Enhanced form switching with focus management
const originalShowAuthForm = showAuthForm;
showAuthForm = function(formType) {
    originalShowAuthForm(formType);
    focusFirstInput(formType + '-form');
};