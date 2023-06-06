/**
 * ========================================
 * @define {Render Component}
 * ========================================
 */
navbar.innerHTML = menulistComponent(enumLabel.navbar);
sidebar.innerHTML = menulistComponent(enumLabel.sidebar);
faqContent.innerHTML = createFAQComponent()
photoboothLinks.forEach((link) => {
    link.href = photoboothUrl;
});