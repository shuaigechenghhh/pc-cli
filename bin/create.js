const path = require("path");
const file = require("./utils.js");
const inquirer = require("inquirer");
const proess = require("child_process");
const { templateList } = require("./template.js");
const { userTemplateList } = require("./user-template.js");
const ora = require('ora');

async function create(name) {
  const cwd = process.cwd();
  const targetDir = path.resolve(cwd, name || ".");
  const list = userTemplateList.length ? userTemplateList : templateList;
  const prompts = [
    {
      type: "list",
      name: "template",
      message: "请选择你想要模版：",
      choices: list,
    },
  ];
  const answers = await inquirer.prompt(prompts);

  const { template } = answers;
  const source = list.find((i) => i.value === template)?.source;
  const spinner = ora('Loading...').start();
  proess.exec(
    `mkdir ${targetDir}&&git clone ${source} ${targetDir}&&cd ${targetDir}&&git remote remove origin`,
    (error, stdout, stderr) => {
      if (!error) {
        spinner.succeed('Loading complete!');
        // 成功
      } else {
        // 失败
        console.log(stdout);
        console.log(error);
      }
    }
  );

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
