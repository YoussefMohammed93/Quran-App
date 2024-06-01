document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const menuIconPath = document.getElementById("menu-icon-path");

  menuToggle.addEventListener("click", function () {
    const isOpen = mobileMenu.classList.contains("scale-y-100");
    mobileMenu.classList.toggle("scale-y-100", !isOpen);
    mobileMenu.classList.toggle("scale-y-0", isOpen);

    if (isOpen) {
      menuIconPath.setAttribute(
        "d",
        "M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
      );
    } else {
      menuIconPath.setAttribute("d", "M6 18L18 6M6 6l12 12");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const calendarImg = document.getElementById("calendarImg");
  const medalImg = document.getElementById("medalImg");
  const risingImg = document.getElementById("risingImg");
  const liveImg = document.getElementById("liveImg");
  const systemImg = document.getElementById("systemImg");
  const creditCardImg = document.getElementById("creditCardImg");

  calendarImg.src = "ASSETS/calendar.png";
  medalImg.src = "ASSETS/medal.png";
  risingImg.src = "ASSETS/rising.png";
  liveImg.src = "ASSETS/live.png";
  systemImg.src = "ASSETS/monitoring-system.png";
  creditCardImg.src = "ASSETS/credit-card.png";
});

document.addEventListener("DOMContentLoaded", function () {
  const registerBg = document.querySelector(".register");
  const registerImg = document.querySelector('img[alt="Register"]');
  const countriesDropdown = document.getElementById("countries-dropdown");

  registerBg.style.backgroundImage = 'url("/ASSETS/register-img.png")';
  registerImg.src = "ASSETS/register.png";

  const countries = [
    "Saudi Arabia",
    "United Arab Emirates",
    "Qatar",
    "Kuwait",
    "Bahrain",
    "Oman",
    "Jordan",
    "Lebanon",
    "Egypt",
    "Iraq",
  ];

  let dropdownHtml = `
        <input type="text" id="selectedCountry" placeholder="Country" readonly
            class="w-full px-4 py-2 border rounded-md focus:outline-none text-gray-700" 
            style="border-color: #d1d5db; padding-right: 2.5rem;" />
        <button type="button" id="dropdownButton" class="absolute inset-y-0 right-0 px-2 flex items-center text-gray-500">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>
        <div id="dropdownMenu" class="hidden absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg">
            <div class="py-1">`;

  countries.forEach((country) => {
    dropdownHtml += `<button type="button" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">${country}</button>`;
  });

  dropdownHtml += `</div></div>`;
  countriesDropdown.innerHTML = dropdownHtml;

  const selectedCountry = document.getElementById("selectedCountry");
  const dropdownButton = document.getElementById("dropdownButton");
  const dropdownMenu = document.getElementById("dropdownMenu");

  dropdownButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");
  });

  dropdownMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      selectedCountry.value = event.target.textContent;
      dropdownMenu.classList.add("hidden");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollToTopButton");

  const handleScroll = () => {
    if (window.scrollY >= 200) {
      scrollToTopButton.classList.remove("hidden-button");
      scrollToTopButton.classList.add("visible-button");
    } else {
      scrollToTopButton.classList.remove("visible-button");
      scrollToTopButton.classList.add("hidden-button");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleScroll);
  scrollToTopButton.addEventListener("click", scrollToTop);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
});
