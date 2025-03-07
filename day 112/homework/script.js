class StringHelper {
    static reverse(str) {
        return str.split('').reverse().join('');
    }

    static compareStrings(str1, str2) {
        let matchCount = 0;
        const minLength = Math.min(str1.length, str2.length);
        
        for (let i = 0; i < minLength; i++) {
            if (str1[i] === str2[i]) {
                matchCount++;
            }
        }
        return matchCount;
    }

    static isValid(str) {
        return /^[A-Za-z0-9_]+$/.test(str);
    }
}

class MathHelper {
    static PI = 3.141592653589793;
    static E = 2.718281828459045;
    static DEFAULT_PRECISION = 3;

    static factorial(n) {
        if (n < 0) return undefined;
        if (n === 0) return 1;
        return n * this.factorial(n - 1);
    }

    static endsWithFiveOrZero(num) {
        return num % 10 === 0 || num % 10 === 5;
    }

    static roundToNearestFiveOrZero(num) {
        return Math.round(num / 5) * 5;
    }

    static roundToPrecision(num, precision = MathHelper.DEFAULT_PRECISION) {
        return parseFloat(num.toFixed(precision));
    }
}

console.log(StringHelper.reverse("hello")); 
console.log(StringHelper.compareStrings("apple", "apply"));
console.log(StringHelper.isValid("test_123"));

console.log(MathHelper.factorial(5));
console.log(MathHelper.endsWithFiveOrZero(25));
console.log(MathHelper.roundToNearestFiveOrZero(27)); 
console.log(MathHelper.roundToPrecision(3.14159)); 