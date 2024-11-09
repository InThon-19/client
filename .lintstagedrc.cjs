const path = require('path');

/**
 * @param {string[]} filenames
 * @returns {string}
 */
const buildLintCommand = (filenames) => {
  const fileOptions = filenames.map((f) => `--file ${path.relative(process.cwd(), f)}`).join(' ');
  return `next lint --fix ${fileOptions}`;
};

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildLintCommand],
};
