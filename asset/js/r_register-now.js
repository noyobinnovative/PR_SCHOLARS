/* ========= Elements ========= */

const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const registerButtons = document.querySelectorAll(".register-btn");

const contactPopup = document.getElementById("contactPopup");
const contactOkBtn = document.getElementById("contactOkBtn");

const steps = document.querySelectorAll(".form-step");
const indicators = document.querySelectorAll(".step");

let currentStep = 0;
// let selectedCourse = "";

/* ========= Course Subjects ========= */

const courseSubjects = {
    nda: ["Mathematics", "GAT"],
    cds: ["Mathematics", "GK"],
    afcat: ["Numerical & Reasoning Ability"],
    inet: ["Numerical & Reasoning Ability"],
    acc: ["Numerical & Reasoning Ability"],
    ssb: ["Coaching"]
};
let selectedCourse = "";

/* ========= Subject Checkbox Container ========= */
const subjectContainer = document.getElementById("subjectContainer");

/* ========= Step Navigation ========= */

function showStep(index) {

    steps.forEach(step => {
        step.classList.remove("active-step");
    });

    indicators.forEach(step => {
        step.classList.remove("active");
    });

    steps[index].classList.add("active-step");
    indicators[index].classList.add("active");

    document.getElementById("prevBtn").style.display =
        index === 0 ? "none" : "inline-block";
}

/* ========= Open Popup ========= */



registerButtons.forEach(button => {

    button.addEventListener("click", (e) => {

        e.preventDefault();

        const parentSection = button.closest("[id]");
        selectedCourse = parentSection.id;

        subjectContainer.innerHTML = "";

        if (courseSubjects[selectedCourse]) {

            courseSubjects[selectedCourse].forEach(subject => {

                subjectContainer.innerHTML += `
                    <label class="subject-option">
                        <input type="checkbox" name="subject" value="${subject}">
                        ${subject}
                    </label>
                `;

            });

        }

        popup.style.display = "flex";

        currentStep = 0;
        showStep(currentStep);

    });

});

/* ========= Close Popup ========= */

closeBtn.addEventListener("click", () => {

    popup.style.display = "none";

    document
        .querySelectorAll(".form-step input, .form-step select")
        .forEach(field => {
            field.value = "";
        });

    currentStep = 0;
    showStep(currentStep);

});

/* ========= Slot Logic ========= */
const subjectSlots = {

    nda: {

        "Mathematics": [
            "8:30 PM - 10:00 PM (Monday, Wednesday & Friday)",
            // "2:30 PM - 4:00 PM (Monday, Wednesday & Friday)"
        ],

        "GAT": [
            "9:00 AM - 12:00 PM (Sunday)",
            // "1:00 PM - 3:00 PM (Friday)"
        ]

    },

    cds: {

        "Mathematics": [
            "8:30 PM - 10:00 PM (Tuesday, Thursday & Saturday)"
        ],

        "GK": [
            "9:00 AM - 12:00 PM (Sunday)"
        ]

    },

    afcat: {

        "Numerical & Reasoning Ability": [
            "6:30 PM - 8:00 PM (Tuesday, Thursday & Saturday)"
        ]

    },

    inet: {

        "Numerical & Reasoning Ability": [
            "6:30 PM - 8:00 PM (Tuesday, Thursday & Saturday)"
        ]

    },

    acc: {

        "Numerical & Reasoning Ability": [
            "6:30 PM - 8:00 PM (Tuesday, Thursday & Saturday)"
        ]

    },

    ssb: {

        "Coaching": [
            "9:00 PM - 12:30 PM (Monday to Friday)"
        ]

    }

};

const slotContainer =
    document.getElementById("slotContainer");

document.getElementById("mode").addEventListener("change", () => {

    const mode =
        document.getElementById("mode").value;

    slotContainer.innerHTML = "";

    if (mode !== "Online") return;

    const selectedSubjects =
        document.querySelectorAll(
            'input[name="subject"]:checked'
        );

    selectedSubjects.forEach(subjectCheckbox => {

        const subject =
            subjectCheckbox.value;

        const slots =
            subjectSlots[selectedCourse]?.[subject] || [];

        if (slots.length > 0) {

            slotContainer.innerHTML +=
                `<h5>${subject}</h5>`;

            slots.forEach(slot => {

                slotContainer.innerHTML += `
                <label class="slot-option">
                    <input
                        type="radio"
                        name="slot_${subject}"
                        value="${slot}">
                    <span>${slot}</span>
                </label>
            `;

            });

        }

    });

});
/* ========= Next Button ========= */

document.getElementById("nextBtn").addEventListener("click", () => {

    const currentFields =
        steps[currentStep].querySelectorAll("input, select");

    let valid = true;

    currentFields.forEach(field => {

        if (
            field.hasAttribute("required") &&
            !field.value.trim()
        ) {
            valid = false;
        }

    });

    if (!valid) {

        alert("Please fill all required fields");
        return;

    }

    const selectedMode =
        document.getElementById("mode").value;

    /* Step 3 (Mode Step) */
/* Step 3 (Mode Step) */
if (currentStep === 2) {

    if (selectedMode === "Offline") {

        contactPopup.style.display = "flex";
        return;

    }

}

/* Step 4 (Slot Step) */
if (currentStep === 3) {

    const selectedSubjects =
        document.querySelectorAll(
            'input[name="subject"]:checked'
        );

    let allSlotsSelected = true;

    selectedSubjects.forEach(subjectCheckbox => {

        const subject = subjectCheckbox.value;

        const selectedSlot =
            document.querySelector(
                `input[name="slot_${subject}"]:checked`
            );

        if (!selectedSlot) {
            allSlotsSelected = false;
        }

    });

    if (!allSlotsSelected) {

        alert(
            "Please select a slot for every selected subject."
        );

        return;
    }

}

    if (currentStep < steps.length - 1) {

        currentStep++;
        showStep(currentStep);

    }

});

/* ========= Previous Button ========= */

document.getElementById("prevBtn").addEventListener("click", () => {

    if (currentStep > 0) {

        currentStep--;
        showStep(currentStep);

    }

});

/* ========= Contact Popup ========= */

contactOkBtn.addEventListener("click", () => {

    contactPopup.style.display = "none";
    popup.style.display = "none";

    document
        .querySelectorAll(".form-step input, .form-step select")
        .forEach(field => {
            field.value = "";
        });

    currentStep = 0;
    showStep(currentStep);

});

/* ========= Initial Load ========= */

showStep(0);