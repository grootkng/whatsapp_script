const { Client } = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal')

const { sherekMovieScript } = require("./scripts/sherek.js")

function main() {
  const client = new Client()
  client.initialize()

  client.on('qr', qr => qrcode.generate(qr, { small: true }))
  client.on('ready', _ => console.log('Ready to start'))
  client.on('message', msg => {
    const LINES = sherekMovieScript.split('\n')
    LINES.map(line => line.trim() != '' ? msg.reply(line) : '')
  })
  client.on('disconnected', reason => console.log('Logged out', reason))
}

main()
