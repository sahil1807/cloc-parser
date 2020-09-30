const chai = require('chai');
const expect = chai.expect;
const cloc = require('../src/countLineOfCode.js');

// Getting my function write

describe('Count Line of code runner',async () => {
  it('File with some code, blank line, comment.', async () => {
    //Expecting value to be null
    const path = './temp/hello.java';
    const result = await cloc(path);
    expect(result).to.include({ numberOfBlankLines: 3 });
  });
  it('File with only comment lines', async () => {
    //Expecting value to be null
    const path = './temp/comments.java';
    const result = await cloc(path);
    expect(result).to.include({ numberOfCommentsLines: 1 });
  });
});