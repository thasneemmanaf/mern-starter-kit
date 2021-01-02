/* eslint-disable no-console */
import mongoose from 'mongoose';

export default connectDB = async () => {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  try {
    const connectionVar = await mongoose.connect(process.env.MONGO_URI, opts);

    console.log(
      `Successfully connected to DB: ${connectionVar.connection.host}`
    );
  } catch (err) {
    console.log(`Unable to establish connection to Database: ${err.message}`);
    process.exit(1);
  }
};
