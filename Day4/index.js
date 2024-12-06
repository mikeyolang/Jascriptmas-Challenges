const calendarContainer = document.getElementById("calendar");

// Sample gifts for each day
const gifts = [
  "Chocolate Bar 🎁",
  "Holiday Mug ☕",
  "Warm Socks 🧦",
  "Candy Cane 🍭",
  "Christmas Card 📜",
  "Snow Globe ❄️",
  "Ornament 🎄",
  "Gift Card 💳",
  "Hot Cocoa 🍫",
  "Scarf 🧣",
  "Mitten 🧤",
  "Mini Wreath 🌿",
  "Christmas Candle 🕯️",
  "Holiday Cookie 🍪",
  "Toy Train 🚂",
  "Santa Hat 🎅",
  "Reindeer Plush 🦌",
  "Stocking 🎀",
  "Holiday Book 📚",
  "Festive Pen ✍️",
  "Pine Scent Spray 🌲",
  "Photo Frame 🖼️",
  "Holiday Lights 💡",
  "Star Decor ⭐",
];

const openedDays = JSON.parse(localStorage.getItem("openedDays")) || {};

for (let i = 1; i <= 24; i++) {
  const box = document.createElement("li");
  box.classList.add("calendar-box");
  const isOpened = openedDays[i];
  const number = document.createElement("p");
  number.innerHTML = i;
  const icon = document.createElement("i");
  icon.classList.add("fas", isOpened ? "fa-check-circle" : "fa-gift");
  icon.style.color = isOpened ? "green" : "gold";
  const description = document.createElement("p");
  description.innerHTML = isOpened ? gifts[i - 1] : "Open me!";
  box.appendChild(number);
  box.appendChild(icon);
  box.appendChild(description);
  box.addEventListener("click", () => {
    if (!isOpened) {
      openedDays[i] = true;
      localStorage.setItem("openedDays", JSON.stringify(openedDays));
      icon.classList.remove("fa-gift");
      icon.classList.add("fa-check-circle");
      icon.style.color = "green";
      description.innerHTML = gifts[i - 1];
      alert(`Day ${i} gift: ${gifts[i - 1]}`);
    } else {
      alert(`Day ${i} gift is already opened: ${gifts[i - 1]}`);
    }
  });
  calendarContainer.appendChild(box);
}
