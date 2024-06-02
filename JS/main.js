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
