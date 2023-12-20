var array = JSON.parse(localStorage.getItem('users'))
console.log(array)

console.log(array[0].Username)

$('#adreslocal').text(array[0].Adress)
