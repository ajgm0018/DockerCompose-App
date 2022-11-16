const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/app1/',
        createProxyMiddleware({
            target: 'https://bighug.ujaen.es',
            changeOrigin: true,
        })
    );
};