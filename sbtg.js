/*
    /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
*/
let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let submitBtn = document.getElementById("submit");
let messageRef = document.getElementById("message-ref");

let isUsernameValid = () => {             
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;            //username should be greater than 3 letters
  return usernameRegex.test(usernameRef.value);
};

let isPasswordValid = () => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;     //password should be atleast 8 characters long,
  return passwordRegex.test(passwordRef.value);                                      //with atleast 1 no., 1 special symbol,1 upper and 1 lower case
};                                                                                  

usernameRef.addEventListener("input",()=>{
  if(!isUsernameValid()){
    messageRef.style.visibility= "hidden";
    usernameRef.style.cssText= "border-color: #fe2e2e; background-color: #ffc2c2";} 
    else{
    usernameRef.style.cssText= "border-color: #34bd34; background-color: #c2ffc2";}
});

passwordRef.addEventListener("input",()=>{
  if(!isPasswordValid()){
    messageRef.style.visibility= "hidden";
    passwordRef.style.cssText= "border-color: #fe2e2e; background-color: #ffc2c2";} 
    else{
    passwordRef.style.cssText= "border-color: #34bd34; background-color: #c2ffc2";}
});

submitBtn.addEventListener("mouseover",()=>{
  if(!isUsernameValid() || !isPasswordValid()){
    let containerRect = document.querySelector(".container").getBoundingClientRect();     //position of submit btn
    let submitRect = submitBtn.getBoundingClientRect();
    let offset = submitRect.left - containerRect.left;
    console.log(offset);
   
    if (offset<=100) {
      submitBtn.style.transform="translateX(16.25em)";}     //If the button is on the left hand side.. move it to the the right hand side
    else {submitBtn.style.transform="translateX(0)";}
  }
});

submitBtn.addEventListener("click",()=>{
  messageRef.style.visibility="visible";
});