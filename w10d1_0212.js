// given two sorted arrays that may have duplicate values, merge them and remove any duplicates

var arr1 = [1, 3, 3, 5, 8, 10,];
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];
//output = [1, 3, 5, 8, 10]

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];
//output = [1, 3, 4, 5, 8, 10]

// create a function that takes 2 sorted arrays
function mergeDedupe(left, right) {
    let i = 0;
    let j = 0;
    let expectedArr = [];
    while(i < left.length && j < right.length){
        //A loop to iterate thru the length of both arrays(while loop arr1.length && arr2.length)
        // this if/else check the value
        //if the left[i] is smaller than right[j] push element of i
        if(left[i] < right[j]){
            // if left[i] is equal to the last index at expectedArr, we omit the current i and continue
            if(left[i] === expectedArr[expectedArr.length-1]){
                i++;
            }
            //if left[i] is not already in expectedArr, push left[i]
            else{
            expectedArr.push(left[i])
            i++;
            }
        }
        //if the left[i] is greater than right[j] push element of j
        else if(left[i] > right[j] ){
            //if right[j] is equal to the last element in expectedArr, omit the current one
            if(right[j] === expectedArr[expectedArr.length-1]){
                j++;
            }
            else{
                expectedArr.push(right[j])
                j++;
            }
        }
        //if element in left is the same as right
        else{//(left[i] === right[j])
            //
            if(left[i] === expectedArr[expectedArr.length-1]){
                i++;
                j++;
            }
            else{
                expectedArr.push(left[i]);
                i++;
                j++;
            }
        }
    }
    //address left side have not met the end but right is at the end
    while( i < left.length){
        if(left[i] === expectedArr[expectedArr.length-1]){
            i++;
        }
        expectedArr.push(left[i])
        i++;
    }
    while( j <right.length){
        if(right[j] === expectedArr[expectedArr.length-1]){
            j++;
        }
        expectedArr.push(right[j])
        j++
    }
    return expectedArr
}

// try out some other tests
console.log(mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5])); // [ 1, 3, 4, 5, 8, 10 ]
console.log(mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6])); // [1, 2, 3, 4, 5, 6, 8, 10, 12]