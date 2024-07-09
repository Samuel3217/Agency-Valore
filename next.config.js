// next.config.js
module.exports = {
  images: {
    domains: ['i.pinimg.com', 'scontent.fagu5-1.fna.fbcdn.net'], // Asegúrate de incluir ambos dominios aquí
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
};
