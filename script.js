function validateSyntax() {
    //set parameters
    let input = document.getElementById('petInput').value;
    let num = /^\d{4}$/g;
    let char = /[^a-zA-Z]/g;
    // Validation logic goes here
    let result = document.getElementById('result'); // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        if (input.startsWith('pet_') && num && char) {
            result.innerHTML = "Valid Syntax 🟢"
        }
         else {result.innerHTML = "Invalid Syntax 🔴"};
    }


