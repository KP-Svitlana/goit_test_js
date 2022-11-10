// Buttons //

// const buttonOpen = document.querySelector(".js-open");
// const buttonClose = document.querySelector(".js-close");
// const buttonJast = document.querySelector(".js-jast");

// function onTargetBtnClick() {
//   console.log("You can do it!");
// }

// buttonOpen.addEventListener("click", () => {
//   buttonJast.addEventListener("click", onTargetBtnClick);
// });

// buttonClose.addEventListener("click", () => {
//   buttonJast.removeEventListener("click", onTargetBtnClick);
// });

// Forms //

// const form = document.querySelector(".js-registered-form");

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();
//   //   console.dir(event.currentTarget.elements.subscription.value);
//   //   console.log("This is form submit");

//   const formData = new FormData(event.currentTarget);
//   formData.forEach((value, name) => {
//     console.log("onFormSubmit-> name", name);
//     console.log("onFormSubmit-> value", value);
//   });
//   console.log(formData);
// }

// MODAL OPEN/CLOSE SCRIPT //

// const refs = {
//   openModalBtn: document.querySelector('[data-action="open-modal"]'),
//   closeModalBtn: document.querySelector("[data-action='close-modal']"),
//   backdrop: document.querySelector(".js-backdrop"),
// };

// refs.openModalBtn.addEventListener("click", onOpenModal);
// refs.closeModalBtn.addEventListener("click", onCloseModal);
// refs.backdrop.addEventListener("click", onBackdropClick);

// function onOpenModal(event) {
//   window.addEventListener("keydown", onEscKayPress);
//   document.body.classList.add("show-modal");
// }

// function onCloseModal(event) {
//   window.removeEventListener("keydown", onEscKayPress);
//   document.body.classList.remove("show-modal");
// }

// function onBackdropClick(event) {
//   if (event.currentTarget === event.target) {
//     onCloseModal();
//   }
// }

// function onEscKayPress(event) {
//   if (event.code === "Escape") {
//     onCloseModal();
//   }
// }
