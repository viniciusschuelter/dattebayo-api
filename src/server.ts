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
httpServer.listen(PORT, () => console.log(`The server is running on port: ${PORT}`));

cron.schedule("14 * * * *", () => getSomeChar());


function getSomeChar()  {
    https.get(
    'https://freeproxy.io/o.php?b=5&f=norefer&_senable_sig=&pv=0&mobile=&u=MjgwNDo3ZjQ6NTE4ZTpmYzgyOjgwMjk6YTdmMDo1NGQ2OmQwMWJ8czovL2RhdHRlYmF5by1hcGkub25yZW5kZXIuY29tL2NoYXJhY3RlcnMvMXxNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTE2LjAuMC4wIFNhZmFyaS81MzcuMzZ8OTQxNDU4',
    resp => {
            let data = '';
            resp.on('data', (chunk: any) => data += chunk);
            resp.on('end', () => console.log(data || 'end'));
        })
        .on("error", (err) => {console.log("Error: " + err.message);
    });
}
