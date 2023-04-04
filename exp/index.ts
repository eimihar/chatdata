import express from "express";
import {DateHelper} from "./helpers/date-helper";

const app = express();
const port = 3030;

const shopRouter = express.Router({mergeParams: true});

app.get('/', (req, res) => {
    return res.send('Hello world');
})

app.get('/time', (req, res) => {
    return res.send(`Time is ${DateHelper.timestamp}`)
})

app.use('/shop/:id', shopRouter);

shopRouter.use((req, res, next) => {
    if (req.params.id == "12")
        return res.send('it is within middleware');

    return next();
})

shopRouter.get('/', (req, res) => {
    return res.send('yeah');
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})