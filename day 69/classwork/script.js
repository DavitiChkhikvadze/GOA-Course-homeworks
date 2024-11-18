class Account {
    constructor(name, surname, email, phone, age) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.age = age;
    }
}

const accounts = [];

document.getElementById('accountForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;

    const newAccount = new Account(name, surname, email, phone, age);
    accounts.push(newAccount);

    displayAccounts();
    this.reset();
});

function displayAccounts() {
    const accountsContainer = document.getElementById('accountsContainer');
    accountsContainer.innerHTML = '';

    accounts.forEach((account, index) => {
        accountsContainer.innerHTML += `
            <div class="account">
                Account ${index + 1}: ${account.name} ${account.surname} - ${account.email} - ${account.phone} - ${account.age} წლის
            </div>
        `;
    });
}