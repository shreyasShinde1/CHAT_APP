let username="";
let btn = document.getElementById("join-chat");
let usernameInput = document.getElementById("username-input");
let formUsername = document.querySelector(".form-username");
let chatContainer = document.querySelector(".chat-container");


btn.addEventListener("click",(event)=>{
    event.preventDefault();
    username = usernameInput.value;
    if(username){
        formUsername.style.display = "none";
        chatContainer.style.display = "block";
    }
})