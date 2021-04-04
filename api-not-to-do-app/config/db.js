import mongoose from "mongoose";

console.log(process.env.MONGO_CLIENT);

const mongoClient = async () => {

	// const connStr = process.env.PROD_MONGO_CLIENT
	

	const connStr =  process.env.MONGO_CLIENT

	try {
		const con = await mongoose.connect(connStr, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		});

		if (con) {
			console.log("MongoDB is connected");
			// console.log(process.env.NODE_ENV)
		}
	} catch (error) {
		console.log(error);
	}
};

export default mongoClient;
