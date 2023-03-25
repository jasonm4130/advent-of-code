import fs from 'fs';
import path from 'path';

async function readInput() {
  const input = await fs.promises.readFile(
    path.resolve(`${__dirname}/input.txt`),
    'utf8'
  );

  return input;
}

function advancePosition(x: number, y: number, char: string) {
  if (char === '^') {
    return [x, y + 1];
  }
  if (char === 'v') {
    return [x, y - 1];
  }
  if (char === '>') {
    return [x + 1, y];
  }
  if (char === '<') {
    return [x - 1, y];
  }
  return [x, y];
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
    const [newX, newY] = advancePosition(x, y, char);

    // Add the new house to the set
    houses.add(`${newX},${newY}`);

    // Update the current position
    x = newX;
    y = newY;
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
      // Advance Santa
      const [newX, newY] = advancePosition(x1, y1, input[i]);

      // Add the new house to the set
      houses2.add(`${newX},${newY}`);

      // Update the current position
      x1 = newX;
      y1 = newY;
    } else {
      // Advance Robo-Santa
      const [newX, newY] = advancePosition(x2, y2, input[i]);

      // Add the new house to the set
      houses2.add(`${newX},${newY}`);

      // Update the current position
      x2 = newX;
      y2 = newY;
    }
  }

  console.log(`Part 2: ${houses2.size}`);
})();
