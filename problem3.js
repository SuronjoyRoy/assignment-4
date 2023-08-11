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