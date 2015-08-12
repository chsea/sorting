function bubbleSort(arr) {
  var sorted;
  do {
    sorted = true;
    for (var i = 1; i < arr.length; i++) {
      if (!compare(arr, i)) sorted = false;
    }
  }while(!sorted);
  return arr;
}

function swap(arr, index) {
    var temp = arr[index];
    arr[index] = arr[index - 1];
    arr[index - 1] = temp;
}

function compare(arr, i) {
  if (arr[i] < arr[i - 1]) {
    swap(arr, i);
    return false;
  }
  return true;
}

function merge(arr1, arr2) {
  var newArr = [];
  while(arr1.length && arr2.length) {
    var elementToPush = arr1[0] <= arr2[0] ? arr1.shift() : arr2.shift();
    newArr.push(elementToPush);
  }
  return newArr.concat(arr1).concat(arr2);
}

function split(arr) {
  var left, right, centerPoint;
  centerPoint = Math.ceil(arr.length/2);
  right = arr.slice(centerPoint);
  return [arr, right];
}

function mergeSort(arr) {
  if(arr.length <= 1){
    return arr;
  }
  var left = mergeSort(split(arr)[0]);
  var right = mergeSort(split(arr)[1]);
  return merge(left, right);
}
