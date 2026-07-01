// Open Workshop Popup
const workshopPopup =
    document.getElementById("workshopPopup");

const workshopButtons =
    document.querySelectorAll(
        ".workshop-register-btn"
    );

workshopButtons.forEach(button => {

    button.addEventListener("click", e => {

        e.preventDefault();

        workshopPopup.style.display = "flex";

        workshopCurrentStep = 0;

        showWorkshopStep(0);

    });

});

// Workshop Step Navigation
let workshopCurrentStep = 0;

const workshopSteps =
    document.querySelectorAll(".workshop-step");

const workshopIndicators =
    document.querySelectorAll(
        "#workshopPopup .step"
    );

function showWorkshopStep(index) {

    workshopSteps.forEach(step => {

        step.classList.remove("active-step");

    });

    workshopIndicators.forEach(step => {

        step.classList.remove("active");

    });

    workshopSteps[index].classList.add(
        "active-step"
    );

    workshopIndicators[index].classList.add(
        "active"
    );

    document.getElementById(
        "workshopPrevBtn"
    ).style.display =
        index === 0
            ? "none"
            : "inline-block";

}

// Saturday Validation
document
.getElementById("workshopDate")
.addEventListener("change", function () {

    const date =
        new Date(this.value);

    if (date.getDay() !== 6) {

        alert(
            "Please select a Saturday."
        );

        this.value = "";

    }

});

// Next Button
document
.getElementById("workshopNextBtn")
.addEventListener("click", () => {

    if (workshopCurrentStep === 0) {

        if (
            !document
                .getElementById("orgName")
                .value.trim() ||

            !document
                .getElementById("contactPerson")
                .value.trim() ||

            !document
                .getElementById("contactNumber")
                .value.trim() ||

            !document
                .getElementById("contactEmail")
                .value.trim()
        ) {

            alert(
                "Please fill all required fields."
            );

            return;

        }

    }

    if (workshopCurrentStep === 1) {

        if (
            !document
                .getElementById("workshopDate")
                .value
        ) {

            alert(
                "Please select a date."
            );

            return;

        }

    }

    if (
        workshopCurrentStep <
        workshopSteps.length - 1
    ) {

        workshopCurrentStep++;

        showWorkshopStep(
            workshopCurrentStep
        );

    }

});

// Previous Button
document
.getElementById("workshopPrevBtn")
.addEventListener("click", () => {

    if (workshopCurrentStep > 0) {

        workshopCurrentStep--;

        showWorkshopStep(
            workshopCurrentStep
        );

    }

});

// Close Button
document
.getElementById("workshopCloseBtn")
.addEventListener("click", () => {

    workshopPopup.style.display = "none";

});

// Clear fields when the page loads
window.addEventListener("load", () => {

    document.getElementById("orgName").value = "";
    document.getElementById("contactPerson").value = "";
    document.getElementById("contactNumber").value = "";
    document.getElementById("contactEmail").value = "";
    document.getElementById("workshopDate").value = "";

});

// Reset the workshop popup when it closes
document
.getElementById("workshopCloseBtn")
.addEventListener("click", () => {

    workshopPopup.style.display = "none";

    document.getElementById("orgName").value = "";
    document.getElementById("contactPerson").value = "";
    document.getElementById("contactNumber").value = "";
    document.getElementById("contactEmail").value = "";
    document.getElementById("workshopDate").value = "";

    workshopCurrentStep = 0;
    showWorkshopStep(0);

});