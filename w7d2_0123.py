
nums1 = [-2, 5, 7, 0, 3]
expected1 = 2

nums2 = [9, 9]
expected2 = -1

nums3 = [3,2,1,1]
expected3 = -1
nums4 = [-2, 5, 7, 0, 3, -2, 0, 3, 2]
expected4 = 1



def balanceIndex(nums):
    # address the num arr that its length is less than 3
    # avoid some cases entering the nested for loop 
    if(len(nums)< 3):
        return -1
    
    # iterate thru both side 
    sumLeft = 0
    sumRight = 0
    for i in range(len(nums)):
        sumLeft += nums[i]
        #sum the left
        #iterate the rest from i+1 
        #console.log("sumLeft: ",sumLeft)
        j = i + 1
        for j in range(len(nums)):
            sumRight += nums[j]
            if(sumLeft == sumRight):
                return i
            else:
                sumRight = 0
        # console.log("sumRight: ",sumRight)
    return -1

print(balanceIndex(nums1))
print(balanceIndex(nums2))
print(balanceIndex(nums3))
print(balanceIndex(nums4))