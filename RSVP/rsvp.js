document.addEventListener("DOMContentLoaded", function () {
  const radios = document.querySelectorAll('input[name="coming"]');
  const extraFields = document.getElementById("extraFields");
  const accommodation = document.getElementById("accommodation");
  const name = document.getElementById("guest_name");
  var nameValue = "";

  radios.forEach(radio => {
    radio.addEventListener("change", function () {
      if (this.value === "Yes") {
        extraFields.style.display = "block";

        nameValue = document.querySelector('input[name="guest_name"]')?.value || "";
        console.log("nameValue = " +nameValue);

        if (nameValue.includes("Pete")) {
          accommodation.style.display = "block";
        }
        else {
          accommodation.style.display = "none";
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
