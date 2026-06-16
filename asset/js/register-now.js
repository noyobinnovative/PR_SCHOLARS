{/* <script> */}
    /* ========= Elements ========= */
    
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closeBtn");
    const bookButtons = document.querySelectorAll(".book-btn");
    
    const contactPopup = document.getElementById("contactPopup");
    const contactOkBtn = document.getElementById("contactOkBtn");
    
    const steps = document.querySelectorAll(".form-step");
    const indicators = document.querySelectorAll(".step");
    
    let currentStep = 0;
    let selectedBoard = "";
    
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

        // Hide Previous button on first step
        document.getElementById("prevBtn").style.display =
        index === 0 ? "none" : "inline-block";
    }
    
    /* ========= Open Main Popup ========= */
    
    bookButtons.forEach(button => {

        button.addEventListener("click", () => {
    
            const parentSection = button.closest("[id]");
    
            selectedBoard = parentSection.id; // cbse, icse, etc.
    
            popup.style.display = "flex";
    
            document
                .querySelectorAll(".form-step input, .form-step select")
                .forEach(field => {
                    field.value = "";
                });
    
            currentStep = 0;
            showStep(currentStep);
    
        });
    
    });
    
    /* ========= Close Main Popup ========= */
    
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
    /* --------- */
    const subjectOptions = {
    "Grade 6": [
        "Mathematics",
        "Science",
        "English",
        "Social Science"
    ],
    "Grade 7": [
        "Mathematics",
        "Science",
        "English",
        "Social Science"
    ],
    "Grade 8": [
        "Mathematics",
        "Science",
        "English",
        "Social Science"
    ],
    "Grade 9": [
    "Mathematics",
    "Science",
    "English",
    "Social Science"
    ],
    "Grade 10": [
    "Mathematics",
    "Science",
    "English",
    "Social Science"
    ],
    "Grade 11": [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English"
    ],
    "Grade 12": [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English"
    ]
};

const icseSubjects = {
    "Grade 6": [
        "Mathematics",
        "Science",
        "English",
        "Social Science"
    ],
    "Grade 7": [
        "Mathematics",
        "Science",
        "English",
        "Social Science"
    ],
    "Grade 8": [
        "Mathematics",
        "Science",
        "English",
        "Social Science"
    ],
    "Grade 9": [
        "Mathematics",
        "Science",
        "English",
        "History",
        "Civics",
        "Geography",
        "Hindi",
        "Kannada",
        "Economics"
    ],
    "Grade 10": [
        "Mathematics",
        "Science",
        "English",
        "History",
        "Civics",
        "Geography",
        "Hindi",
        "Kannada",
        "Economics"
    ],
    "Grade 11": [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Economics",
        "Accounts",
        "Commerce",
        "History",
        "Political Science",
        "Geography",
        "English"
    ],
    "Grade 12": [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Economics",
        "Accounts",
        "Commerce",
        "History",
        "Political Science",
        "Geography",
        "English"
    ]
};
/*---for slot selection----*/
const slotSelect = document.getElementById("slot");

document.getElementById("mode").addEventListener("change", () => {

    const grade = document.getElementById("grade").value;
    const subject = document.getElementById("subject").value;
    const mode = document.getElementById("mode").value;

    slotSelect.innerHTML =
        '<option value="">Choose your Slot</option>';

    // Grade 9 Maths Online
    // Grade 9 Mathematics Online
if (
    grade === "Grade 9" &&
    subject === "Mathematics" &&
    mode === "Online"
) {

    const slots = [
        "Monday (4:30 PM - 5:30 PM)",
        "Wednesday (4:30 PM - 5:30 PM)",
        "Friday (4:30 PM - 5:30 PM)"
    ];

    slots.forEach(slot => {
        const option = document.createElement("option");
        option.value = slot;
        option.textContent = slot;
        slotSelect.appendChild(option);
    });
}

// Grade 10 Mathematics Online
if (
    grade === "Grade 10" &&
    subject === "Mathematics" &&
    mode === "Online"
) {

    const slots = [
        "Tuesday (4:30 PM - 5:30 PM)",
        "Thursday (4:30 PM - 5:30 PM)",
        "Saturday (4:30 PM - 5:30 PM)"
    ];

    slots.forEach(slot => {
        const option = document.createElement("option");
        option.value = slot;
        option.textContent = slot;
        slotSelect.appendChild(option);
    });
}

// Grade 12 Mathematics Online
if (
    grade === "Grade 12" &&
    subject === "Mathematics" &&
    mode === "Online"
) {

    const slots = [
        "Monday (6:00 PM - 7:30 PM)",
        "Wednesday (6:00 PM - 7:30 PM)",
        "Friday (6:00 PM - 7:30 PM)"
    ];

    slots.forEach(slot => {
        const option = document.createElement("option");
        option.value = slot;
        option.textContent = slot;
        slotSelect.appendChild(option);
    });
}
});
        /* ========= Next Button ========= */

document.getElementById("nextBtn").addEventListener("click", () => {

// Validate current step
const currentFields =
    steps[currentStep].querySelectorAll("input, select");

let valid = true;

currentFields.forEach(field => {
    if (field.hasAttribute("required") && !field.value.trim()) {
        valid = false;
    }
});

if (!valid) {
    alert("Please fill all required fields");
    return;
}

// const selectedSubject =
//     document.getElementById("subject").value;

// const selectedMode =
//     document.getElementById("mode").value;

    

// Mode Step Logic
// Mode Step Logic
const selectedGrade =
    document.getElementById("grade").value;

const selectedSubject =
    document.getElementById("subject").value;

const selectedMode =
    document.getElementById("mode").value;

    if (currentStep === 3) {

    // ICSE - always show contact popup
    if (selectedBoard === "icse") {
        contactPopup.style.display = "flex";
        return;
    }

// Grade 6,7,8
if (
    ["Grade 6", "Grade 7", "Grade 8"].includes(selectedGrade)
) {
    contactPopup.style.display = "flex";
    return;
}

// Grade 9 & 10
if (
    selectedGrade === "Grade 9" ||
    selectedGrade === "Grade 10"
) {

    // Mathematics + Offline
    if (
        selectedSubject === "Mathematics" &&
        selectedMode === "Offline"
    ) {
        contactPopup.style.display = "flex";
        return;
    }

    // Any non-Mathematics subject
    if (selectedSubject !== "Mathematics") {
        contactPopup.style.display = "flex";
        return;
    }

    // Mathematics + Online
    // Continue to Slot step
}

// Grade 11
if (selectedGrade === "Grade 11") {
    contactPopup.style.display = "flex";
    return;
}

// Grade 12
if (selectedGrade === "Grade 12") {

    // Mathematics + Offline
    if (
        selectedSubject === "Mathematics" &&
        selectedMode === "Offline"
    ) {
        contactPopup.style.display = "flex";
        return;
    }

    // Physics, Chemistry, Biology, English
    if (selectedSubject !== "Mathematics") {
        contactPopup.style.display = "flex";
        return;
    }

    // Mathematics + Online
    // Continue to Slot step
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
    
    /* ========= Contact Popup OK ========= */
    
    contactOkBtn.addEventListener("click", () => {
    
        // Close second popup
        contactPopup.style.display = "none";
    
        // Close main popup
        popup.style.display = "none";
    
        // Reset form
        document
            .querySelectorAll(".form-step input, .form-step select")
            .forEach(field => {
                field.value = "";
            });
    
        currentStep = 0;
        showStep(currentStep);
    
    });
    // </script>
    // <!--  -->
    // <script>
    const gradeSelect = document.getElementById("grade");
    const subjectSelect = document.getElementById("subject");
    
    gradeSelect.addEventListener("change", () => {
    
        const grade = gradeSelect.value;
    
        subjectSelect.innerHTML =
            '<option value="">Choose your Subject</option>';
    
        const subjects =
            selectedBoard === "icse"
                ? icseSubjects[grade]
                : subjectOptions[grade];
    
        if (subjects) {
    
            subjects.forEach(subject => {
    
                const option = document.createElement("option");
    
                option.value = subject;
                option.textContent = subject;
    
                subjectSelect.appendChild(option);
    
            });
    
        }
    
    });
    // </script>