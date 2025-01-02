function generateEmail(firstName, lastName, age) {
    const randomNum = Math.floor(Math.random() * 1000);
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}${age}${randomNum}@gmail.com`;
}

function addPerson() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const idNumber = document.getElementById('idNumber').value;
    const height = document.getElementById('height').value;
    const description = document.getElementById('description').value;
    
    if (!firstName || !lastName || !age || !idNumber || !height || !description) {
        alert('Please fill all fields');
        return;
    }

    const email = generateEmail(firstName, lastName, age);

    const personDiv = document.createElement('div');
    personDiv.classList.add('person');
    personDiv.innerHTML = `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>ID:</strong> ${idNumber}</p>
        <p><strong>Height:</strong> ${height} cm</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Email:</strong> ${email}</p>
    `;

    document.getElementById('peopleList').appendChild(personDiv);

    document.getElementById('personForm').reset();
}