const path = require("path");
const file = require("./utils.js");
const inquirer = require("inquirer");
const proess = require("child_process");




async function create(name) {
  const cwd = process.cwd();
  const targetDir = path.resolve(cwd, name || ".");
  const choices = [
    {
      name: "vue",
      value: 1,
    },
    {
      name: "react",
      value: "2",
    },
    {
      name: "uniapp",
      value: "3",
    },
  ];
  const prompts = [
    {
      type: "list",
      name: "choice",
      message: "请选择你想要技术栈：",
      choices: choices,
    },
  ];
  const answers = await inquirer.prompt(prompts);
  

  proess.exec(`mkdir ${targetDir}&&git clone https://github.com/codercup/unibest.git ${targetDir}`, (error, stdout, stderr) => {
    if (!error) {
      console.log(stdout);
      // 成功
    } else {
      // 失败
    }
  });
  

  //   const pkg = {
  //     name,
  //     version: "0.1.0",
  //     private: true,
  //     devDependencies: {},
  //   };
  //   file.writeFileTree(targetDir, {
  //     "package.json": JSON.stringify(pkg, null, 2),
  //   });
}

module.exports = (...args) => {
  return create(...args);
};
