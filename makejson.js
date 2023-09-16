import LuaParse from 'luaparse';
import fetch from 'node-fetch'
globalThis.fetch = fetch;
import * as fs from 'fs';
import jsonMerger from 'json-merger';

function _parseLua(input) {
    let result = LuaParse.parse(input, {
        comments: false,
    });
    return result;
}

function load(x) {
    let raw = fs.readFileSync(x, 'utf8');
    let ast = _parseLua(raw);    
    return(ast);
}

function merge(ast1, ast2){
    let result = jsonMerger.mergeObjects([ast1, ast2])
    fs.writeFile("result.json", JSON.stringify(result), (err) => {
        if (err)
            console.log(err);
        else {
            console.log("File written successfully");
          }
    })
}

function main() {
    merge(load('CensusPlusTurtle.lua'), load('CensusPlusTurtle1.lua'));
}

main();

