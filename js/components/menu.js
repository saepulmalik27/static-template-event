/**
 * ========================================
 * @define {HTMLElement} menu
 * ========================================
 */

const menulistComponent = (id) => {
    return `<ul class="menu-list ${
      id === enumLabel.sidebar && "menu-list--column"
    } " id="menu-${id}">
        ${menuData
          .map((item) => `<li><a class="smooth-scroll" href="${item.url}">${item.label}</a></li>`)
          .join("")}
        </ul>`;
  };