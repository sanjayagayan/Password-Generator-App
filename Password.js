let passlength = document.querySelector(".container .password-length input");
let options = document.querySelectorAll(".container .checkboxes-box div input");
let generateBtn = document.querySelector(".container .generate-btn");
let password = document.querySelector(".container .password");
let copyBtn = document.querySelector(".container .copy-btn");
let copieMsg = document.querySelector(".container .copy-btn span");
let copiedIcon = document.querySelector(".container .copy-btn i");


const characters = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}

let getPassLengthValue = () => {
    document.querySelector(".length-value").innerHTML = passlength.value;
}

let generatePassword = () => {
    let strongPassword = "";
    let randomPassword = "";
    let passwordLength = passlength.value;
    options.forEach((option)=>{
        if(option.checked){
            strongPassword += characters[option.id];
        }
    })
    for(let i=0; i < passwordLength; i++){
        randomPassword += strongPassword[Math.floor(Math.random() * strongPassword.length)];
    }

    password.innerHTML = randomPassword;
}

let copyPassword = () => {
    navigator.clipboard.writeText(password.innerHTML);
    copiedIcon.style.display = "none";
    copieMsg.style.display = "block";
    setTimeout(() => {
        copiedIcon.style.display = "block";
        copieMsg.style.display = "none";
    },1000);
}

generatePassword();


copyBtn.addEventListener("click",copyPassword);
generateBtn.addEventListener("click",generatePassword);
passlength.addEventListener("input",getPassLengthValue);

