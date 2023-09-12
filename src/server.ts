import http from 'http';
import https from 'https';
import express, { Express } from 'express';
import routes from './routes/index.route';
import cors from 'cors';
import cron from 'node-cron';

const router: Express = express();

router.use(cors({ origin: '*', credentials: process.env.CREDENTIALS === 'true' }));
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.use('/', routes);

router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});


const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 8080;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));

cron.schedule("14 * * * *",
    () => https.get('https://dattebayo-api.onrender.com/characters/1',
            resp => getSomeChar(resp))
                    .on("error", (err) => {console.log("Error: " + err.message);
    })
);


function getSomeChar(resp: any): any {
    let data = '';
    resp.on('data', (chunk: any) => data += chunk);
    resp.on('end', () =>console.log(JSON.parse(data)));
}
