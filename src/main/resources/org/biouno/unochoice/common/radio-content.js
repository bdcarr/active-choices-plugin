window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".radio-content-data-holder").forEach((dataHolder) => {
        const { getVisibleItemCount, visibleItemCount, randomName } = dataHolder.dataset;
        var height = 0;
        var maxCount = getVisibleItemCount;
        if (maxCount > visibleItemCount) {
            maxCount = visibleItemCount;
        }

        if (itemCount > maxCount) {
          document.getElementById(`ecp_${randomName}`).style.height = "auto";
          document.getElementById(`ecp_${randomName}`).style.overflowY = "auto";
        }

        height = Math.floor(height);
        document.getElementById(`ecp_${randomName}`).style.height = height + "px";
    });

    document.querySelectorAll(".radio-content-radio-input").forEach((radioInput) => {
        radioInput.addEventListener("change", (event) => {
            const target = event.target;
            const name = target.getAttribute("name");
            const id = target.getAttribute("otherid");

            UnoChoice.fakeSelectRadioButton(name, id);
        });
    });
});
