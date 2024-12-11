const path=require('path')
const fs = require('fs-extra')
async function config(filePath) {
    const data = fs.readFileSync(filePath, { encoding: 'utf8' });
    // 输出文件内容
    fs.writeFileSync('./bin/user-template.js', data);
}

module.exports = (...args) => {
  return config(...args);
};
