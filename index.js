#!/usr/bin/env node
const spawn = require("child_process").spawn,
  shell = require("shelljs");

const url = process.argv[2];

if(!url){
    console.log("fatal: You must specify a repository to clone.");
    process.exit(1);
}

let path = url
  .split("/")
  .slice(2)
  .join("/")
  .replace(".git", "");

if (process.argv[3]) {
  var parentDirectories = process.argv[3];
  if (parentDirectories.substr(-1) !== "/") {
    parentDirectories = parentDirectories + "/";
  }

  path = parentDirectories + path;
}

shell.mkdir("-p", path);

spawn("git", ["clone", url, path], { stdio: "inherit" });