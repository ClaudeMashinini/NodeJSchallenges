import express from 'express';
const Post = require('../models/Post');
const direct = express.Router();

direct.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({
            message: err
        });
    }
}); //Retrieves all entries

direct.get('/:postId', async (req, res) => {
    try {
        const posts = await Post.findById(req.params.postId);
        res.json(posts);
    } catch (err) {
        res.json({
            message: err
        });
    }
}); //Retrieves an _id-specified entry


direct.post('/', (req, res) => {
    const post = new Post({
        Name: req.body.Name,
        Surname: req.body.Surname,
        Age: req.body.Age,
        Date_of_Visit: req.body.Date_of_Visit,
        Time_of_Visit: req.body.Time_of_Visit,
        Subject_of_Inquiry: req.body.Subject_of_Inquiry,
        Assistant: req.body.Assistant
    })
    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({
                message: err
            });
        })
}); // Creates an entry with the specified info

direct.put('/:postId', async (req, res) => {
    try {
        const updatedEntry = await Post.updateOne({
            _id: req.params.postId
        }, {
            $set: {
                Name: req.body.Name,
                Surname: req.body.Surname,
                Age: req.body.Age,
                Date_of_Visit: req.body.Date_of_Visit,
                Time_of_Visit: req.body.Time_of_Visit,
                Subject_of_Inquiry: req.body.Subject_of_Inquiry,
                Assistant: req.body.Assistant
            }
        });
        res.json({
            updatedEntry
        });
    } catch (err) {
        res.json({
            message: err
        });
    }
}); //Updates the information of the entry

direct.delete('/:postId', async (req, res) => {
    try {
        const deletedEntry = Post.remove({
            _id: req.param.postId
        });
        res.json(deletedEntry);
    } catch (err) {
        res.json({
            message: err
        });
    }
}); //Deletes a specific entrry using its _id

module.exports = direct;