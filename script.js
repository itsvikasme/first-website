// This is a sample JavaScript file

// Add event listener to submit button
document.querySelector('input[type="submit"]').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent form submission
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  alert('Form submitted successfully!');
});