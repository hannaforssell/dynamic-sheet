import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as mongoService from "./services/mongoService"

import characterSheetRouter from './routes/characterSheetRouter';

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

// app.get('/', (req, res) => {
//     res.json({ 'message': 'ok' });
// })

app.use('/api/charactersheet', characterSheetRouter);

await mongoService.connectToDb();

app.listen(3000, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${3000}`)
});