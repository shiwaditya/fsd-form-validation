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
    $('#state').change(function () {
        const selectedState = $(this).val();
        const cities = citiesByState[selectedState];
        const cityDropdown = $('#city');

        cityDropdown.empty();
        if (cities) {
            $.each(cities, function (index, city) {
                cityDropdown.append($('<option></option>').text(city));
            });
        }
    });

    // Form validation
    $('#validationForm').submit(function (event) {
        const name = $('#name').val();
        const phone = $('#phone').val();
        const email = $('#email').val();
        const state = $('#state').val();
        const city = $('#city').val();
        const country = $('#country').val();
        const pincode = $('#pincode').val();

        if (!name || !phone || !email || !state || !city || !country || !pincode) {
            alert('All fields are mandatory');
            event.preventDefault(); // Prevent form submission
        }
    });
});
