const fastify = require('fastify')();

const PORT = process.env.PORT || 3000;
fastify.listen(PORT, (err) => {
    if (err) {
        console.error('Error starting server:', err);
        process.exit(1);
    }
    console.log(`Server listening on port ${PORT}`);
});
