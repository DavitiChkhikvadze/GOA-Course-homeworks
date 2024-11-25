let A = true
let B = false
let C = false

console.log((A&&!B)||(B&&!A))
console.log((B&&C)&&(A||B))
console.log((A&&!C)||(B&&!A)||(B&&!C))

function vowelOrCons(ch){
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
        console.log('this character is vowel')
    } else {
        console.log('this character is consonant')
    }
}

vowelOrCons('j')
vowelOrCons('i')

function maxProduct(nums) {
    let maxProduct = Number.MIN_SAFE_INTEGER;
    let pair = [];
  
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        let product = nums[i] * nums[j];
        if (product > maxProduct) {
          maxProduct = product;
          pair = [nums[i], nums[j]];
        }
      }
    }
  
    return { pair, maxProduct };
}

const nums = [3, 5, -7, 9];
const result = maxProduct(nums);
console.log(`The numbers are ${result.pair[0]} and ${result.pair[1]} with a product of ${result.maxProduct}`);
