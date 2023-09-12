import LuaParse from 'luaparse';
import fetch from 'node-fetch'
globalThis.fetch = fetch;
import * as fs from 'fs';


function _parseLua(input) {
    let result = LuaParse.parse(input, {
        comments: false,
    });
    return result;
}


async function load() {
    let raw = fs.readFileSync('CensusPlusTurtle.lua', 'utf8');
    let ast = _parseLua(raw);
    fs.writeFile("output.json", JSON.stringify(ast), (err) => {
        if (err)
            console.log(err);
        else {
            console.log("File written successfully");
          }
    });

}
load();

async function load1() {
    let raw = fs.readFileSync('CensusPlusTurtle1.lua', 'utf8');
    let ast = _parseLua(raw);
    fs.writeFile("output1.json", JSON.stringify(ast), (err) => {
        if (err)
            console.log(err);
        else {
            console.log("File written successfully");
          }
    });

}
load1();



;
