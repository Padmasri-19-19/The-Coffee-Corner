function scrollMenu(direction) {
  const container = document.getElementById("menuContainer");
  const scrollAmount = 220; // Scroll one card at a time
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}
// Optional: log a message when a testimonial is clicked
document.querySelectorAll('.testimonial').forEach(item => {
  item.addEventListener('click', () => {
    alert("Thanks for reading this testimonial!");
  });
});
//contact//
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Show confirmation message
  document.getElementById("responseMsg").textContent = "Thanks! We'll be in touch soon.";

  // Reset the form
  this.reset();
});

//toggle menu
  function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
  }

