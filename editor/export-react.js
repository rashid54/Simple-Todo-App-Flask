
const fs = require("fs")

try {
  fs.rmdirSync("../website/static/editor", { recursive: true })
} catch (error) {}

fs.cpSync("build", "../website/static/editor", { recursive: true })

const response = fs.readFileSync("build/index.html")
const html = response.toString()

/* Copy index.html into editor.html */
fs.writeFileSync("../website/templates/editor/editor.html", html)



// /* head */
// const headRegex = /<meta.*rel="stylesheet">/i
// let head = html.match(headRegex)
// head = head[0]
// // head = head.replace("/static/css", "/assets/editor/static/css")
// // head = head.replace("/static/js", "/assets/editor/static/js")
// // // console.log(head)
// fs.writeFileSync("../website/templates/editor/editorHead.jsp", head)

// /* body */
// const bodyRegex = /<div id="root">.*<\/div>/i
// let body = html.match(bodyRegex)
// body = body[0]
// // body = body.replace('src="/static/js', 'src="/assets/editor/static/js')
// // // console.log(body)
// fs.writeFileSync("../../main/webapp/WEB-INF/jsp/views/editor/editor.jsp", body)

// /* css */
// const cssPath = "../../main/resources/static/assets/editor/static/css"
// const cssFolderContent = fs.readdirSync(cssPath)
// let cssFileContent = fs.readFileSync(cssPath + "/" + cssFolderContent[0], { encoding: "utf-8" })
// // cssFileContent = cssFileContent.replaceAll("/static/media", "/assets/editor/static/media")
// // console.log(cssFileContent)
// fs.writeFileSync(cssPath + "/" + cssFolderContent[0], cssFileContent)


