const counterElements = document.querySelectorAll('.counter');

// Callback function to handle intersection changes
function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Start the number animation when the element comes into view
      animateNumberIncrement(entry.target);
      // Unobserve the target to stop observing after animation
      observer.unobserve(entry.target);
    }
  });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

// Observe each counter element
counterElements.forEach(counterElement => {
  observer.observe(counterElement);
});

// Function to animate number increment for each element
function animateNumberIncrement(counterElement) {
  const targetNumber = parseInt(counterElement.textContent);
  const duration = 2000; // Animation duration in milliseconds
  const startNumber = 0;
  const increment = Math.ceil(targetNumber / (duration / 16));
  let currentNumber = startNumber;

  // Function to update the number
  function updateNumber() {
    currentNumber += increment;
    if (currentNumber >= targetNumber) {
      currentNumber = targetNumber;
      clearInterval(interval);
    }
    counterElement.textContent = currentNumber;
  }

  // Set interval for updating number
  const interval = setInterval(updateNumber, 16);
}