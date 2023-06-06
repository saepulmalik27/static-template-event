const disclosureComponent = (id, title, description) => {

  return `<div class="disclosure">
    <div class="disclosure_button" id="disclosure_button+${id}" ">
      <div class="disclosure_button__title">
        <p class="p0">${id}</p>
        <p class="p0">${title}</p>
      </div>
      <div class="disclosure_button__icon">
        <img src="assets/icon/chevron.svg" alt="arrow" />
      </div>
    </div>
    <div class="disclosure_panel show" id="disclosure_panel+${id}">
      <p class="p0" style="visibility: hidden;font-size:20px;margin-right:0.8rem" >${id}</p>
      <p>${description}</p>
    </div>
  </div>`;
};

const faqComponent = () => {
    return faqData.map(({title, description}, key) => disclosureComponent( key+1,title, description)).join("");
}

