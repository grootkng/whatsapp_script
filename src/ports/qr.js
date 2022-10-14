const qrcode = require('qrcode-terminal')

class QrCodeGenerator {
  qrCode

  constructor() {
    this.qrCode = qrcode
  }

  generate(whatsappQrCode) {
    return this.qrCode.generate(whatsappQrCode, { small: true })
  }
}

module.exports = QrCodeGenerator
