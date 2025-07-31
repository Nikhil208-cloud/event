
  const buttons = document.querySelectorAll(".buy-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let user = prompt("Enter your Galactic Name 🪐:");
    if (user) {
      alert(`Thank you ${user}! Your order will arrive... sometime in 3025 🚀`);
    } else {
      alert("Order cancelled. Galaxy is disappointed 😔");
    }
  });
});
