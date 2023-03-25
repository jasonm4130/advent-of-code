import fs from 'fs';
import path from 'path';

async function readInput() {
  const input = await fs.promises.readFile(
    path.resolve(`${__dirname}/input.txt`),
    'utf-8'
  );
  return input;
}

function processInput(input: string) {
  const boxes = input
    .split('\n')
    .map((line) => {
      const [l, w, h] = line.split('x').map((n) => parseInt(n, 10));
      return [l, w, h];
    })
    .map((box) => {
      const [l, w, h] = box;
      return {
        l,
        w,
        h,
        area: 2 * (l * w + w * h + h * l),
        slack: Math.min(l * w, w * h, h * l),
      };
    });

  return boxes;
}

(async () => {
  const input = await readInput();

  const boxes = processInput(input);

  const totalArea = boxes.reduce((acc, box) => acc + box.area + box.slack, 0);

  console.log(`Part 1: ${totalArea}`);

  const totalRibbon = boxes.reduce((acc, box) => {
    const { l, w, h } = box;
    const bow = l * w * h;
    const ribbon = 2 * Math.min(l + w, w + h, h + l);
    return acc + bow + ribbon;
  }, 0);

  console.log(`Part 2: ${totalRibbon}`);
})();
