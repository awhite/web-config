import prettier from 'prettier';
import fs from 'fs';
import path from 'path';
import node from '../configs/node.eslintrc';
import react from '../configs/react.eslintrc';

const flavor = process.argv[2];
const DIST_PATH = './dist';
const dir = path.resolve(DIST_PATH, flavor);

console.log(`Generating config for ${flavor}`);

const config = (() => {
  switch (flavor) {
    case 'node':
      return node;
    case 'react':
      return react;
    default:
      throw new Error(`Unrecognized type ${flavor}`);
  }
})();

const json = transform(config);
console.log(json);
saveFile(json);

function transform(config) {
  const text = prettier.format(JSON.stringify(config), { parser: 'json' });
  return text;
}

function saveFile(text) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  const filename = path.resolve(dir, '.eslintrc.json');
  fs.writeFile(filename, text, err => {
    if (err) {
      throw err;
    }
    console.log(`File generated at ${filename}`);
  });
}
