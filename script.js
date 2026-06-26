// ===========================
// MOBILE MENU TOGGLE
// ===========================

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function closeMenu() {
    navLinks.classList.remove('active');
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navLinks.classList.remove('active');
    }
});

// ===========================
// MODAL FUNCTIONS
// ===========================

function openHireModal() {
    document.getElementById('hireModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeHireModal() {
    document.getElementById('hireModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openJobModal() {
    document.getElementById('jobModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeJobModal() {
    document.getElementById('jobModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openApplicationModal(jobTitle, company) {
    const jobTitleElement = document.getElementById('jobTitle');
    jobTitleElement.textContent = `${jobTitle} at ${company}`;
    document.getElementById('applicationModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeApplicationModal() {
    document.getElementById('applicationModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modals when clicking outside
document.addEventListener('click', (e) => {
    const hireModal = document.getElementById('hireModal');
    const jobModal = document.getElementById('jobModal');
    const applicationModal = document.getElementById('applicationModal');

    if (e.target === hireModal) {
        closeHireModal();
    }
    if (e.target === jobModal) {
        closeJobModal();
    }
    if (e.target === applicationModal) {
        closeApplicationModal();
    }
});

// ===========================
// COUNTER ANIMATION
// ===========================

function animateCounter() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 50;
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Trigger animation when hero section is visible
window.addEventListener('load', () => {
    animateCounter();
});

// ===========================
// JOB FILTERING
// ===========================

const jobSearch = document.getElementById('jobSearch');
const jobFilter = document.getElementById('jobFilter');
const jobsList = document.getElementById('jobsList');
const jobCards = document.querySelectorAll('.job-card');

function filterJobs() {
    const searchTerm = jobSearch.value.toLowerCase();
    const selectedCategory = jobFilter.value;

    jobCards.forEach(card => {
        const jobTitle = card.querySelector('.job-header h3').textContent.toLowerCase();
        const jobCompany = card.querySelector('.job-company').textContent.toLowerCase();
        const jobCategory = card.getAttribute('data-category');

        const matchesSearch = jobTitle.includes(searchTerm) || jobCompany.includes(searchTerm);
        const matchesCategory = !selectedCategory || jobCategory === selectedCategory;

        if (matchesSearch && matchesCategory) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.3s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

jobSearch.addEventListener('input', filterJobs);
jobFilter.addEventListener('change', filterJobs);

// ===========================
// TESTIMONIALS CAROUSEL
// ===========================

let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');

function showTestimonial(index) {
    testimonialCards.forEach(card => card.classList.remove('active'));
    testimonialCards[index].classList.add('active');
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

// Auto-rotate testimonials every 5 seconds
setInterval(nextTestimonial, 5000);

// ===========================
// SMOOTH SCROLL NAVIGATION
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                closeMenu();
            }
        }
    });
});

// ===========================
// SCROLL ANIMATIONS
// ===========================

function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .team-member, .about-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => observer.observe(el));
}

window.addEventListener('load', animateOnScroll);

// ===========================
// FORM SUBMISSIONS
// ===========================

const contactForm = document.querySelector('.contact-form');
const hireForm = document.querySelector('#hireModal form');
const jobForm = document.querySelector('#jobModal form');
const applicationForm = document.querySelector('#applicationModal form');

function handleFormSubmit(form, modalCloseFn) {
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Show success message
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = '✓ Submitted Successfully!';
            btn.style.background = 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)';
            
            // Reset form
            form.reset();
            
            // Restore button after 3 seconds
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                if (modalCloseFn) modalCloseFn();
            }, 3000);
            
            console.log('Form submitted:', data);
        });
    }
}

handleFormSubmit(contactForm);
handleFormSubmit(hireForm, closeHireModal);
handleFormSubmit(jobForm, closeJobModal);
handleFormSubmit(applicationForm, closeApplicationModal);

// ===========================
// ACTIVE NAV LINK HIGHLIGHT
// ===========================

function highlightActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

highlightActiveNav();

// ===========================
// SCROLL TO TOP BUTTON
// ===========================

function createScrollToTopButton() {
    const btn = document.createElement('button');
    btn.innerHTML = '↑';
    btn.classList.add('scroll-to-top');
    btn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 24px;
        display: none;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        transition: all 0.3s ease;
    `;

    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.style.display = 'flex';
            btn.style.alignItems = 'center';
            btn.style.justifyContent = 'center';
        } else {
            btn.style.display = 'none';
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    btn.addEventListener('mouseover', () => {
        btn.style.transform = 'scale(1.1)';
    });

    btn.addEventListener('mouseout', () => {
        btn.style.transform = 'scale(1)';
    });
}

window.addEventListener('load', createScrollToTopButton);

// ===========================
// NAVBAR BACKGROUND ON SCROLL
// ===========================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// ===========================
// LAZY LOADING FOR IMAGES
// ===========================

function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

window.addEventListener('load', lazyLoadImages);

// ===========================
// KEYBOARD NAVIGATION
// ===========================

document.addEventListener('keydown', (e) => {
    // Close modals with Escape key
    if (e.key === 'Escape') {
        closeHireModal();
        closeJobModal();
        closeApplicationModal();
    }

    // Navigate testimonials with arrow keys
    if (e.key === 'ArrowRight') {
        nextTestimonial();
    }
    if (e.key === 'ArrowLeft') {
        prevTestimonial();
    }
});

// ===========================
// LOADING ANIMATION
// ===========================

function showLoadingState() {
    const buttons = document.querySelectorAll('button[type="submit"]');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = '⏳ Processing...';
            this.disabled = true;
            
            // Simulate processing time
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);
        });
    });
}

window.addEventListener('load', showLoadingState);

// ===========================
// PAGE LOAD ANIMATION
// ===========================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

body.style.opacity = '0';
body.style.transition = 'opacity 0.5s ease';
