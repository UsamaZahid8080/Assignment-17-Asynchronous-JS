//practice 13.2
let startPromise = new Promise((resolve, reject) => {
    resolve("Start Counting");
});
function counter(value){
    console.log(value);
};
startPromise.then((value)=>{
    counter(value);
    return 1;
}).then((value)=>{
    counter(value);
    return 2;
}).then((value)=>{
    counter(value);
    return 3;
}).then((value)=>{
    counter(value);
})