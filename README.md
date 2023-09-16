# censusmerge

Simple tool for merging two Lua Tables created by Lexie's [CensusPlusTurtle](https://github.com/Lexiebean/CensusPlusTurtle).

Run `npm install`, put "CensusPlusTurtle.lua" and "CensusPlusTurtle1.lua"  in the same folder and run `node makejson.js`.

"CensusPlusTurtle1.lua" should usually be the newer one as it will override values found in the other file.

You can find a fork of [turtle-census](https://github.com/gwetchen/turtle-census) that reads the resulting json file [here](https://github.com/gwetchen/turtle-census/tree/censusjson).