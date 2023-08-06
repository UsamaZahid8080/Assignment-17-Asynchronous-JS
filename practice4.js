//Practice # 4
let allowedPassword = ["password","password123","pass1234"];

function Login(password){
    return allowedPassword.includes(password);
};

function passwordCheck(password){
    return new Promise((resolve, reject) => {
        if(Login(password)){
            resolve({isValid : true})
        }else{
            reject({isValid : false})
        }
    })
};
function passwordChecker(password){
     passwordCheck(password).then((result)=>{
        console.log(`This password is  ${result.isValid}`);
    })
    .catch((error)=>{
        console.log(`This password is  ${error.isValid}`);
    })
};

passwordChecker("usama12345");
passwordChecker("usama123");
passwordChecker("usama");