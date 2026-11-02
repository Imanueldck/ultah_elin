
const openButton = document.getElementById("openModal");
const closeButton = document.getElementById("closeModal");
const modal = document.getElementById("birthdayModal");

function openBirthdayModal() {
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeBirthdayModal() {
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

openButton.addEventListener("click", openBirthdayModal);

closeButton.addEventListener("click", closeBirthdayModal);

// Klik area luar modal untuk menutup
modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    closeBirthdayModal();
  }
});

// Tutup menggunakan tombol Escape
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape" && modal.classList.contains("show")) {
    closeBirthdayModal();
  }
});
const typingText = document.getElementById("typingText");

const text = " My Love! ❤️";

let index = 0;

function typeWriter() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;

    setTimeout(typeWriter, 200);
  }
}

typeWriter();


const loveSpamButton = document.getElementById("loveSpamButton");

const loveEmojis = [
  "❤️",
  "💗",
  "💕",
  "💖",
  "💘",
  "💝",
  "💓",
  "💞",
  "🥰",
  "😍"
];

loveSpamButton.addEventListener("click", function() {

  // Membuat banyak emoji cinta
  for (let i = 0; i < 70; i++) {

    const love = document.createElement("span");

    love.classList.add("love-particle");

    love.textContent =
      loveEmojis[Math.floor(Math.random() * loveEmojis.length)];

    // Posisi dan ukuran acak
    love.style.setProperty(
      "--left",
      Math.random() * 100 + "vw"
    );

    love.style.setProperty(
      "--size",
      (20 + Math.random() * 30) + "px"
    );

    love.style.setProperty(
      "--duration",
      (2 + Math.random() * 3) + "s"
    );

    love.style.setProperty(
      "--move-x",
      (Math.random() * 300 - 150) + "px"
    );

    love.style.setProperty(
      "--rotation",
      (Math.random() * 720 - 360) + "deg"
    );

    document.body.appendChild(love);

    // Hapus emoji setelah animasi selesai
    love.addEventListener("animationend", function() {
      love.remove();
    });

  }

});
