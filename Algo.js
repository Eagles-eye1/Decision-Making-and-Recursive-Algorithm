function isLeapYear(year) {
    switch (true) {
        case year % 400 === 0:
            return true;
        case year % 100 === 0:
            return false;
        case year % 4 === 0:
            return true;
        default:
            return false;
    }
}

// Example usage:
const year = 2024;
if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}



function ticketPrice(age) {
    switch (true) {
        case age <= 12:
            return 10;
        case age >= 13 && age <= 17:
            return 15;
        default:
            return 20;
    }
}

// Example usage:
const age = 16;
const price = ticketPrice(age);
console.log(`The ticket price for a ${age}-year-old is $${price}.`);




//RECURSION

function isPalindrome(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Base case
    if (s.length <= 1) {
        return true;
    }

    // Recursive case
    if (s[0] === s[s.length - 1]) {
        return isPalindrome(s.slice(1, -1));
    } else {
        return false;
    }
}

// Example usage:
const text = "A man, a plan, a canal, Panama";
if (isPalindrome(text)) {
    console.log(`'${text}' is a palindrome.`);
} else {
    console.log(`'${text}' is not a palindrome.`);
}




function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage:
const n = 6;
const answer = fibonacci(n);
console.log(`The ${n}th Fibonacci number is ${answer}.`);




function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else if (exponent < 0) {
        return 1 / power(base, -exponent);
    } else {
        return base * power(base, exponent - 1);
    }
}

// Example usage:
const base = 2;
const exponent = 3;
const result = power(base, exponent);
console.log(`${base} to the power of ${exponent} is ${result}.`);



