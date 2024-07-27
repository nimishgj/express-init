const { createServer } = require("./util/Server");
const Database = require("./config/Database");

// eslint-disable-next-line no-undef
const config = require('./config/'+ process.env.NODE_ENV);
require('dotenv').config();

const app = createServer();
const db = new Database(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

db.connect().catch((err) =>
    console.error("Error connecting to database:", err)
);

app.post('/', (req, res) => {
    res.status(201).json({
        message: 'Data received successfully'
    });
});

app.listen(config.NODE_PORT, () => {
    console.log("Server is runnig on port:",config.NODE_PORT);
});