const card = document.getElementById("card");
const wish = document.getElementById("wish");

const message = "Wishing you a day filled with luxury, laughter, and all the gold moments you deserve. Stay shining! ✨";
let index = 0;
let typingStarted = false;

function typeWish() {
  if (index < message.length) {
    wish.textContent += message.charAt(index);
    index++;
    setTimeout(typeWish, 50);
  }
}

card.addEventListener("click", () => {
  card.classList.toggle("open");

  if (card.classList.contains("open") && !typingStarted) {
    typingStarted = true;
    wish.textContent = "";
    // Wait for card to flip before typing
    setTimeout(typeWish, 1000);
  } else if (!card.classList.contains("open")) {
    // Reset if closed
    typingStarted = false;
    index = 0;
    wish.textContent = "";
  }
});