// celsius to foregin
function celsiusForein(value) {
  return value * (9 / 5) + 32;
}

console.log(celsiusForein(60));

// sum

numbers = [2, 3, 4, 5, 6];
function sum(num) {
  sumA = 0;
  for (let b = 0; b < num.length; b += 1) {
    sumA = sumA + num[b];
  }
  return sumA;
}
console.log(sum(numbers));

// max

function maxValue(num) {
  if(num.length>1){
      maxOne = num[0];
      for (let a of num) {
      if (a > maxOne) {
      maxOne = a;
    }
  }
  }
 
  return maxOne;
}

console.log(maxValue([1, 2, 3, 4, 5, 6]));

// even
function even(num) {
  const evenNumbers = [];
  for (let a of num) {
    if (a % 2 == 0) {
      evenNumbers.push(a);
    }
  }
  return evenNumbers;
}

console.log(even([1, 2, 3, 4, 5, 6]));

// string reversal
function reverse(str) {
  let rev = "";
  for (let a of str) {
    rev = a + rev;
  }
  return rev;
}
console.log(reverse("sir"));

// Grade Calculator

function grade(num) {
  if (num > 90 && num <= 100) {
    return "A grade";
  } else if (num > 80 && num <= 90) {
    return "B grade";
  } else if (num > 70 && num <= 80) {
    return "C grade";
  } else if (num > 60 && num <= 70) {
    return "D grade";
  }
}

console.log(grade(93));

// Vowel Counter

function vowelCounter(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u", "A", "I", "O", "U", "E"];
  for (let a of str) {
    if (vowels.includes(a)) {
      count = count + 1;
    }
  }
  return count;
}

console.log(vowelCounter("damodar"));
