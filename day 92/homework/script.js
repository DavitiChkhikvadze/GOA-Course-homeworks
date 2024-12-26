function unitedSets(setsArray) {
    return setsArray.reduce((union, set) => {
        set.forEach(value => union.add(value));
        return union;
    }, new Set());
}

function symmetricalDiff(setA, setB) {
    const diff = new Set();
    setA.forEach(value => {
        if (!setB.has(value)) diff.add(value);
    });
    setB.forEach(value => {
        if (!setA.has(value)) diff.add(value);
    });
    return diff;
}

function isSubSet(subSet, superSet) {
    for (let value of subSet) {
        if (!superSet.has(value)) {
            return false;
        }
    }
    return true;
}

function symbolCount(str) {
    const frequencyMap = new Map();
    for (let char of str) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }
    return frequencyMap;
}

function invertedMap(map) {
    const inverted = new Map();
    map.forEach((value, key) => {
        inverted.set(value, key);
    });
    return inverted;
}

function keysOfMax(map) {
    let maxVal = -Infinity;
    const keys = [];
    map.forEach((value, key) => {
        if (value > maxVal) {
            maxVal = value;
            keys.length = 0; 
            keys.push(key);
        } else if (value === maxVal) {
            keys.push(key);
        }
    });
    return keys;
}

console.log(unitedSets([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])])); 
console.log(symmetricalDiff(new Set([1, 2, 3]), new Set([3, 4, 5])));
console.log(isSubSet(new Set([1, 2]), new Set([1, 2, 3])));
console.log(symbolCount("hello"));
console.log(invertedMap(new Map([["a", 1], ["b", 2], ["c", 1]])));
console.log(keysOfMax(new Map([["a", 5], ["b", 3], ["c", 5]])));