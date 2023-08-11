
//     const properties = ["street", "house", "society"];
//     let result = "";

//     for (const prop of properties) {
//         if (inputObject.hasOwnProperty(prop)) {
//             result += inputObject[prop] + ",";
//         } else {
//             result += "__,";
//         }
//     }

//     return result.slice(0, -1); // Remove the trailing comma
// }

// // Test cases
// const input1 = { street: 10, house: "15A", society: "Earth Perfect" };
// console.log(findAddress(input1));  // Output: 10,15A,Earth Perfect

// const input2 = { street: 10, society: "Earth Perfect" };
// console.log(findAddress(input2));  // Output: 10,__,Earth Perfect

// const input3 = { street: 10 };
// console.log(findAddress(input3));  // Output: 10,__,__ 

function findAddress(object){

    let street = object.street;
    let house = object.house || '__';
    let society =object.society || '__';

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