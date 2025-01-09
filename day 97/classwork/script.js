document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userForm');
    const resultDiv = document.getElementById('result');
    const formContainer = document.getElementById('formContainer');
    const output = document.getElementById('output');
    const clearDataButton = document.getElementById('clearData');

    if (localStorage.getItem('userInfo')) {
        displayUserInfo();
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;

        const userInfo = { email, password, age, gender };
        localStorage.setItem('userInfo', JSON.stringify(userInfo));

        displayUserInfo();
    });

    function displayUserInfo() {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));

        output.innerHTML = `
            <strong>Email:</strong> ${userInfo.email}<br>
            <strong>Password:</strong> ${userInfo.password}<br>
            <strong>Age:</strong> ${userInfo.age}<br>
            <strong>Gender:</strong> ${userInfo.gender}
        `;

        resultDiv.classList.remove('hidden');
        formContainer.classList.add('hidden');
    }

    clearDataButton.addEventListener('click', function () {
        localStorage.removeItem('userInfo');
        resultDiv.classList.add('hidden');
        formContainer.classList.remove('hidden');
        form.reset();
    });
});

