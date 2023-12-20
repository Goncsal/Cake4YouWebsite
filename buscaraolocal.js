var array = JSON.parse(localStorage.getItem('users'))
console.log(array)

console.log(array[0].Username)

$('#nomelocal').text(array[0].Username)
$('#emaillocal').text(array[0].Email)
$('#passlocal').text(array[0].Password)