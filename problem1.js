
function cubeNumber(number){
    if(typeof number !=='number'){
       return "Please enter a number" 
    }
    return number*number*number;
}

const number=4;
const numberResult=cubeNumber(number);
console.log(numberResult);
