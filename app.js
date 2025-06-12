document.addEventListener('mousemove', (e) => {
    const lightEffect = document.querySelector('.light');

    const scrollY = window.scrollY;


    const x = Math.min(window.innerWidth - 200, Math.max(0, e.clientX - 100));
    const y = Math.min(document.body.scrollHeight - 200, Math.max(scrollY, e.clientY + scrollY - 100));

    lightEffect.style.left = `${x}px`;
    lightEffect.style.top = `${y}px`;
    });


    document.addEventListener('touchmove', (e) => {
        e.preventDefault();
    }, { passive: false });


const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const closeBtn = document.getElementById('close-btn');


hamburger.addEventListener('click', function(event) {
    event.preventDefault();
    sidebar.classList.add('active');
    overlay.classList.add('active');
});


closeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});


overlay.addEventListener('click', function() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});


sidebar.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
});
