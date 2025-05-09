const filterItems = document.querySelectorAll(".cars-filter li");
const carItems = document.querySelectorAll(".car");
const carsContent = document.getElementById("cars-content");

filterItems.forEach((item) => {
  item.onclick = () => {
    filterItems.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");

    const filterText = item.textContent.toLocaleLowerCase();

    carItems.forEach((car) => {
      if (
        filterText === "все марки" ||
        car.querySelector("h4").textContent.toLowerCase().includes(filterText)
      ) {
        car.style.display = "flex";
      } else {
        car.style.display = "none";
      }
    });
    carsContent.scrollIntoView({ behavior: "instant" });
  };
});

const carField = document.getElementById("car");
const nameField = document.getElementById("name");
const phoneField = document.getElementById("phone");

document.getElementById("order-action").addEventListener("click", function () {
  const fields = [carField, nameField, phoneField];
  let hasError = false;

  fields.forEach((field) => {
    if (field.value.trim() === "") {
      field.style.borderColor = "red";
      hasError = true;
    } else {
      field.style.borderColor = "white";
    }
  });

  if (phoneField.value.length < 10) {
    phoneField.style.borderColor = "red";
    hasError = true;
  }

  if (!hasError) {
    alert("Спасибо за заявку! Мы скоро свяжемся с Вами.");
    fields.forEach((field) => (field.value = ""));
  }
});
