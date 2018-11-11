import config from './rollup.es6.js';
import babel from 'rollup-plugin-babel';

const packageInfo = require('./package.json');

config.output.format = 'umd';
config.output.name = 'OverlayScrollbarsChat';
config.output.file = 'dist/OverlayScrollbarsChat.umd.js';
config.plugins = [ babel() ];

export default config;
