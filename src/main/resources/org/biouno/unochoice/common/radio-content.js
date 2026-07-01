window.addEventListener("DOMContentLoaded", () => {
    // Radio list params are intentionally rendered at their full height with no
    // fixed-height / scrollbar cap (see checkbox-content.js); the .ac-container
    // flex column grows to fit the entire list.

    document.querySelectorAll(".radio-content-radio-input").forEach((radioInput) => {
        radioInput.addEventListener("change", (event) => {
            const target = event.target;
            const name = target.getAttribute("name");
            const id = target.getAttribute("otherid");

            UnoChoice.fakeSelectRadioButton(name, id);
        });
    });
});
