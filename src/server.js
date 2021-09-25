const express = require("express");
const bodyParser = require("body-parser");

const articlesInfo = {
    "learn-react" : {
        comments: []
    },
    "learn-node" : {
        comments: []
    },
    "my-thoughts-on-learning-react" : {
        comments: [],
    },
};

const app = express();

app.use(express.json());

app.get("/hello", (req, res) => res.send("Hello"));
app.post('/api/articles/:name/add-comments')

app.listen(8000, () => console.log("Listening on port 8000"))