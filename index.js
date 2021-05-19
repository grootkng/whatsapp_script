const { sherekMovieScript } = require('./movies/sherek.js')

function main() {
    const LINES = sherekMovieScript.split('\n')
    const EVENT = new InputEvent('input', { bubbles: true })
    const TEXT_BOX = document.querySelector('div._2_1wd[data-tab="6"]')
    let line = 0

    setInterval(() => {
        if (line >= LINES.length) {
            return
        }

        if (LINES[line].trim() != '') {
            window.InputEvent = window.Event || window.InputEvent

            TEXT_BOX.textContent = LINES[line]
            TEXT_BOX.dispatchEvent(EVENT)
            document.querySelector('button._1E0Oz').click()
        }

        line++
    }, 250)
}