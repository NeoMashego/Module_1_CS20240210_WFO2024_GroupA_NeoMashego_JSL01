function validateSyntax() {
    //set parameters
    let input = document.getElementById('petInput').value;
    let parameter = /^pet_\d{4}[a-zA-Z]+$/g;
    // Validation logic goes here
    let result = document.getElementById('result'); // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        if (input.match(parameter)) {
            result.innerHTML = "Valid Syntax 🟢"
        }
         else {result.innerHTML = "Invalid Syntax 🔴"};
    }


