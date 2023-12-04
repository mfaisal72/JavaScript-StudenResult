// Get marks for each subject
var subject1 = parseFloat(prompt("Out of 100","Enter marks for Subject Islamiat:"));
var subject2 = parseFloat(prompt("Out of 100","Enter marks for Subject English:"));
var subject3 = parseFloat(prompt("Out of 100","Enter marks for Subject Urdu:"));
var subject4 = parseFloat(prompt("Out of 100","Enter marks for Subject Physics:"));
var subject5 = parseFloat(prompt("Out of 100","Enter marks for Subject Computer:"));

// Calculate total marks
var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;

// Calculate percentage
var percentage = (totalMarks / 500) * 100;

// Determine grade based on percentage
var grade;
if (percentage >= 90) {
  grade = 'A'; 
} else if (percentage >= 80) {
  grade = 'B';
} else if (percentage >= 70) {
  grade = 'C';
} else if (percentage >= 60) {
  grade = 'D';
} else {
  grade = 'F';
}

// Display the results on alert
var resultMessage =
    "Total Marks-500: " +
    "\nMarks Obtained: " + totalMarks +
    "\nPercentage: " + percentage.toFixed(2) + "%" +
    "\nGrade: " + grade;

alert(resultMessage);


// Display the results on the web page
var resultMessage =
  "<p><strong>Marks Obtained:</strong> " + totalMarks + "</p>" +
  "<p><strong>Percentage:</strong> " + percentage.toFixed(2) + "%</p>" +
  "<p><strong>Grade:</strong> " + grade + "</p>";

// Create a div to display the result
var resultDiv = document.createElement('div');
resultDiv.id = 'result';
resultDiv.innerHTML = resultMessage;

// Append the result div to the body
document.body.appendChild(resultDiv);