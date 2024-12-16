const students = new Map();

function addOrUpdateScore(name, subject, score) {
    if (!students.has(name)) {
        students.set(name, new Map());
    }
    const subjects = students.get(name);
    subjects.set(subject, score);
}

function calculateAverage(subjects) {
    const scores = Array.from(subjects.values());
    const total = scores.reduce((sum, score) => sum + score, 0);
    return (total / scores.length).toFixed(2);
}

function updateStudentTable() {
    const tableBody = document.querySelector('#student-table tbody');
    tableBody.innerHTML = '';

    const rankings = Array.from(students.entries()).map(([name, subjects]) => {
        return { name, average: parseFloat(calculateAverage(subjects)) };
    });

    rankings.sort((a, b) => b.average - a.average);

    rankings.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.average}</td>
        `;
        tableBody.appendChild(row);
    });
}

document.getElementById('student-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('student-name').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const score = parseFloat(document.getElementById('score').value);

    if (name && subject && !isNaN(score)) {
        addOrUpdateScore(name, subject, score);
        updateStudentTable();

        e.target.reset();
    }
});