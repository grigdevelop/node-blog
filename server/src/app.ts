import express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({message: 'Hello, World!'});
});

//app.listen(3000, () => console.log("Listening port 3000")); 

export { app };