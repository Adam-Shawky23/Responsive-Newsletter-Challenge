const regex = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const email=document.getElementById('email');
const form = document.querySelector("form");
const error = document.querySelector(".error");
const input = document.querySelector("input");
const mainContainer = document.querySelector(".container");
const container = document.querySelector('.inner_container');
const successContainer = document.querySelector('.success_container');
const dismissBtn = document.querySelector('.dismissBtn');
const userEmail = document.querySelector('.userEmail');
const image = document.getElementById('sign-up');
const innerContainer = document.querySelector('.success_inner_container')

function onSubmit(e) {
    e.preventDefault();
    if(regex.test(email.value)){
        error.style.display = "none";
        container.style.display = "none";
        successContainer.style.display = "block";
        innerContainer.style.display = "block";
        userEmail.innerHTML = input.value;
        mainContainer.style.display = "none";
        input.value = ""
        input.classList.remove("errorInput")
    }else{
        error.style.display = "block"
        input.classList.add("errorInput")
        image.classList.add("imageError")

       
    }
}

form.addEventListener('submit', onSubmit);

function onDismiss() {
    container.style.display = "flex";        
    successContainer.style.display = "none";
    mainContainer.style.display = "block";
    image.classList.add("imageNew");

}
dismissBtn.addEventListener('click', onDismiss)
