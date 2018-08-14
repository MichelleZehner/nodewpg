const express = require('express');
const app = express();


        const requestTime = (req, res, next) => {
            const message = `Request: ${req.baseUrl} ${Date.now()}`;
            console.log(message);

            next();
        };
        app.use(requestTime);

        app.listen(3000);


