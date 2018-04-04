var input = [
  '0001',
  'Roman Alamsyah ',
  'Bandar Lampung',
  '21/05/1989',
  'Membaca',
];

function dataHandling2(input) {

  input.splice(1, 1, 'Roman Alamsyah Elsharawy');
  input.splice(2, 1, 'Provinsi Bandar Lampung');
  input.splice(4, 1, 'Pria');
  input.splice(5, 0, 'SMA Internasional Metro');
  console.log(input);

  // split tanggal
  var ttlSplit = input[3].split('/');
  // mengganti angka bulan menjadi nama bulan
  switch (ttlSplit[1]) {
    case '01': console.log('Januari');

    break;
    case '02': console.log('Februari');

    break;
    case '03': console.log('Maret');

    break;
    case '04': console.log('April');

    break;
    case '05': console.log('Mei');

    break;
    case '06': console.log('Juni');

    break;
    case '07': console.log('Juli');

    break;
    case '08': console.log('Agustus');

    break;
    case '09': console.log('September');

    break;
    case '10': console.log('Oktober');

    break;
    case '11': console.log('November');

    break;
    case '12': console.log('Desember');

    break;
    default: console.log('error');

  }

  var ttlSplitSort = ttlSplit.sort(function(a,b){return b-a})
  console.log(ttlSplitSort);


  // join hasil split tanggal
  var ttlSplitJoin = input[3].split('/').join('-');
  console.log(ttlSplitJoin);

  // pembatasan output karakter tidak lebih dari 15
  var inputSlice = input[1].slice(0, 15);
  console.log(inputSlice);
}

dataHandling2(input);

/**
* keluaran yang diharapkan (pada console)
*
* ['0001', 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung', '21/05/1989', 'Pria', 'SMA Internasional Metro']
* Mei
* [1989, 21, 05]
* 21-05-1989
* Roman Alamsyah
*/
