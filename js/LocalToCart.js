let total = 0
$(document).ready(function() {

    loadTableRow('BabaCamelo');
    loadTableRow('BoloAmendoa');
    loadTableRow('BoloAnanas');
    loadTableRow('ToucinhoCeu');
    loadTableRow('TarteMaca');
    loadTableRow('Queijada');
    loadTableRow('PudimAbade');
    loadTableRow('BoloAmendoa');
    loadTableRow('PastelNata');
    loadTableRow('PaoLo');
    loadTableRow('PaoDeus');
    loadTableRow('BoloRei');
    loadTableRow('BoloMorango');
    loadTableRow('BoloLaranja');
    loadTableRow('BoloChocolate');

    function loadTableRow(key) {

      // Check if the key exists in local storage
      if (localStorage.getItem(key) !== null) {
        // Retrieve the value from local storage
        var value = localStorage.getItem(key);

        // Create a new table row with the loaded data
        var newRow = $(" <tr><td class='name-pr'><a href='#'>"+ value +"</a></td><td class='price-pr'><p>10,79€</p></td><td class='quantity-box'><input type='number' size='3' value='1' min='1' max='1' step='1' class='c-input-text qty text'></td><td class='total-pr'><p>€10,79</p></td>");

        // Append the new row to the table body
        $('#myTable tbody').append(newRow);
        total = total + 10.79
        $('.stotal').text(total)

      }
    }




  });












// a = localStorage.getItem('BabaCamelo')
// console.log(a)
// $('#tablee tbody').append('<tr><td> dasdasd </td><td> 10,79€</td></tr>');




// a = localStorage.getItem('BabaCamelo')
// console.log(a)
// $('#table! tbody').append('<tr><td>'+ a +'</td><td> 10,79€</td></tr>');
// $(document).ready(function() {
//     a = localStorage.getItem('BabaCamelo')
//     console.log(a)
//     $('#table! tbody').append('<tr><td>'+ JSON.stringify(a)+'</td><td> 10,79€</td></tr>');
//     if (localStorage.getItem('BabaCamelo') != null){
//         a = localStorage.getItem('BabaCamelo')
//         console.log(a)
//         $('#table! tbody').append('<tr><td>'+ a +'</td><td> 10,79€</td></tr>');
//     }
//     if (localStorage.getItem('BoloAmendoa') != null){
//         $('#table! tbody').append('<tr><td>New Name</td><td>New Age</td></tr>');
//     }
//     if (localStorage.getItem('BoloAnanas') != null){
//         $('#table! tbody').append('<tr><td>New Name</td><td>New Age</td></tr>');
//     }

//   });

$('#del').on('click', function(){
  delTableRow('BabaCamelo');
  delTableRow('BoloAmendoa');
  delTableRow('BoloAnanas');
  delTableRow('ToucinhoCeu');
  delTableRow('TarteMaca');
  delTableRow('Queijada');
  delTableRow('PudimAbade');
  delTableRow('BoloAmendoa');
  delTableRow('PastelNata');
  delTableRow('PaoLo');
  delTableRow('PaoDeus');
  delTableRow('BoloRei');
  delTableRow('BoloMorango');
  delTableRow('BoloLaranja');
  delTableRow('BoloChocolate');

  function delTableRow(key) {

    // Check if the key exists in local storage
    if (localStorage.getItem(key) !== null) {
      // Retrieve the value from local storage
      localStorage.removeItem(key);

      location.reload()

    }
  }

})