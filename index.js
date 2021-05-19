// const { sherekMovieScript } = require("./scripts/sherek.js")

// const sherekMovieScript = 'alozinho meu'

// function messageToSend() {
//   const MAX_INTERVAL = 250
//   const LINES = sherekMovieScript.split("\n")
//   let line = 0

//   setInterval(() => {
//     if (line >= LINES.length) {
//       return
//     }

//     if (LINES[line].trim() != "") {
//       LINES[line]
//     }

//     line++
//   }, MAX_INTERVAL)
// }

function main() {
  const qrcode = require('qrcode-terminal')
  const { Client } = require('whatsapp-web.js')
  const client = new Client()
  client.initialize()

  client.on('qr', qr => qrcode.generate(qr, { small: true }))
  client.on('ready', _ => console.log('Ready to start'))
  client.on('message', msg => msg.reply('teste'))
  client.on('disconnected', reason => console.log('Logged out', reason))
}

main()
