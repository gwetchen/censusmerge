var parser = require('luaparse');
var ast = parser.parse('i = 0');
console.log(JSON.stringify(ast));

let result = LuaParse.parse(input, {
    comments: false,
});
return result;

