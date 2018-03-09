// #1 Play FizzBuzz

let fizzBuzz = () => {
  let i = 1;
  while (i <= 100) {
    if (i % 3 !== 0 && i % 5 !== 0) {
      console.log(i);
      i++;
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
      i++;
    } else if (i % 3 === 0) {
      console.log("Fizz");
      i++;
    } else {
      console.log("Buzz");
      i++;
    }
  }
}
fizzBuzz();

// FizzBuzz II


let FizzBuzz = (end) => {
  let arr = [0,0,"Fizz", 0, "Buzz", "Fizz", 0,0,"Fizz", "Buzz", 0, "Fizz", 0, 0, "FizzBuzz"];
  let m = 1;
  while (m < end) {
    for (let i = 0; i < 15 && m <= end; i++) {
      if (arr[i] === 0) {
        console.log(m);
        m++;
      } else {
        console.log(arr[i]);
        m++;
      }
    }
  }
}
FizzBuzz(100);


// #2 Write in Pig Latin

//turns a sentence into pig latin

let pigLatin = (str) => {
  return pigLatinator2(findWords(str));

}

// takes a single word and turns it into pig latin

let pigLatinator = (strn) => {
  let newString ='';
  // makes everything lowercase
  let str = strn.toLowerCase();
  // checks if the first three letters are non vowels
  if (isVowel(str[0]) === false && isVowelOrY(str[1])===false && isVowelOrY(str[2])===false) {
    // checks if it ends with punctuation
    if (isLetter(str[str.length-1]) === true){
      return str.substring(3,str.length) + str[0] + str[1] + str[2] + 'ay';
    } else {
      return str.substring(3,str.length - 1) + str[0] + str[1] + str[2] + 'ay' + str[str.length -1];
    }
    //checks if it starts with two non vowels
  } else if (isVowel(str[0]) === false && isVowelOrY(str[1])===false){
    //checks if it ends with punctuation
    if (isLetter(str[str.length-1]) === true){
      return str.substring(2,str.length) + str[0] + str[1] + 'ay';
    } else {
      return str.substring(2,str.length - 1) + str[0] + str[1] + 'ay' + str[str.length -1];
    }
    //checks if it starts with one consonant
  } else if (isVowel(str[0]) === false) {
    //punctuation check
      if (isLetter(str[str.length - 1]) === true){
      return str.substring(1,str.length+1) + str[0] + 'ay';
    } else {
      return str.substring(1,str.length - 1) + str[0] + 'ay' + str[str.length - 1];
    }

    } else {
      //starts with vowel and punctuation check
        if (isLetter(str[str.length - 1]) === true){
          return str + 'way';
    } else {
        return str.substring(0,str.length - 1) + 'way' + str[str.length -1];
    }
  }
}

// is it a vowel?
let isVowel = (letter) => {
  let vowels=['a','i','e','o','u','A','E','I','O','U'];
  let i = 0;
  while (i < 6) {
    if (letter === vowels[i]) {
      return true;
    } else {
      i++;
    }
  }
  return false;
}

//is it a vowel or y (if its not the first letter)
let isVowelOrY = (letter) => {
  let vowels=['a','i','e','o','u','y','A','E','I','O','U','Y'];
  let i = 0;
  while (i < 12) {
    if (letter === vowels[i]) {
      return true;
    } else {
      i++;
    }
  }
  return false;
}

// is it a letter?

let isLetter = (letter) => {
  let letters=['a','i','e','o','u','A','E','I','O','U','b','c','d','f','g','h','i','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z','B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z'];
  let i = 0;
  while (i < letters.length) {
    if (letter === letters[i]) {
      return true;
    } else {
      i++;
    }
  }
  return false;
}

// breaks an array into a substring

let findWords = (str) =>{
  let i = 0;
  let words = []
  let k = 0;
  while (i < str.length) {
    if (str[i] === ' ') {
      let word = str.substring(k,i);
      words.push(word);
      i++;
      k = i;
    } else if (i === str.length - 1) {
      let newWord = str.substring(k,i+1);
      words.push(newWord);
      i++;
    } else {
      i++;
    }
  }return words;
}

//takes an array and splits into a new string that is in pig Latin

let pigLatinator2 = (arr) => {
  let i = 0;
  newString =''
  while (i < arr.length) {
    if (i < arr.length - 1){
      newString = newString + (pigLatinator(arr[i])) + ' ';
      i++;
  } else {
    newString += pigLatinator(arr[i]);
    i++;
  }
  }
  return newString;
}



// # 3 palindromes

let isPalindrome = (str) => {
  if (str === reverse(str)) {
    return true;
  } else {
    return false;
  }

}
function reverse(strng){
  let newString = '';
  for(let i = strng.length; i >= 0; i--){
    newString = newString + strng.charAt(i);
  }return newString;
}

// Palindrome solution stolen from danielle

// if text is single letter, return false
if(text.length == 1) {
    return false;
}

let endPointer = text.length - 1;
// iterate through string, 'i' will act as start pointer
for (let i = 0; i < text.length; i++) {
    // if start pointer doesn't match end pointer, return false
    if (text[i] != text[endPointer]) {
        return false;
    }
    // shift endPointer
    endPointer--;
}

// string is palindrome, return true
return true;
}
