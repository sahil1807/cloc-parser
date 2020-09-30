// Driver program to test cloc code
const cloc = require('./src/countLineOfCode.js');


/**
 * Rate limiter
 */
async function main() {
  const path = './temp/hello.java';
  const data  = await cloc(path);
  console.log(data);
}

main();