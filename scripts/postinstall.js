const fs = require('fs')

fs.rmSync('./node_modules/@uniswap/universal-router-sdk/dist/universal-router-sdk.cjs.development.js')
fs.rmSync('./node_modules/@uniswap/universal-router-sdk/dist/universal-router-sdk.esm.js')
console.log(
  'Removed universal-router-sdk.cjs.development.js and universal-router-sdk.esm.js from node_modules/@uniswap/universal-router-sdk/dist/'
)
fs.copyFileSync(
  './universal-router-sdk/dist/universal-router-sdk.cjs.development.js',
  './node_modules/@uniswap/universal-router-sdk/dist/universal-router-sdk.cjs.development.js'
)
fs.copyFileSync(
  './universal-router-sdk/dist/universal-router-sdk.esm.js',
  './node_modules/@uniswap/universal-router-sdk/dist/universal-router-sdk.esm.js'
)
console.log(
  'Copied universal-router-sdk.cjs.development.js and universal-router-sdk.esm.js from universal-router-sdk/dist/ to node_modules/@uniswap/universal-router-sdk/dist/'
)
