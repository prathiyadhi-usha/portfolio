document.documentElement.classList.add("js");

// ===== 1. TYPING ANIMATION =====
const typingText = document.querySelector(".typing-text");

if (typingText) {
    const words = ["Web Developer", "Frontend Developer", "Student", "Creative Designer"];
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
        const word = words[wordIndex];
        typingText.textContent = word.substring(0, charIndex);

        if (!deleting) {
            charIndex++;
            if (charIndex > word.length) {
                deleting = true;
                setTimeout(typeEffect, 1200);
                return;
            }
        } else {
            charIndex--;
            if (charIndex < 0) {
                deleting = false;
                charIndex = 0;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }
        setTimeout(typeEffect, deleting ? 50 : 100);
    }
    typeEffect();
}

// ===== 2. MOBILE MENU =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
}

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));

// ===== 3. ACTIVE LINK, STICKY SHADOW, BACK TO TOP =====
const sections = document.querySelectorAll("main section[id]");
const navItems = navLinks.querySelectorAll("a");
const topbar = document.getElementById("topbar");
const backToTop = document.querySelector(".back-to-top");

function onScroll() {
    let current = "home";
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 140) current = section.id;
    });
    navItems.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
    topbar.classList.toggle("scrolled", window.scrollY > 50);
    backToTop.classList.toggle("visible", window.scrollY > 300);
}

window.addEventListener("scroll", onScroll);
onScroll();

backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ===== 4. SCROLL REVEAL + SKILL BARS =====
const revealElements = document.querySelectorAll(".reveal");
const skillBars = document.querySelectorAll(".skill-progress");

function fillBar(bar) {
    const value = Number(bar.dataset.progress) || 0;
    bar.style.width = Math.min(100, Math.max(0, value)) + "%";
}

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("show");
            entry.target.querySelectorAll(".skill-progress").forEach(fillBar);
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => observer.observe(el));
} else {
    revealElements.forEach(el => el.classList.add("show"));
    skillBars.forEach(fillBar);
}

// ===== 5. FOOTER YEAR =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== 6. CONTACT FORM =====
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", event => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    formMessage.textContent = "Thank you! Your message is ready. Connect an email service to receive it.";
    contactForm.reset();
});

// ===== 7. PROFILE PHOTO =====
// Looks for profile.jpg/.jpeg/.png/.webp in the images folder, then next to index.html
const photo = document.getElementById("profilePhoto");
const folders = ["images/", ""];
const extensions = ["jpg", "jpeg", "png", "webp"];
const candidates = [];

folders.forEach(folder => {
    extensions.forEach(ext => candidates.push(folder + "profile." + ext));
});

let photoIndex = 0;

function tryNextPhoto() {
    if (photoIndex >= candidates.length) return;
    photo.src = candidates[photoIndex++];
}

photo.addEventListener("load", () => { photo.style.visibility = "visible"; });
photo.addEventListener("error", tryNextPhoto);
tryNextPhoto();