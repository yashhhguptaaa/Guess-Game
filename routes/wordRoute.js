const express = require('express');
const router = express.Router();
const Word = require('../models/wordModel')

router.get('/getrandomword', async (req, res) => {
    try {
        const words = await Word.aggregate([{$sample:{size:1}}])
        res.send(words)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.post('/addword', async (req, res) => {

    const guessword = req.body.guessword;
    console.log(guessword);
    try {

        const newword = new Word({
            word: guessword.word,
            hints: guessword.hints
        })

        await newword.save()
        console.log("New Word: ",newword)
        res.send('New word Added Successfully')
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = router;
