var res = document.getElementById('res')
var botao = document.getElementById('botao')

botao.addEventListener("click", clicar)

function clicar(){
    var ini = Number(document.getElementById('ninicio').value)
    var fim = Number(document.getElementById('nfim').value)
    var passo = Number(document.getElementById('npasso').value)
    
    if(ini == 0 || fim == 0 || passo == 0){
        window.alert('[ERRO] Faltam dados!')
    } else{
        res.innerHTML = "Contando: <br>"

    if (ini < fim) {
        // Contagem crescente
        for (let c = ini; c <= fim; c += passo) {
            res.innerHTML += ` Passo ${c} 👉`
        }
    } else {
        // Contagem decrescente
        for (let c = ini; c >= fim; c -= passo) {
            res.innerHTML += ` Passo ${c} 👉`
        }
        
    }
        res.innerHTML += "🏁"
    }
    
    

    

}

