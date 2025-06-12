// Utility to update the light's position
function updateLight(x, y) {
    const lightEffect = document.querySelector('.light');
    const scrollY = window.scrollY;
    const clampedX = Math.min(window.innerWidth - 200, Math.max(0, x - 100));
    const clampedY = Math.min(document.body.scrollHeight - 200, Math.max(scrollY, y + scrollY - 100));
    lightEffect.style.left = `${clampedX}px`;
    lightEffect.style.top = `${clampedY}px`;
    lightEffect.style.opacity = '1'; // Show the light
}

// Desktop: mousemove
document.addEventListener('mousemove', (e) => {
    updateLight(e.clientX, e.clientY);
});

// Mobile: touchmove and auto-hide after 1s
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    let hideTimeout = null;
    const lightEffect = document.querySelector('.light');

    document.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        updateLight(touch.clientX, touch.clientY);

        // Reset hide timer on every touchmove
        if (hideTimeout) clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            lightEffect.style.opacity = '0'; // Hide the light
        }, 1000);
    }, { passive: true });

    // Optional: Also show on touchstart, hide after 1s on touchend
    document.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        updateLight(touch.clientX, touch.clientY);
        lightEffect.style.opacity = '1';
        if (hideTimeout) clearTimeout(hideTimeout);
    }, { passive: true });

    document.addEventListener('touchend', () => {
        if (hideTimeout) clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            lightEffect.style.opacity = '0';
        }, 100);
    });
}

    // document.addEventListener('touchmove', (e) => {
    //     e.preventDefault();
    // }, { passive: false });


const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const closeBtn = document.getElementById('close-btn');


hamburger.addEventListener('click', function(event) {
    event.preventDefault();
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});


closeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
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
