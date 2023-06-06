const createDisclosureComponent = (id, title, description) => {
  return `<div class="disclosure">
    <div class="disclosure_button" id="disclosure_button${id}">
      <div class="disclosure_button__label">
        <p class="p0">${id+1}.</p>
        <p class="p0">${title}</p>
      </div>
      <div class="disclosure_button__icon" id="disclosure_button_icon${id}">
        <img src="assets/icon/chevron.svg" alt="arrow" />
      </div>
    </div>
    <div class="disclosure_panel" id="disclosure_panel${id}">
      <p class="p0" style="visibility: hidden;font-size:20px;margin-right:0.8rem">${id}</p>
      <p>${description}</p>
    </div>
  </div>`;
};

const createFAQComponent = () => {
  return faqData.map(({ title, description }, index) =>
    createDisclosureComponent(index, title, description)
  ).join("");
};

const toggleDisclosurePanel = (id) => {
 const panel = document.querySelector(`#disclosure_panel${id}`);
  const buttonIcon = document.querySelector(`#disclosure_button_icon${id}`);

  if (panel && buttonIcon) {
    panel.classList.toggle("show");
    buttonIcon.classList.toggle("active");
  }
};

