#!/usr/bin/env node

var program = require('commander');
var shasum = require('shasum');
var fs = require('fs');
const read = (name) => fs.readFileSync(name, 'utf8');

program
  .option('-c, --check', 'read SHA1 sums from the FILEs and check them')
  .option('-q, --quiet', 'don\'t print OK for each successfully verified file')
  .arguments('<file>')
  .action(function(file, opts) {
    if (opts.check) return process.exit(check(file) ? 0 : 1);
  
    var hash = shasum(read(file));
    if (!hash) throw new Error('hash is empty');
    console.log(hash, file);
    return hash;
  })
  .parse(process.argv);

// parse sha1sum file format: <hash><space><original file name>
function check (file) {
  const [origHash, origFile] = read(file).split(' ');
  const actualHash = shasum(read(origFile));
  if (!opts.quiet) console.log(`${ origFile }: OK`);
  return origHash === actualHash;
}
