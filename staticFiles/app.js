const navbarMenu = document.querySelector(".navbar .links")
const menuBtn = document.querySelector(".menu-btn");
const hideMenuBtn = document.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .botom-link a");
const LOGIN = document.querySelector(".LOG");
const SIGNUP = document.querySelector(".SIGNUP");



menuBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
})

hideMenuBtn.addEventListener("click", () => menuBtn.click());


showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
        // console.log(link.id);
    })
});

const loginFunc=async (event)=>{
    event.preventDefault();
    const emailLog = document.querySelector(".loginEmail");
    const passLog = document.querySelector(".loginPass");
    console.log(emailLog.value);
    console.log(passLog.value);
    try{
        const result =await axios.post('http://localhost:3000/api/login',{email:emailLog.value ,password:passLog.value});
        if(result.status===200)
        alert('Login Successful');
        else
        alert("Login Failed");
    }catch(err){
        console.log(err);
        alert('Login Failed');
    }
}

const signupFunc=async (event)=>{
    event.preventDefault();
    const emailSign = document.querySelector(".signEmail");
    const passSign = document.querySelector(".signPass");
    const result =await axios.post('http://localhost:3000/api/signup',{email:emailSign.value,password:passSign.value});
    if(result.status===200)
    alert('SignUp Successful');
    else
    alert('SignUp Failed');
}

LOGIN.addEventListener('click',loginFunc);
SIGNUP.addEventListener('click',signupFunc);
