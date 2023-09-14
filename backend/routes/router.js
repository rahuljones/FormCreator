const express = require('express')
const router = express.Router()

router.get('/users', (req,res) => {
    const userData = {
        "id": "bob"
    }

    res.send(userData)
})

module.exports = router