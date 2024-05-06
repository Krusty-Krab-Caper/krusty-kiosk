// routes.js
const products = require('./products');
const site = require('./site')

module.exports = (fastify) => {

    fastify.get('/', (req, reply) => {
        reply.header('Content-Type', 'text/html').send(site.html)
    })

    fastify.get('/api/products', (req, reply) => {
        reply.send(products.list);
    });
};

function authenticate(authHeader) {
    return authHeader === "Basic 71643749749825723fjbcqwcq89cnqw"
}
