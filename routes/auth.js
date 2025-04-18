const express = require('express')
const router = express.Router();

// in case the form is sending data itself not the js code in client side
router.post('/', (req, res) => {
    const {name} = req.body;

    if(name) {
        return res.status(200).send(`welcome ${name}`)
    }

    res.status(401).send('Please provide credentials')
})

module.exports = router;