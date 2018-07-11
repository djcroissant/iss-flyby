const express = require('express')
const app = express();


let port = 8000 || process.env.port

app.get('/', (req, res) => {
    res.send('Well HAllo there!!!!!')
});

// start server
app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});