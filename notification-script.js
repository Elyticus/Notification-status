const buttonElement = document.querySelector(".mark__read");
const lightClass = document.querySelectorAll(".group__icons");
const circlePoint = document.querySelectorAll(".circle");

buttonElement.addEventListener("click", () => {
  let notifNumber = document.querySelector(".notification__number");

  notifNumber.innerHTML = 0;

  lightClass.forEach((icons) => {
    icons.classList.remove("light__class");
  });

  circlePoint.forEach((point) => {
    point.classList.remove("circle");
  });
});
