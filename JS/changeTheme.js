const theme = document.querySelector(".theme");
const body = document.querySelector("body");

theme.addEventListener("click", onThemeBtnClick);

function onThemeBtnClick(event) {
  const result = event.target.value;
  console.log(result);
  localStorage.setItem("ui-theme", result);
  if (event.target.value === "dark") {
    body.classList.add("theme--dark");
  } else {
    body.classList.remove("theme--dark");
  }
}

function onFirstLoading() {
  const result = localStorage.getItem("ui-theme");
  console.log(result);
  if (result === "dark") {
    body.classList.add("theme--dark");
  }
}

onFirstLoading();
