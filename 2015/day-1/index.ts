import fs from 'fs';
import path from 'path';

async function readInput() {
  const input = await fs.promises.readFile(
    path.resolve(`${__dirname}/input.txt`),
    'utf-8'
  );
  return input;
}

(async () => {
  // Read input
  const input = await readInput();

  // Part 1
  const floor = input.split('').reduce((acc, char) => {
    if (char === '(') {
      return acc + 1;
    }
    if (char === ')') {
      return acc - 1;
    }
    return acc;
  }, 0);

  console.log(`Part 1: ${floor}`);

  // Part 2
  let currentFloor = 0;
  let position = 0;

  for (const char of input) {
    if (char === '(') {
      currentFloor += 1;
    }
    if (char === ')') {
      currentFloor -= 1;
    }
    position += 1;
    if (currentFloor === -1) {
      break;
    }
  }

  console.log(`Part 2: ${position}`);
})();
