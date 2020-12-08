const app = require('./app');

const port = process.env.PORT || 4201;

const server = app.listen(port, () => {
    console.log(`Server has successfully started on port: ${port}`);
});