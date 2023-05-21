const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../model/user');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('signForm');
});

router.post('/create', async (req, res) => {
    const user = req.body.user;
    const hashedPass = await bcrypt.hash(user.password, 10);
    const newUser = await User.create({ user, password: hashedPass });
    await newUser.save();
    res.send(user);
});

router.post('/verify', async (req, res) => {
    const user = await User.findOne({ name: req.body.user.name });
    if (bcrypt.compare(req.body.user.password, user.password)) {
        res.send('Welcome ' + user.name);
    }
    else {
        res.redirect('/login');
    }
})

module.exports = router;