const express = require('express');
const User = require('../model/user');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('signForm');
})

router.post('/create', async (req, res) => {
    const user = await User.create({...req.body.user});
    await user.save();
    res.send(user);
})

module.exports = router;