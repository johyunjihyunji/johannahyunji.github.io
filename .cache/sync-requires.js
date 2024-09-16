
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-index-js": preferDefault(require("/Users/johannalee/repo/johannahyunji.github.io/src/pages/index.js"))
}

