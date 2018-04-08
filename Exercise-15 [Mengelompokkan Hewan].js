function groupAnimals(animals) {

  var newArr=[];

 //push element awal newArr dengan element-1 array animals
  newArr.push(animals[0][0]);

  // mencari klasifikasi kelas induk
  for (var i = 1; i < animals.length; i++) {
    if (!newArr.includes(animals[i][0])) {
      newArr.push(animals[i][0]);
    }
  }

  // mencari element yg terdapat(sama) pada kelas induk
  var bigArr = []
  for (var i = 0; i < newArr.length; i++) {
    var smallArr = []
    for (var j = 0; j < animals.length; j++) {
      if (animals[j][0] == newArr[i][0]) {
        smallArr.push(animals[j])
      }
    }
    bigArr.push(smallArr)
  }

  return bigArr.sort()

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda','kancil'], ['unta'] ]
