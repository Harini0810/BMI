document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height from cm to meters

    // Validate input
    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        document.getElementById('result').innerText = 'Please enter valid weight and height.';
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);
    let category = '';

    // Determine BMI category
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    // Display result
    document.getElementById('result').innerText = `Your BMI is ${bmi.toFixed(1)} (${category})`;
});
