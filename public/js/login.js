const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username === 'admin' && password === 'password') {
        res.redirect('/dashboard'); 
    } else {
        res.render('login', { error: 'Invalid username or password' }); 
    }
});

module.exports = router;