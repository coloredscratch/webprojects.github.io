// Select the button and textbox
const alertButton = document.getElementById('alertButton');
const textbox = document.getElementById('textbox');

// Add an event listener to the button
alertButton.addEventListener('click', function() {
    // Get the value entered in the textbox
    const textValue = textbox.value;
    
    // Display the value in an alert
    alert('You entered: ' + textValue);
});
