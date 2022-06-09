# read from file
import json
f = open('leetcode.json', 'r')
#  convert to json
data = json.load(f)
data = data['questions']
f.close()
# iterate over the data object
for i in data:
    if(i['difficulty'] == 'Medium'):
        fileName = i['questionId']+'-'+i['titleSlug']+'.md'
        f = open('leetcode.txt', 'w')
        # save the file
        contentFile = '''---
        tree_title: '''+i['titleSlug']+'''
        description: 
        last_modified: 2022-06-09T21:23:28.2328
        ---

        # '''+i['titleSlug']+'''
        '''

        f.write(str(contentFile))
        f.close()


