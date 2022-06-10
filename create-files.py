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
        f.write('''## '''+i['title']+'''''')
        Tags = ""
        for i in i['topicTags']:
            Tags += '''<span class="tag-is-success">'''+i['name']+'''</span>'''
        if(Tags!= ""): f.write('''\n'''+Tags)
        f.write('\n\n')
        f.write('### Inputs')
        f.write('\n\n')
        f.write('### Sub-problems')
        f.write('\n\n')
        f.write('### Edge Cases')
        f.write('\n\n')
        f.write('### Further Readings')
        f.write('\n\n')
        


