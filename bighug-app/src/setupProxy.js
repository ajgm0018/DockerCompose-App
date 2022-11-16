const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/app',
        createProxyMiddleware({
            target: 'http://localhost:8008',
            changeOrigin: true,
        })
    );
};