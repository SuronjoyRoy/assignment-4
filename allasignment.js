// Problems first
function cubeNumber(number){
    if(typeof number !=='number'){
       return "Please enter a number" 
    }
    return number*number*number;
}

const number=4;
const numberResult=cubeNumber(number);
console.log(numberResult);


// Problems second

function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Invalid input";
    }
    if (string1.includes(string2)) {
        return true;
    }
    
    return false;
}

console.log(matchFinder("John Doe", "ohn")); 
console.log(matchFinder("JavaScript", "Code")); 
console.log(matchFinder("Peter Parker", "Pen")); 
console.log(matchFinder("Peter Parker", "pet")); 
console.log(matchFinder(123, "abc"));


// Problems thired

function sortMaker(arr) {
    
    if (!Array.isArray(arr)) {
      return "Invalid Input";
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "number") {
        return "Invalid Input";
      }
    }
  
    if (arr[0] === arr[1]) {
      return equal;
    }
  
    return arr.slice().sort((a, b) => b - a);
  }
  
  console.log(sortMaker([2, 3]));
  console.log(sortMaker([4, 2]));

  // Problems 4

function findAddress(obj){

    let street = obj.street;
    let house = obj.house || '__';
    let society =obj.society || '__';

    return `${street},${house},${society}`;

}

const adress1={
  street: 10,
  house: "15A",
  society: "Earth Perfect"
}
console.log(findAddress(adress1));
const adress2={
  street: 10,
  society: "Earth Perfect"
}
console.log(findAddress(adress2));
const adress3={
  street: 10,
}
console.log(findAddress(adress3));

// Problems fifth


function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || changeArray.length === 0) {
        return "Invalid Input";
    }
  
    let totalChange = changeArray.reduce((sum, value) => sum + value, 0);
  
    return totalChange >= totalDue;
  }

console.log(canPay([1, 2, 5], 10)); 
console.log(canPay([1, 5, 5], 10)); 
console.log(canPay([2, 3, 4], 9)); 
console.log(canPay([], 5)); 
console.log(canPay("not an array", 5)); 
  
  