
const socket = io();

let user;

let chatBox = document.getElementById("chatBox");

// alert
Swal.fire({
  title: "Indentificate",
  input: "text",
  text: "Ingrese el usuario para identificarse en el chat",
  inputValidator: (value) => {
    return !value && "Por favor ingrese un nombre de usuario";
  },
  allowOutsideClick: false,
}).then((result) => {
  user = result.value;
  socket.emit("newUser", user);
});

socket.on("newUser", (data) => {
  Swal.fire({
    text: `Se conecto ${data}`,
    toast: true,
    position: "top-right",
    timer: 3000,
  });
});

// send
chatBox.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    if (chatBox.value.trim().length > 0) {
      socket.emit("message", { user: user, message: chatBox.value });
      chatBox.value = "";
    }
  }
});


socket.on("messageLog", (data) => {
  let messagesLogs = document.getElementById("messagesLog");
  let messages = "";

  data.forEach(message => {
    messages = messages + `${message.user} dice: ${message.message} </br>`
  });

  messagesLogs.innerHTML = messages;
})
