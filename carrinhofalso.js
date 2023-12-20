let price = parseFloat(0)
let numitems = parseInt(0)

$('.cart').on('click', function(){ //quando clicam em qqlr botão c a class .cart isto tudo acontece
    price = parseFloat(price) + parseFloat(10.79) //o 10,79 é o preco dos meus artigos todos ent fica mais facil, senao era preciso ires uscar o id de cada um dos artigos(onde tens o preço) e somares isso á variavel
    numitems = parseFloat(numitems) + parseFloat(1)
    $('#numItem').text(parseFloat(numitems)) // o #numitem é o id do sitio onde tou a meter o numero de artigos
    $('#price').text(parseFloat(price)) // o #price é o id do sitio onde tou a meter o preço total
    console.log("clicouuuuu")
})

function submiti(){ // qnd clicam no submeter a compla é isto q acontece
    alert('Pedido Submetido! Conseguirá ver e acompanhar os seus pedidos dentro de 2h.')
    location.reload()
}

// se os teus artigos tiverem preços diferentes e diria pra fzrs assim: metes para a função ativar pra qqlr botão, mas atribuis aos botoes todos um valor(o preço) e dps fazer this.value ou this.val, n me lembro bem(q é tipo ir buscar o valor do botao em especifico q deu trigger na função), assim tens o valor especifico q queres pra cada botao