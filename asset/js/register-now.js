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

            const subjectLabel = document.getElementById("subjectLabel");
            const subjectHeading = document.getElementById("subjectHeading");
            const subjectSelect = document.getElementById("subject");
            const step3Label = document.getElementById("step3Label");

            const examContainer = document.getElementById("examContainer");

            if (
                selectedBoard === "law-entrance" ||
                selectedBoard === "management" ||
                selectedBoard === "medical" ||
                selectedBoard === "engineering"
            ) {
            
                step3Label.textContent = "Exam";
                subjectHeading.textContent = "Select Exam";
                subjectLabel.innerHTML = 'Exam <span>*</span>';
            
                subjectSelect.style.display = "none";
                subjectSelect.required = false;
                examContainer.style.display = "block";
            
                examContainer.innerHTML = "";
            
                examOptions[selectedBoard].forEach(exam => {
            
                    examContainer.innerHTML += `
                        <label class="exam-option">
                            <input
                                type="checkbox"
                                name="exam"
                                value="${exam}">
                            ${exam}
                        </label>
                    `;
            
                });
            
            } else {
            
                step3Label.textContent = "Subject";
                subjectHeading.textContent = "Select Subject";
                subjectLabel.innerHTML = 'Subject <span>*</span>';
            
                subjectSelect.style.display = "block";
                subjectSelect.required = true;
                examContainer.style.display = "none";
            
                subjectSelect.innerHTML =
                    '<option value="">Choose your Subject</option>';
            }
    
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

const examOptions = {
    "law-entrance": [
        "CLAT UG",
        "CLAT PG",
        "AILET",
        "SLAT",
        "LSAT",
        "CUET PG",
        "MH CET Law"
    ],

    "management": [
        "CAT",
        "XAT",
        "CMAT",
        "MAT",
        "SNAP",
        "NMAT",
        "GMAT",
        "MAH MBA CET",
        "Karnataka PGCET"
    ],

    "medical": [
        "NEET UG",
        "NEET PG",
        "NEET MDS",
        "NEET SS",
        "INI CET",
        "AIAPGET",
        "FMGE"
    ],

    "engineering": [
        "JEE Main",
        "JEE Advanced",
        "GATE",
        "MH-CET",
        "KCET",
        "WBJEE",
        "COMEDK UGET",
        "BITSAT",
        "VITJEE",
        "SRMJEE",
        "MET"
    ]
};

const planPrices = {
    "Grade 9": {
        "Regular": {
            label: "Regular (Monthly)",
            price: 750
        },
        "Gold": {
            label: "Gold (Quarterly)",
            price: 2100
        },
        "Platinum": {
            label: "Platinum (One Time)",
            price: 5300
        }
    },

    "Grade 10": {
        "Regular": {
            label: "Regular (Monthly)",
            price: 900
        },
        "Gold": {
            label: "Gold (Quarterly)",
            price: 2500
        },
        "Platinum": {
            label: "Platinum (One Time)",
            price: 5800
        }
    },

    "Grade 12": {
        "Regular": {
            label: "Regular (Monthly)",
            price: 1100
        },
        "Gold": {
            label: "Gold (Quarterly)",
            price: 3200
        },
        "Platinum": {
            label: "Platinum (One Time)",
            price: 8500
        }
    }
};

// pricing
function loadPlans() {

    const grade = document.getElementById("grade").value;
    const planSelect = document.getElementById("plan");

    planSelect.innerHTML =
        '<option value="">Choose your Plan</option>';

    if (planPrices[grade]) {

        Object.entries(planPrices[grade]).forEach(([plan, details]) => {

            const option = document.createElement("option");

            option.value = plan;

            option.textContent =
                `${details.label} - Rs ${details.price}`;

            planSelect.appendChild(option);

        });

    }
}
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
        // "Monday (4:30 PM - 5:30 PM)",
        // "Wednesday (4:30 PM - 5:30 PM)",
        // "Friday (4:30 PM - 5:30 PM)"
        "4:30 pm - 5:30 pm (Monday, Wednesday & Friday)"
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
        // "Tuesday (4:30 PM - 5:30 PM)",
        // "Thursday (4:30 PM - 5:30 PM)",
        // "Saturday (4:30 PM - 5:30 PM)"
        "4:30 pm - 6:00 pm (Tuesday, Thursday & Saturday)"
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
        // "Monday (6:00 PM - 7:30 PM)",
        // "Wednesday (6:00 PM - 7:30 PM)",
        // "Friday (6:00 PM - 7:30 PM)"
        "6:30 pm - 7:30 pm (Monday, Wednesday & Friday)"
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

        if (examOptions[selectedBoard]) {
            contactPopup.style.display = "flex";
            return;
        }
        // ICSE & State Board - always show contact popup
        if (
            selectedBoard === "icse" ||
            selectedBoard === "statebrd"
        ) {
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


// Skip Grade step for Entrance Exam sections
if (
    currentStep === 0 &&
    (
        selectedBoard === "law-entrance" ||
        selectedBoard === "management" ||
        selectedBoard === "medical" ||
        selectedBoard === "engineering"
    )
) {
    currentStep = 2; // Subject step (index starts from 0)
    showStep(currentStep);
    return;
}


if (
    currentStep === 2 &&
    examOptions[selectedBoard]
) {

    const selectedExams =
        document.querySelectorAll(
            'input[name="exam"]:checked'
        );

    if (selectedExams.length === 0) {
        alert("Please select at least one exam");
        return;
    }
}

if (currentStep === 4) {
    loadPlans();
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