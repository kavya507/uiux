// Get the userID of the selected driver from the URL query string
const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams)
// const userID = urlParams.get('userID');
const userID = sessionStorage.getItem('userID');
console.log("USER ID",userID)

// Get the driver details from the server using the userID


fetch('../newusers.json')
  .then(response => response.json())
  .then(data => {
      const driver = data.find(driver => driver.userID === Number(userID));
      console.log("DRIVER,",driver)

      // Assuming the date is stored as a string in the JSON object
const dateStr = driver.active;

// Convert the date string to a Date object
const date = new Date(dateStr);

// Format the date string in a desired format
const formattedDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;

// Set the value of the date input field


    // Set the values of the input fields to the corresponding driver details
    document.getElementById('fname').value = driver.name;
    document.getElementById('lname').value = driver.last_name;
    document.getElementById('mail').value = driver.email;
    document.getElementById('number').value = driver.phone_number;
    document.getElementById('age').value = driver.age;
    document.getElementById('female').checked = driver.gender === 'female';
    document.getElementById('male').checked = driver.gender === 'male';
    document.getElementById('lnumber').value = driver.lnumber;
    document.getElementById('vnumber').value = driver.vnumber;
    document.getElementById('active').value = driver.active;
  })
  .catch(error => console.error(error));
