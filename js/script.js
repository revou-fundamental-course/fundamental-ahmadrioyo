document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact');
    const nameInput = document.getElementById('name');

    // Fill the name field with "Hi [Name]"
    nameInput.addEventListener('input', function() {
        if (nameInput.value) {
            nameInput.value = 'Hi ' + nameInput.value;
        }
    });

    // Form validation
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        if (email && phone && message) {
            alert('Form submitted successfully!');
        } else {
            alert('Please fill out all fields.');
        }
    });
});

// slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function validateForm(){
    const nama = document.forms["message-form"]["name-input"].value
    const birthDate = document.forms["message-form"]["birth-date"].value
    const gender = document.forms["message-form"]["gender"].value
    const messages = document.forms["message-form"]["messages"].value

    if(nama == "" || birthDate == "" || gender == "" || messages == ""){
        alert("Tidak boleh ada yang kosong");

        return false;
    }

    setSenderUi(nama, birthDate, gender, messages);

    return false;
}
function setName (name){
    document.getElementById("name").innerHTML = name;
    document.getElementById("error-name").innerHTML = "";
}
function setSenderUi(name, birthDate, gender, messages){
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}