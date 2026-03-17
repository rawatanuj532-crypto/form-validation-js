
// let form = document.querySelector("form");
// let email=document.querySelector("#email");
// let password = document.querySelector("#password");
// let result = document.querySelector(".finalresult");



// form.addEventListener("submit",function(dets){

//       dets.preventDefault();

//     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

//     let emailans=emailPattern.test(email.value);
//     let passans= passwordPattern.test(password.value);

//     if(!emailans){
//         document.querySelector("#emailError").textContent="Email is incorect";
//     }

//     if(!passans){
//          document.querySelector("#passError").textContent="Password is incorect";
//     }

//     if (!emailans|| !passans){

//     }
//     else{
//         result.textContent="Form submitted successfully";
//     }
// })

let form = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let result = document.querySelector(".finalresult");

form.addEventListener("submit", function (dets) {

    dets.preventDefault(); // ✅ yahi hona chahiye

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    let emailans = emailPattern.test(email.value);
    let passans = passwordPattern.test(password.value);

    // reset
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passError").textContent = "";
    result.textContent = "";

    if (!emailans) {
        document.querySelector("#emailError").textContent = "Email is incorrect";
    }

    if (!passans) {
        document.querySelector("#passError").textContent = "Password is incorrect";
    }

    if (emailans && passans) {
        result.textContent = "Form submitted successfully ✅";
        result.style.display="block";
    }
});