/** @format */

// Get the form element
const form = document.querySelector("form");

// Add event listener to the form submit event
form.addEventListener("submit", function (sendFeedback) {
  sendFeedback.preventDefault(); // prevent form submission

  // Get the input values from the form
  const fullName = document.querySelector("#fullname").value;
  const email = document.querySelector("#email").value;
  const feedback = document.querySelector("#review").value;

  // Do something with the input values (e.g., send them to a server)
  console.log("Full Name: ", fullName);
  console.log("Email Address: ", email);
  console.log("Feedback: ", feedback);

  // Reset the form
  form.reset();
});
