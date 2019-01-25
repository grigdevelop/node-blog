import express = require("express");
const router = express.Router();

const posts = [
    {id: 1, title: 'my post 1'},
    {id: 2, title: 'my post 2'},
    {id: 3, title: 'my post 3'}
]

router.get('/', (req, res) => {
    res.json(posts);
});

export default router;