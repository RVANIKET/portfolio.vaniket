// Preloader Logic
window.addEventListener('load', () => {
  // Simple delay or wait for load
  const preloaderDelay = 500; // Short delay after load
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, preloaderDelay);
});

// Ash Animation Logic
document.addEventListener('DOMContentLoaded', () => {
    const ashContainer = document.getElementById('ash-container');
    if (!ashContainer) return;

    const numberOfParticles = 50; // Adjust density

    for (let i = 0; i < numberOfParticles; i++) {
        createAshParticle(ashContainer);
    }
});

function createAshParticle(container) {
    const particle = document.createElement('div');
    particle.classList.add('ash-particle');

    // Randomize properties
    const randomLeft = Math.random() * 100; // % of width
    const randomDuration = Math.random() * 5 + 4; // seconds (e.g., 4s to 9s)
    const randomDelay = Math.random() * 5; // seconds
    const randomSize = Math.random() * 5 + 1; // px (e.g., 1px to 3px)
    const randomOpacity = Math.random() * 0.4 + 0.3; // e.g., 0.3 to 0.7

    particle.style.left = `${randomLeft}%`;
    particle.style.width = `${randomSize}px`;
    particle.style.height = `${randomSize}px`;
    particle.style.opacity = randomOpacity;
    particle.style.animationDuration = `${randomDuration}s`;
    particle.style.animationDelay = `-${randomDelay}s`; // Negative delay starts animation partway through

    container.appendChild(particle);
}

// Removed Footer Year Logic 