function findIdenticalElements(array1, array2) {
    return array1.filter(element => array2.includes(element));
  }
  
  const arr1 = [1, 2, 3, 4];
  const arr2 = [3, 4, 5, 6];
  const identicalElements = findIdenticalElements(arr1, arr2);
  console.log(identicalElements); 
  