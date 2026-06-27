document.addEventListener("DOMContentLoaded", function () {
        
    const dropdownToggle = document.querySelector(".dropdown-toggle");

    dropdownToggle.addEventListener("click", function (e) {

        if (window.innerWidth <= 991) {
            e.preventDefault();

            this.parentElement.classList.toggle("active");
        }

    });

});