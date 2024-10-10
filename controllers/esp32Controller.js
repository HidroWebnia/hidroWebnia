const Timer = require('../utils/time')
const esp32Timer = new Timer(60000)

exports.handleActivity = (req, res) => {
    console.log("Mensagem recebida da ESP32. Mantendo cronômetro ativo.")
    esp32Timer.start()
    esp32Timer.resetInactiveTime(() => {
        esp32Timer.stop()
    })
}