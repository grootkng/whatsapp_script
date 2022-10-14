const QrCodeGenerator = require('../ports/qr')
const WhatsappClient = require('../ports/whatsapp')

const { sherekMovieScript } = require('../../scripts/sherek.js')

class SendMessage {
  qrCodeGenerator
  whatsappConnection

  constructor() {
    this.qrCodeGenerator = new QrCodeGenerator()
    this.whatsappConnection = new WhatsappClient()
  }

  send() {
    this.whatsappConnection.connection.initialize()
    this.whatsappConnection.connection.on('qr', qr => this.qrCodeGenerator.generate(qr))
    this.whatsappConnection.connection.on('ready', _ => console.log('Ready to start'))

    this.whatsappConnection.connection.on('message', msg => this.onMessage(msg))

    this.whatsappConnection.connection.on('disconnected', reason => console.log('Logged out', reason))
  }

  onMessage(message) {
    const LINES = sherekMovieScript.split('\n')
    LINES.map(line => line.trim() != '' ? message.reply(line) : '')
  }
}

module.exports = SendMessage
