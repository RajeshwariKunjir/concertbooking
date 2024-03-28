function attemptLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Dummy authentication (replace with your authentication logic)
    if (username === "Rajeshwari" && password === "password") {
        // Store the username in localStorage
        localStorage.setItem("username", username);

        // Redirect to home page after successful login
        window.location.href = "/html/index.html"; // Adjust the path to your home page
    } else {
        document.getElementById("error-message").innerText = "Invalid username or password.";
    }
}

// Check if the user is already logged in
window.onload = function () {
    var username = localStorage.getItem("username");

    if (username) {
        // Update your UI to display the logged-in user's information
        alert("Welcome back, " + username + "!");
        // You can update your UI or perform other actions here
    }
};

// Check if the user is already logged in
window.onload = function () {
    var username = localStorage.getItem("username");
    var userWelcomeElement = document.getElementById("user-welcome");

    if (username) {
        // Display a welcome message with the user's name
        userWelcomeElement.innerHTML = "<p>" + username + "!</p>";
    }
};


//slider actions
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

// Enable left and right arrow keys for navigation
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
        plusSlides(-1);
    } else if (e.key === "ArrowRight") {
        plusSlides(1);
    }
});

// Automatic slideshow
setInterval(function() {
    plusSlides(1);
}, 5000); // Change slide every 5 seconds

document.querySelector('.slideshow-container').addEventListener('mouseleave', function() {
    setTimeout(function() {
        document.querySelector('.prev').style.opacity = 0;
        document.querySelector('.next').style.opacity = 0;
    }, 1000); // You can adjust the delay time (in milliseconds) based on your preference
});

// Add these event listeners to show the buttons when hovering
document.querySelector('.prev').addEventListener('mouseover', function() {
    document.querySelector('.prev').style.opacity = 1;
});

document.querySelector('.next').addEventListener('mouseover', function() {
    document.querySelector('.next').style.opacity = 1;
});


// Function to change the icon dynamically
function changeIcon(iconName) {
    var iconSpan = document.querySelector('.material-symbols-outlined');
    iconSpan.innerHTML = iconName;
}

// Example usage: Change the icon to "local_fire_department"
changeIcon('local_fire_department');

//Form alert 
document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('booking-form');

    // Add event listener for form submission
    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const mobile = document.getElementById('mobile').value.trim();

        // Validate form fields
        if (name === '' || email === '' || mobile === '') {
            alert('Please fill in all fields.');
            return; // Prevent further execution if any field is empty
        }

        // Validate email format
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return; // Prevent further execution if email is invalid
        }

        // Validate mobile number format
        if (!isValidMobile(mobile)) {
            alert('Please enter a 10-digit mobile number.');
            return; // Prevent further execution if mobile number is invalid
        }

        // Display success message with form values
        alert(`Booking confirmed!\nName: ${name}\nEmail: ${email}\nMobile Number: ${mobile}`);

        // You can also submit the form to a server using AJAX if needed
        // Example: submitForm(name, email, mobile);

        // Clear form fields
        bookingForm.reset();
    });
});

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate mobile number format
function isValidMobile(mobile) {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
}




//Login
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    // Add event listener for form submission
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Assuming the login is successful, you can set a flag to indicate the user is logged in
        const isLoggedIn = true;

        // Redirect to the root page (home page) if login is successful
        if (isLoggedIn) {
            window.location.href = '/html/index.html'; // Change the URL to your home page
        }
    });
});