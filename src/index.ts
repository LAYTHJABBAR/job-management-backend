import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { jobRoutes } from './routes';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/jobs', jobRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
