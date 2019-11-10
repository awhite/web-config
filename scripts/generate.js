import prettier from 'prettier';
import fs from 'fs';
import path from 'path';
import flavorConfigs from '../configs';

const DIST_PATH = './dist';

generateConfigs();

function generateConfigs() {
  const flavorToGenerate = process.argv[2] || 'all'; // what type of project
  Object.keys(flavorConfigs).some(flavor => {
    if (flavor === flavorToGenerate || flavorToGenerate === 'all') {
      console.log(`Generating configs for ${flavor}`);
      generateConfigsForFlavor(flavor);
      if (flavorToGenerate !== 'all') {
        return;
      }
    }
  });
}

function generateConfigsForFlavor(flavor) {
  const configs = getConfigs(flavor);
  const dir = path.resolve(DIST_PATH, flavor);
  const typeToGenerate = process.argv[3] || 'all'; // which configs should be generated
  Object.keys(configs).some(configType => {
    if (typeToGenerate === configType || typeToGenerate === 'all') {
      console.log(`Generating ${configType} config`);
      generateOne({ configType, configs, dir });
      if (typeToGenerate !== 'all') {
        return true;
      }
    }
  });
}

function getConfigs(flavor) {
  if (!(flavor in flavorConfigs)) {
    throw new Error(`Unrecognized type ${flavor}`);
  }
  return flavorConfigs[flavor];
}

function generateOne({ configs, configType, dir }) {
  const json = jsonify(configs[configType]);
  console.log(json);
  saveFile({ text: json, configType, dir });
}

function jsonify(config) {
  const text = prettier.format(JSON.stringify(config), { parser: 'json' });
  return text;
}

function saveFile({ configType, text, dir }) {
  const filenames = {
    eslint: '.eslintrc.json',
    prettier: '.prettierrc'
  };

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  const filename = path.resolve(dir, filenames[configType]);
  fs.writeFile(filename, text, err => {
    if (err) {
      throw err;
    }
    console.log(`File generated at ${filename}`);
  });
}
