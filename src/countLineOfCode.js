const fs = require('fs');
const _ = require('lodash');
const path = require('path');
const readline = require('readline');
const config = require('../config');

/**
 * Function returning count Lines, Blank Lines, Comments in File
 * @param filepath
 */
async function countLineOfCode(filepath) {
  const languageSyntax = getLanguageSyntax(filepath);
  // Use fs.readFile() method to read the file
  const fileStream = fs.createReadStream(filepath);

  const rl = readline.createInterface({
    input: fileStream
  });
  let count = 0, numberOfBlankLines = 0, numberOfCommentsLines =0, numberOfCodeLines =0;
  for await (let line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    // Increasing the total count
    count++;
    // Checking for blank line first
    if (line.length === 0) {
      numberOfBlankLines++;
    }
    else{
      line = line.trim();
      if (line.indexOf(languageSyntax.commentsSyntax) === 0){
        numberOfCommentsLines++;
      }
      else {
        numberOfCodeLines++;
      }
    }
  }
  const outputPayload = {
    count,
    numberOfBlankLines,
    numberOfCommentsLines,
    numberOfCodeLines
  };
  return outputPayload;
}

/**
 * @description Get language syntax for the given filepath
 * @param filepath
 */
function getLanguageSyntax (filepath) {
  const extension = path.extname(filepath);
  // using "_.where" callback shorthand
  return _.find(config.languageSyntax, {extension});
}
module.exports = countLineOfCode;