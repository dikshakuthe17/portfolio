/* Toggle icon navbar */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* Scoll section active link */

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec  => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });

    /* Sticky navbar */

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*Remove active class on navbar */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/* Scroll reveal animation */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box. .contact form', { origin:'button' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

/* Typed js */
const typed = new Typed('.typing', {
    strings: ["Full Stack Developer", "Frontend Developer", "Backend Developer", "Web Developer"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});


// SMTP

function Send(){

    var name = document.getElementById("nam").value;
    var email = document.getElementById("mail").value;
    var mobile = document.getElementById("num").value;
    var subject = document.getElementById("sub").value;
    var message = document.getElementById("mssg").value;

    var body = "Name: " + name + "<br/> Email: " + email + "<br/> Mobile No: " + mobile + "<br/> Subject: " + subject + "<br/> Message: " + message ;

    console.log(body);


   
    Email.send({
        Host : "smtp.mailendo.com",
         Username : "piyushkasture120@gmail.com",
         Password : "7BFAF985820F7B2577A3A98BA0FDEFBC399F",
         To : 'kuthediksha123@gmail.com',
         From : "piyushkasture120@gmail.com",
         Subject : subject,
         Body : body
     }).then(
       message => {
        if(message=='OK'){
            swal("Successfull", "Message Sent Successfully", "success");
        }
        else{
            swal("Something Wrong", "Please try again..", "error");

        }
       }
     );
}


