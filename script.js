//toggle icon navbar 

//scroll sections
let sections= document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll=() => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    });
    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY>100);
}

// Initialize EmailJS with your public key
emailjs.init("I9TWFgywEcwOgfGIg");

// Handle the form submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(contactForm);

    // Send form data to EmailJS
    emailjs.send("service_ef08wpz", "template_1blp9k9", {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        subject: formData.get("subject"),
        message: formData.get("message"),
    })
    .then(() => {
        alert("Your message has been sent successfully!");
        contactForm.reset();  // Reset the form after submission
    })
    .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send your message. Please try again.");
    });
});
