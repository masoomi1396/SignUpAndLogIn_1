const signUpTab = document.getElementById('signUpTab');
const signUpButton = document.getElementById('singUpButton');
const signUpBodyForm = document.getElementById('signUpBodyForm');
const logInTab = document.getElementById('logInTab');
const logInButton = document.getElementById('logInButton');
const logInBodyForm = document.getElementById('logInBodyForm');
const inputsOfForm = document.querySelectorAll('input');
const labelsOfForm = document.querySelectorAll('label');

logInTab.addEventListener("click",(event)=>{

    event.preventDefault();

    signUpBodyForm.classList.remove('flex');
    signUpBodyForm.classList.add('hidden');
    signUpBodyForm.classList.remove('animationClass');
    logInBodyForm.classList.add('flex');
    logInBodyForm.classList.remove('hidden');
    logInBodyForm.classList.add('animationClass');

    logInTab.classList.add("bg-color-blue-green");
    logInTab.classList.add("text-white");
    logInTab.classList.remove("bg-color-gray-background");
    logInTab.classList.remove("text-color-gray-text");

    signUpTab.classList.remove("bg-color-blue-green");
    signUpTab.classList.remove("text-white");
    signUpTab.classList.add("bg-color-gray-background");
    signUpTab.classList.add("text-color-gray-text");

})
signUpTab.addEventListener("click",(event)=>{
    event.preventDefault();

    signUpBodyForm.classList.add('flex');
    signUpBodyForm.classList.remove('hidden');
    signUpBodyForm.classList.add('animationClass');
    logInBodyForm.classList.remove('flex');
    logInBodyForm.classList.add('hidden');
    logInBodyForm.classList.remove('animationClass');

    logInTab.classList.remove("bg-color-blue-green");
    logInTab.classList.remove("text-white");
    logInTab.classList.add("bg-color-gray-background");
    logInTab.classList.add("text-color-gray-text");

    signUpTab.classList.add("bg-color-blue-green");
    signUpTab.classList.add("text-white");
    signUpTab.classList.remove("bg-color-gray-background");
    signUpTab.classList.remove("text-color-gray-text");
})
inputsOfForm.forEach((input,i)=>{
    input.addEventListener("focus",()=>{
        labelsOfForm[i].classList.remove('text-2xl');
        labelsOfForm[i].classList.remove('text-color-gray-text');
        labelsOfForm[i].classList.add('text-lg');
        labelsOfForm[i].classList.add('text-white');
        labelsOfForm[i].classList.add('transition');
        labelsOfForm[i].classList.add('duration-300');
        labelsOfForm[i].classList.add('translate-y-12');
    })
})


