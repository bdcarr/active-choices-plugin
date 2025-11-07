window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".checkbox-content-data-holder").forEach((dataHolder) => {
        const { maxCount, randomName } = dataHolder.dataset;

      if (itemCount > maxCount) {
        document.getElementById(`ecp_${randomName}`).style.height = "auto";
        document.getElementById(`ecp_${randomName}`).style.overflowY = "auto";
      }

        height = Math.floor(height);
        document.getElementById(`ecp_${randomName}`).style.height = height + "px";
    });
});
