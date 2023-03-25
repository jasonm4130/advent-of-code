import fs from 'fs';
import path from 'path';

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
  // Create a Set of all the houses that have received at least one present
  const houses = new Set<string>();

  // Start at the origin
  let x = 0;
  let y = 0;

  // Add the origin to the set
  houses.add(`${x},${y}`);

  // Loop over each character in the input
  for (const char of input) {
    // Move in the direction specified by the character
    if (char === '^') {
      y += 1;
    }
    if (char === 'v') {
      y -= 1;
    }
    if (char === '>') {
      x += 1;
    }
    if (char === '<') {
      x -= 1;
    }

    // Add the new house to the set
    houses.add(`${x},${y}`);
  }

  console.log(`Part 1: ${houses.size}`);

  // Part 2
  // Create a Set of all the houses that have received at least one present
  const houses2 = new Set<string>();

  // Start at the origin
  let x1 = 0;
  let y1 = 0;
  let x2 = 0;
  let y2 = 0;

  // Add the origin to the set
  houses2.add(`${x1},${y1}`);

  // Loop over each character in the input
  for (let i = 0; i < input.length; i += 1) {
    // Move in the direction specified by the character
    if (i % 2 === 0) {
      if (input[i] === '^') {
        y1 += 1;
      }
      if (input[i] === 'v') {
        y1 -= 1;
      }
      if (input[i] === '>') {
        x1 += 1;
      }
      if (input[i] === '<') {
        x1 -= 1;
      }

      // Add the new house to the set
      houses2.add(`${x1},${y1}`);
    } else {
      if (input[i] === '^') {
        y2 += 1;
      }
      if (input[i] === 'v') {
        y2 -= 1;
      }
      if (input[i] === '>') {
        x2 += 1;
      }
      if (input[i] === '<') {
        x2 -= 1;
      }

      // Add the new house to the set
      houses2.add(`${x2},${y2}`);
    }
  }

  console.log(`Part 2: ${houses2.size}`);
})();
