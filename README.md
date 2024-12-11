# 功能点
## 1.根据不同的模版，生成不同的代码
## 2.支持用户提供文件配置模版 //
## 3.完善自带的模版，根据模版生成一下规范代码
## 4.从git拉下来的代码，应和代码仓库断开链接
## 5.美化终端打印
pc create [name]:在当前路径生成项目模版 name 为项目名称
pc config [templatePath]:指定模版，templatePath 为模版路径
pc remake 重制模版

模版格式：
module.exports = {
  userTemplateList // 模版列表
}
userTemplateList ：{
  name: '', // 模版名称
  value: 1,// 模版值
  source:"https://github.com/shuaigechenghhh/vben3.git"// 模版地址
}[]

