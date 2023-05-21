const express = require('express');
const User = require('../model/user');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('signForm');
});

router.post('/create', async (req, res) => {
    const user = await User.create({ ...req.body.user });
    await user.save();
    res.send(user);
});

router.post('/verify', async (req, res) => {
    const user = await User.findOne({ name: req.body.user.name });
    if (req.body.user.password == user.password) {
        res.send('Welcome ' + user.name);
    }
    else {
        res.redirect('/login');
    }
})

module.exports = router;