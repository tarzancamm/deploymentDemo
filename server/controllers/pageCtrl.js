const path = require('path')

module.exports = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, "../../index.html"))
    },

    about: (req, res) => {
        try {
            doesNotExistFunc()
        } catch {
            rollbar.critical('Backend error with test func')
        }
    }
}