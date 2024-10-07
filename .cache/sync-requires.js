
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-broke-js": preferDefault(require("/Users/johannalee/repo/johannahyunji.github.io/src/pages/Broke.js")),
  "component---src-pages-es-net-mrdp-js": preferDefault(require("/Users/johannalee/repo/johannahyunji.github.io/src/pages/ESNetMRDP.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/johannalee/repo/johannahyunji.github.io/src/pages/index.js")),
  "component---src-pages-sia-partners-js": preferDefault(require("/Users/johannalee/repo/johannahyunji.github.io/src/pages/SiaPartners.js")),
  "component---src-pages-waymo-js": preferDefault(require("/Users/johannalee/repo/johannahyunji.github.io/src/pages/Waymo.js")),
  "component---src-pages-yelp-js": preferDefault(require("/Users/johannalee/repo/johannahyunji.github.io/src/pages/Yelp.js"))
}

