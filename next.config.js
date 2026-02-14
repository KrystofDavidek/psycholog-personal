/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/o-mn%C4%9B",
        destination: "/about",
      },
      {
        source: "/prvn%C3%AD-setk%C3%A1n%C3%AD",
        destination: "/first",
      },
      {
        source: "/m%C3%A1-praxe",
        destination: "/practice",
      },
      {
        source: "/kontakt",
        destination: "/contact",
      },
      {
        source: "/error",
        destination: "/error-page",
      },
    ];
  },
};
