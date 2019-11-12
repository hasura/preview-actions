const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = 3000;

app.post('/createUser', (req, res) => {
    console.log(req.body);

    // Uncomment the 2 lines below to make the function return slower
    // and to try out "async" actions
    // setTimeout(() => {
        res.json({data: {userId: 1}});
    // }, 10000);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
