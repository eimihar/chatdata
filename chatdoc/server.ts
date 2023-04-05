import express from "express";

const app = express();
const port = 10106;

app.get('/', (req, res) => {
    return res.send('Hello world');
})

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})