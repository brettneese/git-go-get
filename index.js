#!/usr/bin/env node
const clipboardy = require('clipboardy');
const spawn = require("child_process").spawn,
  shell = require("shelljs");

const url = process.argv[2];

if(!url){
    console.log("fatal: You must specify a repository to clone.");
    process.exit(1);
}


if (url.includes('@')){
  // Lets say its ssh
  var path = url
  .split("@")
  .slice(1)
  .join('/')
  .replace(':', '/')
  .replace(".git", "");
  
} else {
  // Assume its http
  var path = url
  .split("/")
  .slice(2)
  .join("/")
  .replace(".git", "");
}

if (process.argv[3]) {
  var parentDirectories = process.argv[3];
  if (parentDirectories.substr(-1) !== "/") {
    parentDirectories = parentDirectories + "/";
  }

  path = parentDirectories + path;
}

clipboardy.writeSync(path);

shell.mkdir("-p", path);

spawn("git", ["clone", url, path], { stdio: "inherit" });
