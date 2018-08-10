const packageInfo = require( './package.json' );
const banner = `/*! ${packageInfo.name} v${packageInfo.version} | (c) 2018-${new Date().getFullYear()} ${packageInfo.author} | ${packageInfo.license} license (see LICENSE) */`;

export default {
  input: 'src/OverlayScrollbarsChat.js',
  output: {
    file: 'dist/OverlayScrollbarsChat.js',
    format: 'es',
    banner
  }
};
