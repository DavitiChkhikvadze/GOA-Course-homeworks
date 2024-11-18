// Function to validate the form
function validateForm() {
    // Get values of the input fields
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    // Reference to the error message container
    let errorMessage = document.getElementById('error-message');
    
    // Clear previous error message
    errorMessage.textContent = '';

    // Check if any field is empty using if and else
    if (fullName === '' || email === '' || password === '') {
        // Display error message if fields are empty
        errorMessage.textContent = 'All fields are required.';
    } else {
        // If all fields are filled, submit the form or process data
        // everything that user has entered in form, will be displayed in console
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Password:', password);
    }
}