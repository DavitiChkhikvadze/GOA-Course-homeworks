function generateTable() {
    const num = document.getElementById("numberInput").value;
    const output = document.getElementById("tableOutput");
    if (!num) return;

    let tableHTML = "<h3>Multiplication Table:</h3>";
    for (let i = 1; i <= 10; i++) {
        tableHTML += `<p>${num} × ${i} = ${num * i}</p>`;
    }
    output.innerHTML = tableHTML;
}