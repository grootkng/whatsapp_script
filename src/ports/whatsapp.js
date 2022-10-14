const { Client } = require('whatsapp-web.js')

class WhatsappClient {
  connection

  constructor() {
    this.connection = new Client()
  }
}

module.exports = WhatsappClient
