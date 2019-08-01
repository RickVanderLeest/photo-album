let path = require('path');
let exec = require('child_process').exec;

test('should handle no arguments', async () => {
  let result = await cli([], '.');
  expect(result.code).toBe(0);
});

test('should handle one numerical argument', async () => {
  let result = await cli(['1'], '.');
  expect(result.code).toBe(0);
});

test('should handle one non-numerical argument', async () => {
  let result = await cli(['one'], '.');
  expect(result.code).toBe(1);
});

test('should handle multiple arguments', async () => {
  let result = await cli(['1', '2', '3,', '4'], '.');
  expect(result.code).toBe(0);
});

test('should handle multiple mixed arguments', async () => {
  let result = await cli(['1', 'two', '3,', 'four'], '.');
  expect(result.code).toBe(0);
});

test('should handle known option', async () => {
  let result = await cli(['--help', '1'], '.');
  expect(result.code).toBe(0);
});

test('should handle unexpected option', async () => {
  let result = await cli(['--dummy', '1'], '.');
  expect(result.code).toBe(1);
});

function cli(args, cwd) {
  return new Promise(resolve => { 
    exec(
      `node ${path.resolve('./photo-album')} ${args.join(' ')}`,
      { cwd }, 
      (error, stdout, stderr) => {
        resolve({
        code: error && error.code ? error.code : 0,
        error,
        stdout,
        stderr })
      }
    );
  });
}
