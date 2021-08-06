import express from 'express';
import bodyParser from 'body-parser';
import users from "./routes/users.js"
import mongoose from 'mongoose';
import cors from 'cors';
import songs from './routes/songs.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/user', users);
app.use('/songs', songs);

const CONNECTION_URL = 'mongodb+srv://ayush:ayush@cluster0.hapkh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
