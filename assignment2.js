
// Problems 2

// function matchFinder(string1, string2){
// if(typeof string1=='string' || typeof string2 =='string'){
// return true;
// }
// else{
//     return false;
// }
// }

// console.log(matchFinder("John Doe", "ohn"));
// console.log(matchFinder("JavaScript", "Code"));  

// function matchFinder(number){
//     if(typeof number !=='number'){
//         return true;
//     }
//     else if(number<=0){
//         return false;
//     }
// }
// console.log(matchFinder(0))

function matchFinder(string1, string2) {
    // দুটি স্ট্রিং সম্পর্কে যাচাই করা যাবে কিনা
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Invalid input";
    }

    // প্রথম স্ট্রিং এর কোন অংশে দ্বিতীয় স্ট্রিং পাওয়া গেলে true রিটার্ণ
    if (string1.includes(string2)) {
        return true;
    }
    
    return false;
}

// টেস্ট কেস
console.log(matchFinder("John Doe", "ohn")); // true
console.log(matchFinder("JavaScript", "Code")); // false
console.log(matchFinder("Peter Parker", "Pen")); // false
console.log(matchFinder("Peter Parker", "pet")); // false
console.log(matchFinder(123, "abc")); // "Invalid input"

