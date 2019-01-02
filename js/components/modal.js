const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");
const contentContainer = document.querySelector(".js-insert-content");

function toggleModal(condition=true) {
    modal.classList.toggle("show-modal");
};

function loadModalContent(trigger) {
    contentContainer.innerHTML = modalContents[trigger.dataset.modalContent];
    toggleModal();
};

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    };
}

closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
