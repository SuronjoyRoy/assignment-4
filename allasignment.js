function cubeNumber(number){
    if(typeof number !=='number'){
       return "Please enter a number" 
    }
    return number*number*number;
}


function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Invalid input";
    }
    if (string1.includes(string2)) {
        return true;
    }
    
    return false;
}


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
  


function findAddress(obj){

    let street = obj.street;
    let house = obj.house || '__';
    let society =obj.society || '__';

    return `${street},${house},${society}`;

}



function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || changeArray.length === 0) {
        return "Invalid Input";
    }
  
    let totalChange = changeArray.reduce((sum, value) => sum + value, 0);
  
    return totalChange >= totalDue;
  }
  
  