const card = document.getElementById("card");
const wish = document.getElementById("wish");
const confettiContainer = document.getElementById("confetti");

const message = "Wishing you a day filled with luxury, laughter, and all the gold moments you deserve. Stay shining! ✨";
let index = 0;
let typingTimer;

function createConfetti() {
  for (let i = 0; i < 60; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = i % 2 === 0 ? "#d4af37" : "#ffffff";
    confetti.style.width = Math.random() * 8 + 5 + "px";
    confetti.style.height = confetti.style.width;
    confetti.style.animation = `fall ${Math.random() * 2 + 3}s linear forwards`;
    confettiContainer.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
  }
}

function typeWish() {
  if (index < message.length) {
    wish.textContent += message.charAt(index);
    index++;
    typingTimer = setTimeout(typeWish, 50);
  }
}

card.addEventListener("click", () => {
  const isOpen = card.classList.toggle("open");
  
  // Always stop and clear when clicking
  clearTimeout(typingTimer);
  wish.textContent = "";
  index = 0;

  if (isOpen) {
    createConfetti();
    // Wait for card flip (1.2s in CSS) before typing starts
    setTimeout(typeWish, 1300);
  }
});

// Animation helper for confetti
const styleSheet = document.createElement("style");
styleSheet.innerText = `@keyframes fall { to { transform: translateY(100vh) rotate(360deg); opacity: 0; } }`;
document.head.appendChild(styleSheet);