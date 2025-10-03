var gtabuada = document.getElementById('gtabuada')
var res = document.getElementById('res')

gtabuada.addEventListener("click", clicar)

function clicar(){
    var ntabuada = Number(document.getElementById('ntabuada').value)
    res.innerHTML = `Digite um número acima: ${ntabuada} <br>`
    
    for(c = 1; c <= 10; c++){
        var op = document.createElement('option')
        op.innerHTML += `${ntabuada} x ${c} = ${ntabuada * c} <br> `
        op.value = `tab${c}`
        res.appendChild(op)
    }
}