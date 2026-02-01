document.addEventListener('DOMContentLoaded', () => {
    
    
    // --- Configuration ---
    const noMessages = [
        "No",
        "sure  Tossi?",
        "Think again :>",
        "Please habibi  ? ",
        "Pretty please? ",
        "Mabldek >:( !",
        "Enti Mthbiniish..",
        "Just click YES 😝! "
    ];
    let messageIndex = 0;

    // --- DOM Elements ---
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    const questionCard = document.getElementById('question-card');
    const successCard = document.getElementById('success-card');
    const heartsContainer = document.getElementById('hearts-container');
    const celebrationContainer = document.getElementById('celebration-container');

    // --- Background Hearts Animation ---
    function createBackgroundHearts() {
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            heart.innerHTML = '🌹';
            
            // Random properties
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's'; // 4s to 7s
            heart.style.animationDelay = (Math.random() * 5) + 's';
            heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
            
            heartsContainer.appendChild(heart);
        }
    }

    

    // --- "No" Button Interaction ---
    function moveNoButton() {
        // Calculate available space
        const maxX = window.innerWidth - noBtn.offsetWidth - 20;
        const maxY = window.innerHeight - noBtn.offsetHeight - 20;

        const randomX = Math.max(10, Math.random() * maxX);
        const randomY = Math.max(10, Math.random() * maxY);

        // Apply new position
        noBtn.style.position = 'fixed';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';

        // Change Text
        messageIndex = (messageIndex + 1) % noMessages.length;
        noBtn.innerText = noMessages[messageIndex];
    }

    // --- Success Interaction ---
    function handleYesClick() {
        questionCard.classList.add('hidden');
        successCard.classList.remove('hidden');
        createCelebration();
    }

    function createCelebration() {
        for (let i = 0; i < 300; i++) {
            const heart = document.createElement('div');
            heart.classList.add('celebration-heart');
            heart.innerHTML = '💖🌹';

            
            // Random position and delay
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animationDelay = (Math.random() * 0.5) + 's';
            heart.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            celebrationContainer.appendChild(heart);
        }
    }

    // --- Event Listeners ---
    
    // Initialize background
    createBackgroundHearts();

    // No Button Events (Desktop & Mobile)
    noBtn.addEventListener('mouseenter', moveNoButton);
    noBtn.addEventListener('click', moveNoButton);
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent clicking on mobile
        moveNoButton();
    });

    // Yes Button Event
// ... inside your script.js ...

const audio = document.getElementById('success-music'); // Get the audio element

yesBtn.addEventListener('click', () => {
    
    // 1. PLAY MUSIC IMMEDIATELY
    if (audio) {
        audio.play();
        audio.volume = 0.6; // Optional: Set volume
    }

    // 2. Hide Question & Show Success
    document.getElementById('question-card').style.display = 'none';
    document.getElementById('success-card').classList.remove('hidden');
    document.getElementById('success-card').style.display = 'block';

    // 3. Trigger Hearts Explosion
    createCelebration();

    for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            heart.innerHTML = '💋';
            
            // Random properties
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's'; // 4s to 7s
            heart.style.animationDelay = (Math.random() * 5) + 's';
            heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
            
            heartsContainer.appendChild(heart);
        }
    for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            heart.innerHTML = '💖';
            
            // Random properties
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's'; // 4s to 7s
            heart.style.animationDelay = (Math.random() * 5) + 's';
            heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
            
            heartsContainer.appendChild(heart);
        }
});});