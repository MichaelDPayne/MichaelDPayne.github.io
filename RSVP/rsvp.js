document.addEventListener("DOMContentLoaded", function () {
  const radios = document.querySelectorAll('input[name="coming"]');
  const p1radios = document.querySelectorAll('input[name=p1');
  const extraFields = document.getElementById("extraFields");
  const accommodation = document.getElementById("accommodation");
  const plusone = document.getElementById("plusone");
  const plusoneExtra = document.getElementById("plusoneExtra");
  const nameField = document.getElementById("guest_name");
  const comingSection = document.getElementById("comingSec");
  var nameValue = "";
  const nameList = ["pete","shirley","emma","cherry","james","vicky","callum","debbie","victoria","lauren","ricky","george","georgina","mike","michael","mia","russ","steph","sean","breda","harry","ginny","harrison","virginia","robyn","jonah","matthew","matt","geraldine","danielle","dan","penny",];
  const p1List = ["mia","becky","dan","penny","sarah","jodie","russ","amy","emma","george","georgina"]

    nameField.addEventListener("input", () => {
  const hasName = nameField.value.trim().length > 0;
  console.log("change!")

  if (hasName === true) {
    comingSec.style.display = "block";
  }
  else {
    comingSec.style.display = "none";
  }

  //comingSection.style.display = hasName ? "block" : "none";

  // Optional: reset coming radios if name is cleared
  if (!hasName) {
    document
      .querySelectorAll('input[name="coming"]')
      .forEach(radio => radio.checked = false);
  }
})

  radios.forEach(radio => {
    radio.addEventListener("change", function () {
      if (this.value === "Yes") {
        extraFields.style.display = "block";

        nameValue = document.querySelector('input[name="guest_name"]')?.value || "";
        console.log("nameValue = " +nameValue);

        if (nameList.some(name => nameValue.toLowerCase().includes(name))) {
          accommodation.style.display = "block";
        }
        else {
          accommodation.style.display = "none";
        }

        if (p1List.some(name => nameValue.toLowerCase().includes(name))) {
          plusone.style.display = "block";
        }
        else {
          plusone.style.display = "none";
        }

      } else {
        extraFields.style.display = "none";
        accommodation.style.display = "none";
        plusone.style.display = "none";
        plusoneExtra.style.display = "none";
      }
    });
  });

  p1radios.forEach(p1radio => {
    p1radio.addEventListener("change", function () {
      if (this.value === "Yes") {
        console.log("Success");
        plusoneExtra.style.display = "block";
      }
      else {
        console.log("Fail");
        plusoneExtra.style.display = "none";
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


document.getElementById("rsvpForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const Attending =
    document.querySelector('input[name="coming"]:checked')?.value || "N/A";

  const Name =
    document.querySelector('input[name="guest_name"]').value || "N/A";

  const Starter =
    document.querySelector('input[name="starter"]:checked')?.value || "N/A";
    
  const Main =
    document.querySelector('input[name="main"]:checked')?.value || "N/A";

  const Dessert =
    document.querySelector('input[name="dessert"]:checked')?.value || "N/A";    

  const Diet =
    document.querySelector('input[name="diet"]').value || "N/A";

  const Wine =
    document.querySelector('input[name="wine"]:checked')?.value || "N/A";

  const Accomodation =
    document.querySelector('input[name="accommodation"]:checked')?.value || "N/A";

  const PlusOne =
    document.querySelector('input[name="p1"]:checked')?.value || "N/A";

  const PlusName =
    document.querySelector('input[name="p1_name"]').value || "N/A";

  const PlusStarter =
    document.querySelector('input[name="starter2"]:checked')?.value || "N/A";
    
  const PlusMain =
    document.querySelector('input[name="main2"]:checked')?.value || "N/A";

  const PlusDessert =
    document.querySelector('input[name="dessert2"]:checked')?.value || "N/A";    

  const PlusDiet =
    document.querySelector('input[name="diet2"]').value || "N/A";

  const PlusWine =
    document.querySelector('input[name="wine2"]:checked')?.value || "N/A";

  fetch("https://script.google.com/macros/s/AKfycbzzXBOKEG4qimBw0JyVvF97J5p098mYWDNrRw-Vu7Hj4xFHFIutuieGyhkrc4ndK5VW/exec", {
    method: "POST",
    body: JSON.stringify({ Name, Attending, Starter, Main, Dessert, Diet, Wine, Accomodation, PlusOne, PlusName, PlusStarter, PlusMain, PlusDessert, PlusDiet, PlusWine})
  })
  .then(res => res.json())
  .then(() => {
    //alert("Response saved!");
    window.location.href = "thanks.html";
  })
  .catch(err => {
    console.error(err);
    alert("Something went wrong");
  });
});
