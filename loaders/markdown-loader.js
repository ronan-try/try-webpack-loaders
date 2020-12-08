const marked = require('marked')

const tryLog = (title, source) => {
    console.log('『「『『「『 ', title)
    console.log(source)
    console.log('』」』」』」』」』」』」')
}

module.exports = (source) => {
    tryLog('lodaer原始source', source)

    // 1‘ 将markdown转换为html字符串
    const html = marked(source)

    tryLog('转移后的html', html)
    // const code = `module.exports = ${JSON.stringify(html)}`
    // const code = `export default ${JSON.stringify(html)}`
    // return code
    return html
}
