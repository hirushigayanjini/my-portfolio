// THREE.JS STAR BACKGROUND
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 30;

const starGeometry = new THREE.BufferGeometry();
const starCount = 1000;
const positions = [];

for (let i = 0; i < starCount; i++) {
    positions.push(
        (Math.random() - 0.5) * 300,
        (Math.random() - 0.5) * 300,
        (Math.random() - 0.5) * 300
    );
}

starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
const starMaterial = new THREE.PointsMaterial({ 
    color: 0xFFD600, 
    size: 1.5, 
    transparent: true, 
    opacity: 0.3 
});
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

function animate() {
    requestAnimationFrame(animate);
    stars.rotation.y += 0.0005; 
    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll('.reveal');

const showOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', showOnScroll);
// Initial check
showOnScroll();

// CONTACT FORM SUBMISSION (Prevent Default)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! This is a demo; form submission is not implemented.');
    });
}
