function bblSort(arr) {
for (var i = 0; i < arr.length; i++) {
for (var j = 0; j < (arr.length - i - 1); j++) {
if (arr[j] > arr[j + 1]) {
	var temp = arr[j]
	arr[j] = arr[j + 1]
	arr[j + 1] = temp
}}}
console.log("After - "+arr);
}
var arr = [234, 43, 55, 63, 5, 6, 235, 547];
console.log("Bubble sort");
console.log("Before - "+arr);
bblSort(arr);

