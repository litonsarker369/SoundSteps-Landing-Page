document.addEventListener('DOMContentLoaded', function() {
    
    // Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
        observer.observe(el);
    });

    // Form Handling
    const form = document.getElementById('earlyAccessForm');
    const formSuccess = document.getElementById('formSuccess');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors
            document.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));
            
            // Validate
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const location = document.getElementById('location');
            
            if (!name || !name.value.trim()) {
                if (name) name.parentElement.classList.add('error');
                isValid = false;
            }
            
            if (!email || !email.value.trim() || !email.value.includes('@')) {
                if (email) email.parentElement.classList.add('error');
                isValid = false;
            }
            
            if (!location || !location.value.trim()) {
                if (location) location.parentElement.classList.add('error');
                isValid = false;
            }
            
            if (isValid) {
                // Collect form data
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());
                
                // Handle checkboxes (supportStatus)
                const supportStatuses = [];
                document.querySelectorAll('input[name="supportStatus"]:checked').forEach(cb => {
                    supportStatuses.push(cb.value);
                });
                data.supportStatus = supportStatuses;
                
                // Store in localStorage (demo)
                const submissions = JSON.parse(localStorage.getItem('soundsteps_submissions') || '[]');
                submissions.push({ ...data, timestamp: new Date().toISOString() });
                localStorage.setItem('soundsteps_submissions', JSON.stringify(submissions));
                
                console.log('Form submitted:', data);
                
                // Show success with animation
                form.classList.add('hidden');
                formSuccess.classList.add('show');
                
                // Reset form for next time
                form.reset();
            }
        });

        // Real-time validation on blur
        const requiredInputs = form.querySelectorAll('input[required]');
        requiredInputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (!this.value.trim()) {
                    this.parentElement.classList.add('error');
                } else if (this.type === 'email' && !this.value.includes('@')) {
                    this.parentElement.classList.add('error');
                } else {
                    this.parentElement.classList.remove('error');
                }
            });
            
            input.addEventListener('input', function() {
                this.parentElement.classList.remove('error');
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
            } else {
                nav.style.boxShadow = 'none';
            }
        });
    }

    // Add stagger animation to cards
    const cards = document.querySelectorAll('.problem-card, .step');
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Console info
    console.log('%c🎉 SoundSteps Landing Page', 'font-size: 20px; font-weight: bold; color: #2D7D6F;');
    console.log('%cBuilt with care for families', 'font-size: 14px; color: #5A6C7D;');
});
