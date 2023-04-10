const form = document.getElementById('form');

function handleClick() {
    // Get the form values
    const name = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('mail').value;
    const phoneNumber = document.getElementById('number').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
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

    // Update the JSON file
    // fetch('/Users/kavyabaltha/Desktop/632_proj/users/newusers.json')
    //     .then(response => response.json())
    //     .then(data => {
    //         data.users.push(user);
    //         return JSON.stringify(data);
    //     })
    //     .then(json => {
    //         fetch('/Users/kavyabaltha/Desktop/632_proj/users/newusers.json', {
    //             method: 'PUT',
    //             body: json
    //         });
    //     });

    console.log(user);
}



