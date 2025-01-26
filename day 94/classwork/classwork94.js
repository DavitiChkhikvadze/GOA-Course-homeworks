function main() {
    if (prompt("First time here? (yes/no):").toLowerCase() === 'yes') {
        const email = prompt("Email:");
        const password = prompt("Password:");
        const age = prompt("Age:");
        const gender = prompt("Gender:");

        console.log("\nRegistration successful!\n");
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
        console.log(`Age: ${age}`);
        console.log(`Gender: ${gender}`);
    } else {
        console.log("\nWelcome back!");
    }
}

main();
