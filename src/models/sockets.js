class Sockets {
  constructor (io) {
    this.io = io
    this.socketEvents()
  }

  socketEvents () {
    //   on Connection
    this.io.on('connection', (socket) => {
      //   emit un evento - funciones que se disparan
      socket.emit('connection', { message: 'Beinvenido al server', data: new Date() })

      //   escuchar evento
      socket.on('message-client', (data) => {
        console.log(data)
      })

      socket.on('send-message', (data) => {
        console.log(data)
        this.io.emit('message-from-server', data)
      })
    })
  }
}

module.exports = Sockets
