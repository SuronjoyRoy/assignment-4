
// function canPay(changeArray, totalDue) {
//     const totalChipsPrice = changeArray.reduce((sum, price) => sum + price, 0);
  
//     if (totalChipsPrice >= totalDue) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   const chipPrices = [1, 2, 5]; 
//   const chipPrice = 8; 
  
//   console.log(canPay(chipPrices, chipPrice)); 
  
//   const emptyArray = []; 
//   const anotherChipPrice = 0; 
  
//   console.log(canPay(emptyArray, anotherChipPrice));
  
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