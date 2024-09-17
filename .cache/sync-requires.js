
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-grid-background-js": preferDefault(require("/Users/johannalee/repo/johannahyunji.github.io/src/pages/GridBackground.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/johannalee/repo/johannahyunji.github.io/src/pages/index.js")),
  "component---src-pages-introduction-slide-js": preferDefault(require("/Users/johannalee/repo/johannahyunji.github.io/src/pages/IntroductionSlide.js")),
  "component---src-pages-project-slide-js": preferDefault(require("/Users/johannalee/repo/johannahyunji.github.io/src/pages/ProjectSlide.js"))
}

