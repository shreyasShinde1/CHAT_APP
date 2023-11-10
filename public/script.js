var socket = io();
let username="";
let btn = document.getElementById("join-chat");
let usernameInput = document.getElementById("username-input");
let formUsername = document.querySelector(".form-username");
let chatContainer = document.querySelector(".chat-container");
const messageInput = document.getElementById("message-input")
const sentBtn = document.getElementById("sentBtn")
const messageContainer = document.querySelector('.messages');



btn.addEventListener("click",(event)=>{
    event.preventDefault();
    username = usernameInput.value;
    if(username){
        formUsername.style.display = "none";
        chatContainer.style.display = "block";
    }
})

sentBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    let data ={
        id: socket.id,
        username : username,
        message : messageInput.value
    }
    socket.emit("secret message",data);
    appendMessage(data,'sent')
})

socket.on("secret message",(data)=>{
    if(data.id !== socket.id){
        appendMessage(data,'received');
    }
})
function appendMessage(data,type){
    let messageDiv = document.createElement("div");
    messageDiv.innerText= `${data.username}: ${data.message}`;
    if(type === 'sent'){
        messageDiv.setAttribute('class','message sent');
    }else{
        messageDiv.setAttribute('class','message');
    }
    messageContainer.append(messageDiv);
    messageInput.value = "";
}