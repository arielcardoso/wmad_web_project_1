
/*== RESPONSIVE MENU ======================  */
document.getElementById("btn-menu").addEventListener("click", function(){
    let nav = document.getElementsByTagName("nav")[0];
    nav.classList.toggle("collapsed");
});

/*== MODALS ===============================  */

// Function to open a modal by id
function showModal(id) {
    document.getElementById(id).classList.add("modal-oppened");
    document.body.classList.add("modal-oppened");

    //close menu responsive if oppened
    let nav = document.getElementsByTagName("nav")[0];
    nav.classList.remove("collapsed");

    return false;
}

// Function to close modals
function closeModal() {
    document.body.classList.remove("modal-oppened");
    let elements = document.getElementsByClassName("modal-oppened");
    for (i = 0; i < elements.length; i++) {
        elements[i].classList.remove("modal-oppened");
    }
}

// Create modal overlay background
let modalBg = document.createElement('div');
modalBg.setAttribute("id", "modal-bg");
modalBg.setAttribute("class", "modal-bg");
modalBg.addEventListener("click", closeModal);
document.body.appendChild(modalBg);

// Create modal close buttons
let listModals = document.getElementsByClassName("modal");
for (i = 0; i < listModals.length; i++) {
    let closeButton = document.createElement('button');
    closeButton.setAttribute("class", "btn-close-modal");

    //add icon
    let closeButtonIcon = document.createElement('i');
    closeButtonIcon.setAttribute("class", "fas fa-times");
    closeButton.appendChild(closeButtonIcon);
    
    //add event click
    closeButton.addEventListener("click", closeModal);
    listModals[i].appendChild(closeButton);
}