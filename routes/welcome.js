const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('Received from welcome.js')
    res.sendFile(path.join(__dirname, '../', 'views', 'welcome.html'));
});

module.exports = router;