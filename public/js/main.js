const socket = io('http://localhost:3000')

const form = document.querySelector('#form')
const messagesList = document.querySelector('#messages-list')
const message = document.querySelector('#message')
// escuchar un evento
socket.on('connection', (data) => {
  console.log('El servidor emitio algo: ', data)
})

// setTimeout(() => {
// //   emitir un evento
// // {name, message}
//   socket.emit('message-client', { name: 'Fernanda', message: 'Holis Server' })
// }, 2000)

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const newMessage = message.value

  socket.emit('send-message', { message: newMessage, date: new Date() })
  message.value = ''
})

socket.on('message-from-server', (data) => {
  console.log(data)
  messagesList.innerHTML += `
    <li>${data.message} : ${data.date}</li>
  `
})
