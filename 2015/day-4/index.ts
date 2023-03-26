import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

async function readInput() {
  const input = await fs.promises.readFile(
    path.resolve(`${__dirname}/input.txt`),
    'utf8'
  );
  return input;
}

(async () => {
  const input = await readInput();

  // Part 1
  const hash = input;
  let i = 0;
  while (true) {
    const hashInput = `${hash}${i}`;
    const md5 = crypto.createHash('md5');
    const digest = md5.update(hashInput).digest('hex');
    if (digest.startsWith('00000')) {
      break;
    }
    i += 1;
  }
  console.log(`Part 1: ${i}`);

  // Part 2
  let i2 = 0;
  while (true) {
    const hashInput = `${hash}${i2}`;
    const md5 = crypto.createHash('md5');
    const digest = md5.update(hashInput).digest('hex');
    if (digest.startsWith('000000')) {
      break;
    }
    i2 += 1;
  }
  console.log(`Part 2: ${i2}`);
})();
