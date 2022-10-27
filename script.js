"use strict";

// getting all the needed elements.
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// use querySelectorAll to select all elements with the same class name.
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
	// to remove a class from an element.
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

const closeModal = function () {
	// to add a class to an element.
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

// for each of the same element of the class: "show-modal"
// add eventListers to them to open the modal
for (let i = 0; i < btnsOpenModal.length; i++) {
	btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// listen for an "keydown" event on the whole document.
// the parameter in the function is to know the information about the event.
// for example: wich key was pressed? And respond according to that information.
document.addEventListener("keydown", function (event) {
	// console.log(event);
	// check for the Escape key being pressed
	if (event.key === "Escape" && !modal.classList.contains("hidden")) {
		closeModal();
	}
});
