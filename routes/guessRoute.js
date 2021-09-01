const express = require('express');
const router = express.Router();
const Guess = require('../models/guessModel')

router.get('/getguess', async (req, res) => {
    try {
        // console.log("inside get words route")
        const word = await Guess.aggregate([{$sample:{size:1}}])
        res.send(word)
        console.log(word)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.post('/addguess', async (req, res) => {

    const guessword = req.body.guessword;
    console.log(guessword);
    try {

        const newword = new Guess({
            word: guessword.word,
        })

        await newword.save()
        console.log("New Word: ",newword)
        res.send('New word Added Successfully')
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = router;
