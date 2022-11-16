const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/app1',
        createProxyMiddleware({
            target: 'http://localhost:8008',
            changeOrigin: false,
        })
    );
};