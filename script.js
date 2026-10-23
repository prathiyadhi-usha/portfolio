:root {
    --primary: #f17660;
    --primary-dark: #df624d;
    --background: #fffdfb;
    --surface: #ffffff;
    --soft: #faf6f2;
    --text: #19212d;
    --muted: #747581;
    --border: #e9e5e1;
    --shadow: 0 8px 25px rgba(32, 28, 40, 0.07);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    color: var(--text);
    background: var(--background);
    line-height: 1.7;
}

a {
    color: inherit;
    text-decoration: none;
}

button, input, textarea {
    font: inherit;
}

button, a {
    -webkit-tap-highlight-color: transparent;
}

button:focus-visible, a:focus-visible,
input:focus-visible, textarea:focus-visible {
    outline: 3px solid #b5a2ff;
    outline-offset: 4px;
}

.container {
    width: min(1150px, 90%);
    margin: 0 auto;
}

.section {
    padding: 65px 0;
    scroll-margin-top: 90px;
}

.eyebrow {
    color: var(--primary);
    font-size: .76rem;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 10px;
}

h2 {
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(2rem, 4vw, 2.6rem);
    line-height: 1.2;
}

.heading-line {
    display: block;
    height: 4px;
    width: 43px;
    border-radius: 10px;
    background: var(--primary);
    margin-top: 17px;
}

/* Navigation */
.header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
}

.navbar {
    min-height: 78px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.brand {
    display: flex;
    align-items: center;
    gap: 13px;
    font-weight: 700;
    font-size: 1.1rem;
    white-space: nowrap;
}

.brand-mark {
    font-family: Georgia, serif;
    font-size: 1.9rem;
    letter-spacing: -3px;
    padding-right: 5px;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 29px;
    list-style: none;
}

.nav-links a {
    position: relative;
    display: inline-block;
    color: var(--text);
    font-size: .93rem;
    padding: 10px 0;
    transition: color .2s;
}

.nav-links a:hover, .nav-links a.active {
    color: var(--primary);
}

.nav-links a.active::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 100%;
    height: 3px;
    background: var(--primary);
    border-radius: 5px;
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 12px;
}

.theme-toggle, .menu-toggle {
    border: 1px solid var(--border);
    background: var(--soft);
    color: var(--text);
    cursor: pointer;
}

.theme-toggle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.talk-btn {
    display: inline-block;
    background: var(--text);
    color: white;
    padding: 10px 24px;
    border-radius: 10px;
    font-weight: 600;
    white-space: nowrap;
}

.talk-btn:hover {
    background: var(--primary);
}

.menu-toggle {
    display: none;
    border-radius: 8px;
    padding: 7px 12px;
}

/* Hero */
.hero {
    padding: 25px 0 35px;
    overflow: hidden;
    background: var(--background);
}

.hero-content {
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    align-items: center;
    gap: 30px;
    min-height: 390px;
}

.hero-text {
    position: relative;
    z-index: 2;
}

.hero-text h1 {
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(2.5rem, 4.5vw, 4rem);
    line-height: 1.04;
    letter-spacing: -1.5px;
    margin: 18px 0;
    color: var(--text);
}

.hero-dot {
    color: var(--primary);
}

.hero-lines {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 22px 0 15px;
}

.hero-lines span {
    display: block;
    height: 10px;
    background: var(--border);
    border-radius: 10px;
}

.hero-lines span:first-child { width: 85%; }
.hero-lines span:last-child { width: 65%; }

.hero-description {
    max-width: 480px;
    color: var(--muted);
    margin: 18px 0 25px;
    line-height: 1.8;
}

.work-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    border: 2px solid var(--primary);
    border-radius: 12px;
    background: var(--primary);
    color: white;
    padding: 11px 23px;
    font-weight: 700;
    cursor: pointer;
    transition: background .2s, transform .2s;
}

.work-btn:hover {
    background: var(--primary-dark);
    border-color: var(--primary-dark);
    transform: translateY(-2px);
}

.work-btn span { font-size: 1.35rem; }

.hero-image {
    position: relative;
    justify-self: center;
    width: min(100%, 470px);
    height: 405px;
    overflow: visible;
}

.profile-circle {
    position: absolute;
    inset: 0;
    border-radius: 50% 50% 0 0;
    background: #ffe4dc;
}

.profile-photo {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    border-radius: 50% 50% 0 0;
}

.photo-fallback {
    position: absolute;
    inset: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 50% 50% 0 0;
    color: #62483e;
}

.photo-fallback[hidden] { display: none; }

.photo-fallback span {
    font-family: Georgia, serif;
    font-size: 5rem;
    font-weight: bold;
}

.decoration {
    position: absolute;
    top: 45px;
    right: -12px;
    width: 5px;
    height: 25px;
    border-radius: 5px;
    background: var(--primary);
    transform: rotate(35deg);
}

.decoration-two { top: 65px; right: -29px; transform: rotate(55deg); }
.decoration-three { top: 90px; right: -20px; transform: rotate(75deg); }

.plant {
    position: absolute;
    right: -18px;
    bottom: 0;
    font-size: 3.8rem;
    z-index: 3;
}

/* Projects */
.projects-section {
    background: var(--surface);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}

.section-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 28px;
}

.section-heading h2, .skills-section h2 { margin-top: 4px; }

.project-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.filter-btn {
    border: 1px solid var(--border);
    background: var(--surface);
    padding: 8px 18px;
    border-radius: 25px;
    cursor: pointer;
}

.filter-btn.active, .filter-btn:hover {
    background: var(--primary);
    border-color: var(--primary);
    color: white;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.project-card {
    border: 1px solid var(--border);
    border-radius: 15px;
    overflow: hidden;
    background: var(--surface);
    box-shadow: var(--shadow);
    transition: transform .2s;
}

.project-card:hover { transform: translateY(-5px); }

.project-art {
    height: 210px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.recipe-art { background: #fff0e9; }
.study-art { background: #e9f1ff; }
.travel-art { background: #e5f5ef; }

.mock-window {
    width: 90%;
    padding: 18px;
    border-radius: 12px;
    background: white;
    box-shadow: var(--shadow);
}

.mock-search {
    display: block;
    background: #f6f2ef;
    border-radius: 8px;
    padding: 7px 12px;
    color: var(--muted);
    font-size: .8rem;
}

.food-emoji {
    text-align: center;
    font-size: 2.3rem;
    padding: 10px 0;
}

.food-row {
    display: flex;
    justify-content: space-around;
    font-size: 1.5rem;
}

.planner-window {
    display: flex;
    width: 100%;
    max-width: 300px;
    min-height: 160px;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow);
}

.planner-sidebar {
    padding: 15px;
    background: #293e69;
    color: white;
}

.planner-content { padding: 15px; font-size: .8rem; }
.planner-content > span { font-weight: bold; display: block; margin-bottom: 8px; }
.planner-content p { margin: 5px 0; }

.travel-window {
    display: flex;
    width: 100%;
    max-width: 300px;
    min-height: 155px;
    border-radius: 12px;
    background: white;
    overflow: hidden;
    box-shadow: var(--shadow);
}

.travel-window aside {
    background: #267c70;
    color: white;
    padding: 18px 12px;
    font-size: .75rem;
}

.travel-photos {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 1.6rem;
}

.project-info {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 12px;
    padding: 20px;
}

.project-info h3 { margin-bottom: 6px; }
.project-info p { color: var(--muted); font-size: .9rem; }
.project-info .tools { color: var(--primary); font-weight: 700; margin-top: 10px; }

.project-arrow {
    align-self: start;
    border: 1px solid var(--border);
    background: var(--soft);
    width: 38px;
    height: 38px;
    border-radius: 50%;
    cursor: pointer;
}

.project-arrow:hover { background: var(--primary); color: white; }
.extra-details { grid-column: 1 / -1; }
.project-note { margin-top: 22px; color: var(--muted); font-size: .9rem; }

/* About */
.about-section { background: var(--soft); }

.about-layout {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 55px;
    align-items: start;
}

.about-card {
    padding: 28px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 15px;
    box-shadow: var(--shadow);
}

.about-card p { color: var(--muted); margin-bottom: 18px; }
.text-link { color: var(--primary-dark); font-weight: bold; }

/* Skills */
.skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    margin-top: 30px;
}

.skill-pill {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 13px 22px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    font-weight: 700;
    box-shadow: var(--shadow);
}

.skill-icon {
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
}

.html-icon { background: #e76b3c; }
.css-icon { background: #3278c8; }
.js-icon { background: #d6ad23; color: #222; }
.teamwork-icon { background: #9b76d1; }

/* Contact */
.contact-section {
    background: var(--soft);
    border-top: 1px solid var(--border);
}

.contact-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 55px;
    align-items: start;
}

.contact-intro { margin: 20px 0; color: var(--muted); }

.email-link {
    display: inline-block;
    color: var(--primary-dark);
    font-weight: bold;
    overflow-wrap: anywhere;
}

.contact-form {
    display: flex;
    flex-direction: column;
    padding: 28px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 15px;
    box-shadow: var(--shadow);
}

.contact-form label { font-weight: 700; margin: 10px 0 5px; }

.contact-form input, .contact-form textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--background);
    color: var(--text);
}

.contact-form textarea { resize: vertical; }
.contact-form .work-btn { margin-top: 18px; align-self: flex-start; }
#formMessage { margin-top: 12px; color: var(--primary-dark); }

/* Footer */
.footer {
    padding: 22px 0;
    background: var(--surface);
    border-top: 1px solid var(--border);
}

.footer-content {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
}

.footer-content a { color: var(--primary-dark); font-weight: bold; }

.back-to-top {
    position: fixed;
    right: 22px;
    bottom: 22px;
    width: 44px;
    height: 44px;
    border: none;
    border-radius: 50%;
    background: var(--primary);
    color: white;
    font-size: 1.4rem;
    cursor: pointer;
    display: none;
    z-index: 90;
    box-shadow: var(--shadow);
}

.back-to-top.visible { display: block; }

/* Dark theme */
body.dark-theme {
    --background: #171922;
    --surface: #20232e;
    --soft: #252936;
    --text: #f1f2f7;
    --muted: #b2b5c2;
    --border: #383c49;
    --shadow: 0 8px 25px rgba(0, 0, 0, .18);
}

body.dark-theme .talk-btn { background: var(--primary); }
body.dark-theme .profile-circle { background: #4d3538; }
body.dark-theme .about-card,
body.dark-theme .mock-window,
body.dark-theme .planner-window,
body.dark-theme .travel-window,
body.dark-theme .contact-form,
body.dark-theme .project-card { color: var(--text); }

/* Responsive design */
@media (max-width: 900px) {
    .navbar { flex-wrap: wrap; padding: 12px 0; }
    .brand { margin-right: auto; }
    .menu-toggle { display: block; }
    .nav-links {
        display: none;
        order: 4;
        flex-basis: 100%;
        flex-direction: column;
        align-items: stretch;
        gap: 5px;
        padding: 10px 0;
    }
    .nav-links.open { display: flex; }
    .nav-links a { display: block; padding: 8px 12px; }
    .nav-links a.active::after { display: none; }
    .hero-content { grid-template-columns: 1fr 1fr; }
    .hero-text h1 { font-size: clamp(2.2rem, 5vw, 3.3rem); }
    .hero-image { height: 340px; }
    .projects-grid { grid-template-columns: repeat(2, 1fr); }
    .about-layout, .contact-layout { gap: 30px; }
}

@media (max-width: 600px) {
    .section { padding: 48px 0; }
    .navbar { gap: 10px; }
    .brand { font-size: .95rem; gap: 7px; }
    .brand-mark { font-size: 1.6rem; }
    .nav-actions { gap: 7px; }
    .talk-btn { padding: 9px 12px; font-size: .85rem; }
    .hero { padding-top: 35px; }
    .hero-content { grid-template-columns: 1fr; gap: 30px; }
    .hero-text h1 { font-size: clamp(2.4rem, 10vw, 3.4rem); }
    .hero-image { width: min(90%, 370px); height: 320px; }
    .projects-grid { grid-template-columns: 1fr; }
    .about-layout, .contact-layout { grid-template-columns: 1fr; gap: 28px; }
    .section-heading { align-items: start; }
    .skills-list { gap: 10px; }
    .skill-pill { padding: 10px 13px; }
    .contact-form { padding: 20px; }
    .footer-content { flex-direction: column; gap: 8px; }
}