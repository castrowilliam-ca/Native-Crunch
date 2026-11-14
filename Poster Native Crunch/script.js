let menuOpen = false;

function toggleMenu() {
    const sideButtons = document.getElementById('side-buttons');
    const badge = document.getElementById('click-badge');
    
    menuOpen = !menuOpen;
    
    if (menuOpen) {
        sideButtons.classList.add('is-open');
        badge.textContent = '✨ Select a section';
    } else {
        sideButtons.classList.remove('is-open');
        badge.textContent = '✨ Click to open menu';
        closePanel();
    }
}

function handleHover3D(e) {
    const card = document.getElementById('product-card');
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const rotateX = (-y / 8).toFixed(2);
    const rotateY = (x / 8).toFixed(2);
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
}

function resetHover3D() {
    const card = document.getElementById('product-card');
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
}

function openSection(sectionId, btnElement) {
    const panel = document.getElementById('info-panel');
    const allSections = document.querySelectorAll('.section-content');
    const allButtons = document.querySelectorAll('.nav-btn');

    allButtons.forEach(btn => btn.classList.remove('active'));
    allSections.forEach(sec => sec.classList.remove('active'));

    btnElement.classList.add('active');
    document.getElementById(sectionId).classList.add('active');
    panel.classList.add('visible');

    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closePanel() {
    const panel = document.getElementById('info-panel');
    const allButtons = document.querySelectorAll('.nav-btn');
    
    panel.classList.remove('visible');
    allButtons.forEach(btn => btn.classList.remove('active'));
}