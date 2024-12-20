#!/usr/bin/env node
const { program } = require("commander");

program.version(`${require("../package").version}`);
program.command("create <app-name>").action((name) => {
  console.log("Creating a new project...");
  console.log(`Project name: ${name}`);
  require("./create.js")(name);
});
program.command("config <file-origin>").action((file) => {
  require("./config.js")(file);
});
program.command("remake").action(() => {
  require("./clear.js")();
});
program.parse();
