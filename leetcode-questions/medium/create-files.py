# read from file
import json
f = open('leetcode.json', 'r')
#  convert to json
data = json.load(f)
data = data['questions']
f.close()
# iterate over the data object
offset = 0
endOffset = 10
start = 0
for i in data:
    if(i['difficulty'] == 'Medium') and start >= offset and start <= endOffset:
        
        fileName = i['questionId']+'.md'
        f = open(fileName, 'w')
        # save the file
        contentFile = '''---
tree_title: '''+i['titleSlug']+'''
description: description
last_modified: 2022-06-09T21:23:28.2328
---

# '''+i['title'].replace(":","")+'''

## Contents
'''

        f.write(str(contentFile))
        f.close()
        start += 1
