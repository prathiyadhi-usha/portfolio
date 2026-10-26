/* =================================
   ATTRACTIVE STUDENT PORTFOLIO
================================= */

// 1. Typing Animation
const typingText = document.querySelector(".typing-text");

if (typingText) {
    const words = [
        "Web Developer",
        "Frontend Developer",
        "Student",
        "Creative Designer"
    ];

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


