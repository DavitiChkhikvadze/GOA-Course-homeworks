function createStudentMap(studentList) {
    const studentMap = new Map();
    studentList.forEach(student => {
        const [name, score] = student;
        studentMap.set(name, score);
    });
    return studentMap;
}

function removeDuplicates(array) {
    return [...new Set(array)];
}

function increaseScores(originalMap, increment = 5) {
    const newMap = new Map();
    originalMap.forEach((score, name) => {
        newMap.set(name, score + increment);
    });
    return newMap;
}

const students = [
    ["Daviti", 60],
    ["Deme", 75],
    ["Tsotne", 80]
];

const studentMap = createStudentMap(students);
console.log("Original Map:", studentMap);

const uniqueArray = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log("Unique Array:", uniqueArray);

const updatedMap = increaseScores(studentMap);
console.log("Updated Map:", updatedMap);