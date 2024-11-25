import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRouter from './src/routers/userRouter.js';

dotenv.config(); 

const app = express();



app.use(bodyParser.json());
app.use(cors());

app.use('/users', userRouter);



mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("mongo db ile qululdu");
})
.catch((error) => {
    console.error("mongo db ile elaqe qurulmadi:", error);
});

app.use('/api' , userRouter)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { 
    console.log(`server is runing ${PORT}`);
});