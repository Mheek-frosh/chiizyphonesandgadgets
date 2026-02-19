const path = require("path");
const nextBin = path.join(__dirname, "..", "node_modules", "next", "dist", "bin", "next");
process.argv = [process.argv[0], process.argv[1], "start", ...process.argv.slice(2)];
require(nextBin);
