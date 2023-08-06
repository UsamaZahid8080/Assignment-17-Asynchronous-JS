
//practice # 13.1
function greet(fullName){
let greeting = `Hello ${fullName.join(" ")}`;
console.log(greeting);
};
function processName(fullNameString,callBack){
    let nameArray = fullNameString.split(" ");
setTimeout(() => {
    callBack(nameArray);
}, 2000);
};
let name = "Usama Butt";
processName(name,greet);