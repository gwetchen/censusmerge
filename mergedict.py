d = {}
counter = 0

with open('CensusPlusTurtle.lua') as file1:
    lines = file1.read().split("\n")        
    for line in lines:
        counter += 1 
        if '[3] =' in line:
            #print (lines[counter -4])
            d[lines[counter -4]] = [lines[counter -3], lines[counter -2], lines[counter -1]]
        elif ('[1] =') in line:
            print ("yes")
        elif ('[2] =') in line:
             print ("no")
        elif ('						') in line:
            print ("hi")
        elif line == (''): 
            print ("empty")
        else: d[line] = None

#print(d)

with open('Output.lua', 'w') as file3:
        for key, value in d.items():
             file3.write('%s:%s\n' % (key, value))