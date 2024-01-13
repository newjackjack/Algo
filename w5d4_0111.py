'''
  const str1 = "a x a";
  const expected1 = true;
  
  const str2 = "racecar";
  const expected2 = true;
  
  const str3 = "Dud";
  const expected3 = false;
  
  const str4 = "oho!";
  const expected4 = false;
'''
str1 = "a x a"
str2 = "racecar"
str3 = "Dud"
str4 = "oho!"

def isPalindrome(str):
    compare_str = ""
    #a loop going backward to store it in an empty string
    i = len(str)-1
    while i >= 0:
         compare_str += str[i]
         i-=1
        #  print(compare_str)
    if(str == compare_str):
         return True
    else:
         return False
    
print(isPalindrome(str1))
print(isPalindrome(str2))
print(isPalindrome(str3))
print(isPalindrome(str4))