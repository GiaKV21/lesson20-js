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

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("show-slide"));
    slides[index].classList.add("show-slide");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  function resumeAutoSlide() {
    if (!isHovered) {
      startAutoSlide();
    }
  }

  sliderWrapper.addEventListener("mouseenter", function () {
    isHovered = true;
    stopAutoSlide();
  });

  sliderWrapper.addEventListener("mouseleave", function () {
    isHovered = false;
    resumeAutoSlide();
  });

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  showSlide(currentSlide);
  startAutoSlide();
});

//count down

function updateCountdown() {
  const nextClassDate = new Date("March 5, 2025 20:00:00");

  const now = new Date();

  const timeRemaining = nextClassDate - now;

  if (timeRemaining <= 0) {
    document.getElementById("countdown").innerHTML = "The next class is now!";
    return;
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

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

setInterval(updateCountdown, 1000);

updateCountdown();
