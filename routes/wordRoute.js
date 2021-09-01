const express = require('express');
const router = express.Router();
const Word = require('../models/wordModel')

router.get('/getwords', async (req, res) => {
    try {
        console.log("inside get words route")
        const words = await Word.find()
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
            image: guessword.image
        })

        await newword.save()
        console.log("New Word: ",newword)
        res.send('New word Added Successfully')
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = router;
