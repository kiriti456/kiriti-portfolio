const openmenuicon = document.querySelector(".open-menu");
const closemenuicon = document.querySelector(".close-menu")
const navMenu = document.querySelector(".nav-menu");

openmenuicon.addEventListener("click", mobileMenu);
closemenuicon.addEventListener("click", mobileMenu);

function mobileMenu() {
    openmenuicon.classList.toggle("active");
    closemenuicon.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    openmenuicon.classList.remove("active");
    closemenuicon.classList.remove("active")
    navMenu.classList.remove("active");
}

const hoverableSection = document.querySelector(".hoverable-section");

function sendEmail() {
    emailjs.init("mNvUMFi0FO_rUHFZv");

    const templateParams = {
        from_name: document.getElementById("from_name").value,
        send_message: document.getElementById("send_message").value
    };

    if(templateParams.from_name.length > 0 && templateParams.send_message.length > 0){
        emailjs.send("service_pbgcibb", "template_3hcarnd", templateParams)
            .then(function (response) {
                console.log("Email sent successfully:", response);
                alert("Message sent successfully")
            }, function (error) {
                console.log("Email failed to send:", error);
            });
            document.getElementById("from_name").value = "";
            send_message: document.getElementById("send_message").value = "";
    }
    else{
        alert("Please enter your name and message");
    }
}
