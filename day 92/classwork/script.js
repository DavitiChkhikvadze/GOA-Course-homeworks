function groupsJoint(sets) {
    const resultSet = new Set();
    
    for (const set of sets) {
      for (const value of set) {
        resultSet.add(value); 
      }
    }
    
    return resultSet;
  }
  
  const result = groupsJoint([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]);
  console.log(result);
  
  function symbolFrequency(str) {
    const frequencyMap = new Map();
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i]; 
  
      if (frequencyMap.has(char)) {
        frequencyMap.set(char, frequencyMap.get(char) + 1); 
      } else {
        frequencyMap.set(char, 1);
      }
    }
  
    return frequencyMap;
  }
  
  const res = symbolFrequency("hello");
  console.log(res);

  function invertedMap(originalMap) {
    const inverted = new Map();
    
    for (const [key, value] of originalMap) { 
      inverted.set(value, key);
    }
  
    return inverted; 
  }
  
  const res1 = invertedMap(new Map([['a', 1], ['b', 2], ['c', 1]]));
  console.log(res1);

  function symetricalDivision(setA, setB) {
    const result = new Set(); 
  
    for (const value of setA) { 
      if (!setB.has(value)) { 
        result.add(value); 
      }
    }
  
    for (const value of setB) {
      if (!setA.has(value)) { 
        result.add(value); 
      }
    }
  
    return result;
  }
  
  const res2 = symetricalDivision(new Set([1, 2, 3]), new Set([3, 4, 5]));
  console.log(res2);
  