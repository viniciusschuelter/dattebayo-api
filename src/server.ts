import http from 'http';
import express, { Express } from 'express';
import routes from './routes/index.route';
import cors from 'cors';

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
const PORT: any = process.env.PORT ?? 4000;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));