/**
 * ========================================
 * @define {Method}
 * ========================================
 */

// Handle Click Humberger
const handleClickHumberger = () => {
  humberger.classList.toggle("humberger--active");
  header.classList.toggle("header--active");
  sidebar.classList.toggle("hidden");
};

//handle Click sidebar
const handleClickSidebar = () => {
  humberger.classList.remove("humberger--active");
  header.classList.remove("header--active");
  sidebar.classList.add("hidden");
};

document.addEventListener("DOMContentLoaded", (e) => {
  /**
   * ========================================
   * @define {Event}
   * ========================================
   */
  humberger.addEventListener("click", handleClickHumberger);
  sidebar.addEventListener("click", handleClickSidebar);
  latarvirtualButton.addEventListener("click", () => {
    window.open(
      "https://drive.google.com/drive/folders/1HmVUkcI1JfKN7IoflqOKsgOv0I9jUy-R?usp=sharing"
    );
  });
  photoboothButton.addEventListener("click", () => {
    window.open(photoboothUrl);
  })
  /**
   * ========================================
   * @func disclosure logic
   * ========================================
   */

  const disclosureButtons = document.querySelectorAll(".disclosure_button");
  disclosureButtons.forEach((button) => {
    const id = button.id.replace("disclosure_button", "");
    button.addEventListener("click", () => {
      toggleDisclosurePanel(id);
    });
  });

  /**
   * ========================================
   * @func smooth-scroll
   * ========================================
   */
  const smoothScrollLinks = document.querySelectorAll(".smooth-scroll");
  // Add event listeners to handle smooth scrolling
  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior

      const targetId = link.getAttribute("href"); // Get the target element's ID
      const targetElement = document.querySelector(targetId); // Select the target element

      if (targetElement) {
        // Calculate the target element's position relative to the viewport
        const targetOffset = targetElement.getBoundingClientRect().top;

        // Smoothly scroll to the target element using scrollIntoView
        window.scrollTo({
          top: window.pageYOffset + targetOffset,
          behavior: "smooth",
        });
      }
    });
  });
});
