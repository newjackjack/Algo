'''
Zip Arrays into Map
  
  
Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.

Associative arrays are sometimes called maps because a key (string) maps to a value 
'''

keys1 = ["abc", 3, "yo"]
vals1 = [42, "wassup", True]
expected1 = {
    "abc": 42,
    "3": "wassup",
    "yo": True,
  }
  
keys2 = []
vals2 = []
expected2 = {}
  

def zipArraysIntoMap(keys, values):
    empty = {}
    for i in range(len(keys)):
        empty[keys[i]] = values[i]
    
    return empty
  
print(zipArraysIntoMap(keys1, vals1))