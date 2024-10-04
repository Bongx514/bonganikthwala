const counterElements = document.querySelectorAll('.counter');

function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateNumberIncrement(entry.target);
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

counterElements.forEach(counterElement => {
  observer.observe(counterElement);
});

function animateNumberIncrement(counterElement) {
  const targetNumber = parseInt(counterElement.textContent);
  const duration = 2000; 
  const startNumber = 0;
  const increment = Math.ceil(targetNumber / (duration / 16));
  let currentNumber = startNumber;

  function updateNumber() {
    currentNumber += increment;
    if (currentNumber >= targetNumber) {
      currentNumber = targetNumber;
      clearInterval(interval);
    }
    counterElement.textContent = currentNumber;
  }

  const interval = setInterval(updateNumber, 16);
}
