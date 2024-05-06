// routes.js
const products = require('./products');

module.exports = (fastify) => {
    fastify.get('/api/products', (req, reply) => {
        reply.send(products.list);
    });
};
