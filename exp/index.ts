import express from "express";

const app = express();
const port = 3030;

app.get('/', (req, res) => {
    return res.send('Hello world');
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})