document.addEventListener("DOMContentLoaded", function () {
  const radios = document.querySelectorAll('input[name="coming"]');
  const extraFields = document.getElementById("extraFields");
  const name = document.getElementById("guest_name");

  radios.forEach(radio => {
    radio.addEventListener("change", function () {
      if (this.value === "Yes") {
        extraFields.style.display = "block";
        if (name.value.includes("Pete")) {
          console.log("Success");
        }

      } else {
        extraFields.style.display = "none";
      }
    });
  });
});

function onlyOne(checkbox) {
const checkboxes = document.getElementsByName(checkbox.name);
checkboxes.forEach((item) => {
if (item !== checkbox) item.checked = false;
});
}
