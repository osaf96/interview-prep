# read from file
import json
f = open('leetcode.json', 'r')
#  convert to json
data = json.load(f)
data = data['questions']
f.close()
# iterate over the data object
for i in data:
    # create a file 
    f = open('test.txt', 'a')
    if(i['difficulty'] == 'Medium'):
        f.write('''##'''+i['title']+'''''')
        Tags = ""
        for i in i['topicTags']:
            Tags += i['name']+", "
        Tags = Tags[:-2]
        f.write('''\nTags:'''+Tags)
        f.write('\n\n')
        


