const SendMessage = require('../domain/send-message')

class Program {
  messageService

  constructor () {
    this.messageService = new SendMessage()
  }

  main() {
    this.messageService.send()
  }
}

const program = new Program()
program.main()
