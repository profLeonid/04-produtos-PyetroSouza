'use strict'

function adicionarProduto(){
    if (produto.value = ""){
        alert("Coloca o produto mano")
    }
    const produto = document.getElementById("produto")
    const lista = document.getElementById("lista")

    const span = document.createElement('span')
    span.textContent = produto.value
    span.className = 'bg-blue-200 px-8 py-2 '

    lista.appendChild(span)
    produto.value = ""
}