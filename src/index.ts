import express from 'express';
import { getAll, getOne, createOne, updateOne, deleteOne } from './user.controller';
import { sequelizeInstance as sequelize } from "./util/database";


const PORT = process.env.EXTERNAL_PORT || 8080;

const app = express();

app.get('/getUsers', getAll);
app.get('/users/:id', getOne);
app.post('/users', createOne);
app.put('/users/:id', updateOne);
app.delete('/users/:id', deleteOne);

const start = async () => {
    try {
        await sequelize.sync(
            { force: false }
        );
        app.listen(PORT, () => console.log(`server run on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};

start();
app.listen(PORT, () => console.log(`server run on port ${PORT}`));