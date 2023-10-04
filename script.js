$(document).ready(function () {
    const citiesByState = {
        "Maharashtra": [
            "Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad",
            "Solapur", "Amravati", "Kolhapur", "Sangli", "Satara"
        ],
        "Karnataka": [
            "Bangalore", "Mysore", "Hubli", "Belgaum", "Mangalore",
            "Gulbarga", "Davanagere", "Shimoga", "Bellary", "Tumkur"
        ],
        "Gujarat": [
            "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar",
            "Jamnagar", "Junagadh", "Gandhinagar", "Anand", "Bharuch"
        ]
    };

    // Populate city dropdown based on selected state
    $("#state").change(function () {
        const selectedState = $(this).val();
        const cityDropdown = $("#city");
        cityDropdown.empty(); // Clear previous options

        if (selectedState === "") {
            cityDropdown.append("<option value=''>Select City</option>");
        } else {
            citiesByState[selectedState].forEach(function (city) {
                cityDropdown.append(new Option(city, city));
            });
        }
    });

    $("#registrationForm").submit(function (e) {
        e.preventDefault();

        // Form validation logic here
        var username = $("#username").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var confirmPassword = $("#confirmPassword").val();

        // Check if username is empty
        if (!username.trim()) {
            alert("Username cannot be empty.");
            return;
        }

        // Check if phone number is valid (10 digits)
        if (!/^[0-9]{10}$/.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        // Check if email address is valid
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Check if password meets the criteria
        if (password.length < 7 || !/[A-Z]/.test(password) || !/[$&@#]/.test(password)) {
            alert("Password must be at least 7 characters and contain at least one capital letter and one special character ($, &, @, #).");
            return;
        }

        // Check if password and confirm password match
        if (password !== confirmPassword) {
            alert("Password and Confirm Password must match.");
            return;
        }

        // Form is valid, you can proceed with submission
        alert("Form submitted successfully!");
    });

});
