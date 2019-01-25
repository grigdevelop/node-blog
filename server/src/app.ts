import express = require('express');
const app = express();

// routes
import posts = require('./routes/posts.route');

app.get('/', (req, res) => {
    res.json({message: 'Hello, World!'});
});

app.use('/posts', posts.default)

//app.listen(3000, () => console.log("Listening port 3000")); 

export { app };