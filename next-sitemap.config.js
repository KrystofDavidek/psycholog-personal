/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://www.psycholog-terapeut-brno.cz",
  generateRobotsTxt: true,
  additionalPaths: async () => [
    { loc: "/o-mně", lastmod: new Date().toISOString() },
    { loc: "/první-setkání", lastmod: new Date().toISOString() },
    { loc: "/má-praxe", lastmod: new Date().toISOString() },
    { loc: "/kontakt", lastmod: new Date().toISOString() },
  ],
};
