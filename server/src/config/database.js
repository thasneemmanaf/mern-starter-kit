const mongoose = require('mongoose');

const envFiles = {
	development: '.env',
	test: '.env.test',
};

require('dotenv').config({ path: envFiles[process.env.NODE_ENV] });

const connect = async () => {
	const mongoConnectionString = process.env.MONGO_URI;
	try {
		const opts = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		};
		await mongoose.connect(mongoConnectionString, opts);
		console.log('Successfully Connected to Database');
		logger.debug({ mongoConnectionString });
	} catch (err) {
		console.log('Unable to establish connection to Database');
		logger.error(`Fail to connect with database ${mongoConnectionString}`);
	}
};
module.exports = { connect };
