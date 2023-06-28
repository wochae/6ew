const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/user',
    createProxyMiddleware({
      target: 'http://localhost:8080', // 백엔드 서버의 주소와 포트로 변경
      changeOrigin: true,
    })
  );
};
