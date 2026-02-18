/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.psycholog-terapeut-brno.cz",
  generateRobotsTxt: true,
  exclude: ['/about', '/first', '/practice', '/contact'],
  additionalPaths: async () => [
    { loc: '/o-mně', changefreq: 'monthly', priority: 0.8 },
    { loc: '/první-setkání', changefreq: 'monthly', priority: 0.8 },
    { loc: '/má-praxe', changefreq: 'monthly', priority: 0.8 },
    { loc: '/kontakt', changefreq: 'monthly', priority: 0.9 },
  ],
}
