function clock() {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var today = new Date();

  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  var day = h < 12 ? "AM" : "PM";
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("hours").innerHTML = h;
  document.getElementById("min").innerHTML = m;
  document.getElementById("sec").innerHTML = s;
}

setInterval(clock, 1000);

//slider
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentSlide = 0;
  let slideInterval;
  let isHovered = false;

  // Function to show the current slide
  function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => slide.classList.remove("show-slide"));
    // Show the current slide
    slides[index].classList.add("show-slide");
  }

  // Function to move to the next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Function to move to the previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Automatically change slides every 5 seconds
  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  // Pause the slide change when hovering over the image
  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  // Resume the slide change when mouse leaves
  function resumeAutoSlide() {
    if (!isHovered) {
      startAutoSlide();
    }
  }

  // Event listeners for hover
  sliderWrapper.addEventListener("mouseenter", function () {
    isHovered = true;
    stopAutoSlide();
  });

  sliderWrapper.addEventListener("mouseleave", function () {
    isHovered = false;
    resumeAutoSlide();
  });

  // Buttons to manually navigate slides
  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  // Initialize the first slide
  showSlide(currentSlide);
  startAutoSlide(); // Start automatic sliding
});

//count down

// Function to update the countdown
function updateCountdown() {
  // Define the date and time of the next class (March 5th, 20:00)
  const nextClassDate = new Date("March 5, 2025 20:00:00");

  // Get the current date and time
  const now = new Date();

  // Calculate the difference in time (in milliseconds)
  const timeRemaining = nextClassDate - now;

  // If the class time has already passed
  if (timeRemaining <= 0) {
    document.getElementById("countdown").innerHTML = "The next class is now!";
    return;
  }

  // Calculate days, hours, minutes, and seconds remaining
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Update the countdown display
  document.getElementById("countdown").innerHTML = `
    <div class="time-box">
      <span class="time">${days}</span> <span class="label">Days</span>
    </div>
    <div class="time-box">
      <span class="time">${hours}</span> <span class="label">Hours</span>
    </div>
    <div class="time-box">
      <span class="time">${minutes}</span> <span class="label">Minutes</span>
    </div>
    <div class="time-box">
      <span class="time">${seconds}</span> <span class="label">Seconds</span>
    </div>
  `;
}

// Update the countdown every second (1000 milliseconds)
setInterval(updateCountdown, 1000);

// Call the function initially to display the countdown right away
updateCountdown();
