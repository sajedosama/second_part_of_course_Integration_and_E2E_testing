// 3rd party libraries
const express = require('express');
const bodyParser = require('body-parser');

// own files
require('./config/config');
const restRouter = require('./src/api/api-routes');

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use('/api', restRouter);

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(
            `app is up and running in the ${process.env.NODE_ENV} mode on port ${PORT}`
        );
    });
}

module.exports = app;