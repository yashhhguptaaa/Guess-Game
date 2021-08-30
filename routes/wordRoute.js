const express = require('express');
const router = express.Router();
const Word = require('../models/wordModel')

// router.get('/getAllPizzas', async (req, res) => {
//     try {
//         const pizzas = await Pizza.find({})
//         res.send(pizzas)
//     } catch (error) {
//         return res.status(400).json({ message: error });
//     }
// });

router.post('/addword', async (req, res) => {

    const guessword = req.body.guessword;
    try {
        
        const newword = new Word({
            word: guessword.word,
            hints: [guessword.hints]
        })

        await newword.save()
        res.send('New word Added Successfully')
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = router;
