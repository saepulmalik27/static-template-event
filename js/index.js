
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
  const disclosureButtons = document.querySelectorAll('.disclosure_button');
  disclosureButtons.forEach((button) => {
    const id = button.id.replace("disclosure_button", "");
    button.addEventListener('click', () => {
      toggleDisclosurePanel(id);
    });
  });
});
