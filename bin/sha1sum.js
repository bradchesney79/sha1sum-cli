#!/usr/bin/env node

var program = require('commander');
var shasum = require('shasum');
var fs = require('fs');

program
  .arguments('<file>')
  .action(function(file) {
    var hash = shasum(fs.readFileSync(file)) || false;
    console.log(hash);
    return hash;
  })
  .parse(process.argv);
