import config from './rollup.es6.js';

const packageInfo = require('./package.json');

config.output.format = 'umd';
config.output.name = 'OverlayScrollbarsChat';
config.output.file = 'dist/OverlayScrollbarsChat.umd.js';

export default config;
