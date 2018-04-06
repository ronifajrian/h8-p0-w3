function mengelompokkanAngka(arr) {

  newArr = [];
  arr3 = [];
  arrGen = [];
  arrGanj = [];
    for (var j = 0; j < arr.length; j++) {

      if (arr[j] % 3 == 0) {
        arr3.push(arr[j]);
      } else
      if (arr[j] % 2 == 0) {
        arrGen.push(arr[j]);
      } else
      if (arr[j] % 2 == 1) {
        arrGanj.push(arr[j]);
      }

    }
    newArr.push(arrGen,arrGanj,arr3);
    return newArr;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
