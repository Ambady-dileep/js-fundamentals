// // ==============================
// // 1. REVERSE AN ARRAY
// // ==============================
// let nums = [1, 2, 3, 4, 5];
// let reversed = [];

// for (let i = nums.length - 1; i >= 0; i--) {
//     reversed.push(nums[i]);
// }

// // console.log("Reversed array:", reversed);

// // =======================================================

// function revArr(arr){
//     let left = 0
//     let right = arr.length - 1
//     while (left < right){
//         let temp = arr[left]
//         arr[left] = arr[right]
//         arr[right] = temp
//         left++
//         right--
//     }
//     return arr
// }

// arr = [1, 2, 3, 4, 5]
// console.log(revArr(arr))

// // ==============================
// // 2. SUM OF ARRAY ELEMENTS
// // ==============================
// let numbers = [10, 20, 30, 40];
// let sum = 0;

// for (let num of numbers) {
//     sum += num;
// }

// console.log("Sum of array:", sum);

// // ==============================
// // 3. FIND MAX AND MIN
// // ==============================
// let values = [12, 5, 89, 23, 7];
// let max = values[0];
// let min = values[0];

// for (let val of values) {
//     if (val > max) max = val;
//     if (val < min) min = val;
// }

// console.log("Max value:", max);
// console.log("Min value:", min);

// // ==============================
// // 4. FIND DUPLICATES
// // ==============================
// let arr = [1, 2, 3, 2, 4, 5, 1];
// let freq = {};

// for (let item of arr) {
//     freq[item] = (freq[item] || 0) + 1;
// }

// for (let key in freq) {
//     if (freq[key] > 1) {
//         console.log("Duplicate:", key);
//     }
// }

// // ==============================
// // 5. REMOVE DUPLICATES
// // ==============================
// let unique = [];

// for (let item of arr) {
//     if (!unique.includes(item)) {
//         unique.push(item);
//     }
// }

// console.log("Unique array:", unique);

// // ==============================
// // 6. SECOND LARGEST NUMBER
// // ==============================
// function secondLargest(arr){
//     let lar = -Infinity
//     let secLar = -Infinity
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] > lar){
//             secLar = lar
//             lar = arr[i]
//         }
//         else if( arr[i] > secLar && arr[i] !== lar){
//             secLar = arr[i]
//         }
//     }return secLar === -Infinity ? null : secLar;
// }

// let arr = [10, 40, 30, 20]
// console.log(secondLargest(arr))

// // ==============================
// // 7. SORTED ASCENDING CHECK
// // ==============================
// function isSorted(arr){
//     for (let i = 0; i < arr.length - 1; i++){
//         if (arr[i] > arr[i+1]){
//             return false
//         }
//     }return true
// }

// let arr = [2, 4, 6, 8, 10]
// console.log(isSorted(arr))

// // ==============================
// // 8. FREQUENCY COUNT
// // ==============================
// function freqCount(arr){
//     let freq = {}
//     for (let i of arr){
//         freq[i] = (freq[i] || 0) +1
//     }
//     return freq
// }
// let arr = ["apple", "banana", "apple", "orange", "banana"]
// console.log(freqCount(arr))

// // ==============================
// // 9. MOVE ZEROS TO END
// // ==============================
// function moveZeros(arr){
//     let result = []
//     for(let i of arr){
//         if (i !== 0){
//             result.push(i)
//         }
//     }
//     let zeroCount = arr.length - result.length
//     for (let i = 0;i < zeroCount; i++){
//         result.push(0)
//     }
//     return result
// }

// let arr = [0, 1, 0, 3, 12]
// console.log(moveZeros(arr))

// // ================================================
// // 10. COUNT POSITIVE, NEGATIVE, AND ZERO VALUES
// // ================================================
// function countTypes(arr){
//     let result = {
//         positive: 0,
//         negative: 0,
//         zero: 0
//     }
//     for (let num of arr){
//         if (num > 0){
//             result.positive++
//         }else if (num < 0){
//             result.negative++
//         }else{
//             result.zero++
//         }
//     }return result
// }

// let arr = [1, -2, 0, 5, -8, 0, 3]
// console.log(countTypes(arr))

// // ===================================
// // 11. FIND THE SMALLEST ELEMENT
// // ===================================
// function findSmallest(arr){
//     if (arr.length === 0) return null
//     let smallest = arr[0]
//     for (let i = 1; i < arr.length; i ++){
//         if(arr[i] < smallest){
//             smallest = arr[i]
//         }
//     }return smallest
// }
// arr = [7, 3, 9, 2, 8]
// console.log(findSmallest(arr))

// // ================================================
// // 12. FIND THE INDEX OF THE FIRST OCCURRENCE
// // ================================================
// function firstOccIndex(arr,target){
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] === target){
//             return i
//         }
//     }return -1
// }

// let arr = [4, 6, 8, 6, 9]
// let target = 6
// console.log(firstOccIndex(arr,target))

// // =======================================
// // 13. CHECK IF ALL ELEMENTS ARE UNIQUE
// // =======================================
function isUnique(arr){

}
const arr = [1, 2, 3, 4, 5]
console.log(isUnique(arr))

// // ================================================
// // 14. COUNT HOW MANY TIMES A TARGET APPEARS
// // ================================================
// function targetCount(arr){

// }
// let arr = [5, 2, 5, 3, 5, 4]
// let target = 5
// console.log(targetCount(arr))

// // =============================================
// // 15. REPLACE ALL NEGATIVE NUMBERS WITH 0
// // =============================================
// function replaceNegative(arr){

// }
// let arr = [3, -1, 4, -5, 2]
// console.log(replaceNegative(arr))