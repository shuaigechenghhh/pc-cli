const fs = require('fs-extra')
async function chear() {
    const data = fs.readFileSync('./bin/chear-template.js', { encoding: 'utf8' });
    // 输出文件内容
    fs.writeFileSync('./bin/user-template.js', data);
}

module.exports = () => {
  return chear();
};
