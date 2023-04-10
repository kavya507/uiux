// const form = document.getElementById('form');
//
// function handleClick() {
//     // Get the form values
//     const name = document.getElementById('fname').value;
//     const lastName = document.getElementById('lname').value;
//     const email = document.getElementById('mail').value;
//     const phoneNumber = document.getElementById('number').value;
//     const age = document.getElementById('age').value;
//     const gender = document.querySelector('input[name="gender"]:checked').value;
//     const licenseNumber = document.getElementById('lnumber').value;
//     const vinNumber = document.getElementById('vnumber').value;
//     const activeSince = document.getElementById('active').value;
//
//     // Create a new user object
//     const user = {
//         name: name,
//         last_name: lastName,
//         email: email,
//         phone_number: phoneNumber,
//         age: age,
//         gender: gender,
//         license_number: licenseNumber,
//         vin_number: vinNumber,
//         active_since: activeSince
//     };
//
//
//
//     console.log(user);
// }
//
//
//


const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the form values
  const name = document.getElementById('fname').value;
  const lastName = document.getElementById('lname').value;
  const email = document.getElementById('mail').value;
  const phoneNumber = document.getElementById('number').value;
  const age = document.getElementById('age').value;
  const gender = document.querySelector('input[name="male"]:checked').value;
  const licenseNumber = document.getElementById('lnumber').value;
  const vinNumber = document.getElementById('vnumber').value;
  const activeSince = document.getElementById('active').value;

  // Create a new user object
  const user = {
    name: name,
    last_name: lastName,
    email: email,
    phone_number: phoneNumber,
    age: age,
    gender: gender,
    license_number: licenseNumber,
    vin_number: vinNumber,
    active_since: activeSince
  };

  // Make an HTTP POST request to the server with the user data
  fetch('/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
      .then(response => {
        if (response.ok) {

          console.log('Form data saved successfully');
        } else {
          console.error('Error saving form data');
        }
      })
      .catch(error => {
        console.error(error);
      });
});


