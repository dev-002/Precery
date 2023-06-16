const express = require('express');
const Fruit = require('../model/items/fruit');
const Vegetable = require('../model/items/vegetable');
const router = express.Router();

router.get('/', async (req, res) => {
    const fruit = await Fruit.find({});
    const vegetable = await Vegetable.find({});
    res.render('index', { fruit, vegetable });
})

module.exports = router;