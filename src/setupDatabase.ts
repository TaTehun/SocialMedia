import mongoose from 'mongoose';
import { config } from './config';

export default () => {
    const connect = () => {
      mongoose.connect(`${config.DATABASE_URL}`)
      .then(() => {
        console.log('Success');
      })
      .catch((error) => {
        console.log('Error', error);
        return process.exit(1);
      })
    }
    connect();

    mongoose.connection.on('disconnected', connect);
};