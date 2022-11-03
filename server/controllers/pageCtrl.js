const path = require('path')

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

module.exports = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, "../../index.html"))
    }

    // about: (req, res) => {
    //     try {
    //         doesNotExistFunc()
    //     } catch {
    //         rollbar.critical('Backend error with test func')
    //     }
    // }
}