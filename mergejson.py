import luaparser
import json
from luaparser import ast
from ast import parse
from ast2json import ast2json
from ast2json import str2json
import subprocess



with open('CensusPlusTurtle.lua') as file1:
    lines = file1.read()
    tree = str(ast.parse(lines))
    #print(ast.to_pretty_str(tree))
    ast = ast2json(parse(tree))
    #gelos = ast2json(tree) 
    #with open('Output.lua', 'w') as file3:
    #   file3.write(json.dumps(gelos, indent=4))
    #print (json.dumps(ast, indent=4))
#result = subprocess.check_output(['lua', 'makejson.lua'])
#print(result)


#with open('CensusPlusTurtle.lua') as file1:
    

    #lines = file1.read().split("\n")        
    #for line in lines:
        #counter += 1 
        