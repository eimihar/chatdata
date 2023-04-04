import express from "express";

const app = express();
const port = 3030;

const shopRouter = express.Router({mergeParams: true});

// app.get('/', (req, res) => {
//     return res.send('Hello world');
// })

app.use('/shop/:id', shopRouter);

shopRouter.use((req, res, next) => {
    return next();
})

shopRouter.get('/', (req, res) => {
    return res.send('yeah');
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})