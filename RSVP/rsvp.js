document.addEventListener("DOMContentLoaded", function () {
  const radios = document.querySelectorAll('input[name="coming"]');
  const p1radios = document.querySelectorAll('input[name=p1');
  const extraFields = document.getElementById("extraFields");
  const accommodation = document.getElementById("accommodation");
  const plusone = document.getElementById("plusone");
  const plusoneExtra = document.getElementById("plusoneExtra");
  var nameValue = "";
  const nameList = ["pete","shirley","emma","cherry","james","vicky","callum","debbie","victoria","lauren","ricky","george","georgina","mike","michael","mia","russ","steph","sean","breda","harry","ginny","harrison","virginia","robyn","jonah","matthew","matt","geraldine","danielle","dan","penny",];
  const p1List = ["pete","shirley","emma","lauren","george","georgina","mia","russ","ginny","virginia","becky","dan","penny","sarah","sean","steph","cherry","james","jonah","robyn","jodie"]

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
    document.querySelector('input[name="coming"]:checked')?.value || "blank";

  const Name =
    document.querySelector('input[name="guest_name"]').value || "blank";

  const Starter =
    document.querySelector('input[name="starter"]:checked')?.value || "blank";
    
  const Main =
    document.querySelector('input[name="main"]:checked')?.value || "blank";

  const Dessert =
    document.querySelector('input[name="dessert"]:checked')?.value || "blank";    

  const Diet =
    document.querySelector('input[name="diet"]').value || "blank";

  const Wine =
    document.querySelector('input[name="wine"]:checked')?.value || "blank";

  const Accomodation =
    document.querySelector('input[name="accommodation"]:checked')?.value || "blank";

  const PlusOne =
    document.querySelector('input[name="p1"]:checked')?.value || "blank";

  const PlusName =
    document.querySelector('input[name="p1_name"]').value || "blank";

  const PlusStarter =
    document.querySelector('input[name="starter2"]:checked')?.value || "blank";
    
  const PlusMain =
    document.querySelector('input[name="main2"]:checked')?.value || "blank";

  const PlusDessert =
    document.querySelector('input[name="dessert2"]:checked')?.value || "blank";    

  const PlusDiet =
    document.querySelector('input[name="diet2"]').value || "blank";

  const PlusWine =
    document.querySelector('input[name="wine2"]:checked')?.value || "blank";

  fetch("https://script.google.com/macros/s/AKfycbzzXBOKEG4qimBw0JyVvF97J5p098mYWDNrRw-Vu7Hj4xFHFIutuieGyhkrc4ndK5VW/exec", {
    method: "POST",
    body: JSON.stringify({ Name, Attending, Starter, Main, Dessert, Diet, Wine, Accomodation, PlusOne, PlusName, PlusStarter, PlusMain, PlusDessert, PlusDiet, PlusWine})
  })
  .then(res => res.json())
  .then(() => {
    alert("Response saved!");
    this.reset();
  })
  .catch(err => {
    console.error(err);
    alert("Something went wrong");
  });
});
