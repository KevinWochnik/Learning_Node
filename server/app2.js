const notes = require("./note");

console.log(notes);
console.log("jestem w module app");

const mod = require("module");
console.log(mod.wrapper)

console.log('exports', exports);
console.log('filename', __filename);
console.log('require', require);