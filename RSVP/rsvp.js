document.addEventListener("DOMContentLoaded", function () {
  const radios = document.querySelectorAll('input[name="coming"]');
  const extraFields = document.getElementById("extraFields");

  radios.forEach(radio => {
    radio.addEventListener("change", function () {
      if (this.value === "yes") {
        extraFields.style.display = "block";
      } else {
        extraFields.style.display = "none";
      }
    });
  });
});
