import LuaParse from 'luaparse';
import fetch from 'node-fetch'
globalThis.fetch = fetch;
import * as fs from 'fs';

export default class DataLoaderService {


    rawDataUri = '/data/CensusPlusTurtle.lua';
//const raw = fetch(rawDataUri);
//const json = LuaParse.parse(raw, {
//    comments: false,
//    });
//fs.writeFile('output.json', json);



async load() {
    let raw = await fetch(this.rawDataUri)
    let json = this._parseLua(raw);
    fs.writeFile("output.json", json, (err) => {
        if (err)
            console.log(err);
        else {
            console.log("File written successfully");
          }
    });
    return json;
}

_parseLua(input) {
    let result = LuaParse.parse(input, {
        comments: false,
    });
    return result;
}
}
