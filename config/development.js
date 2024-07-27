module.exports = {
    NODE_PORT: 3000,
    mongoUri: `mongodb://root:example@mongo:27017/mental-health-dev-db?authSource=admin`,
    mongoOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true, 
        autoIndex: true,
    }
};