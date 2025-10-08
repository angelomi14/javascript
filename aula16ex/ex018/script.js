    var res = document.getElementById('res')
    var finish = document.getElementById('finish')
    var botao = document.getElementById('botao')
    var botao2 = document.getElementById('botao2')
    var lista = []

    botao.addEventListener("click", adicionar)
    botao2.addEventListener("click", finalizar)

    function adicionar(){

        var n = document.getElementById('anum')
        var ndigi = Number(n.value)
        
        if(ndigi < 1 || ndigi > 100 || n.value.length == 0){
            alert('Por favor, digite um número entre 1 e 100!')
        }else if(lista.includes(ndigi)){
            alert('Número já adicionado!')
        }else{
            lista.push(ndigi)
            var op = document.createElement('option')
            op.innerHTML += `O valor adicionado é ${ndigi}`
            res.appendChild(op)
        }

        n.value=''
        n.focus()
    }

    function finalizar(){
        if(lista.length == 0){
            alert('Adicione valores antes de finalizar!')
        }else{
            var maior = lista[0]
            var menor = lista[0]
            var soma = 0
            var media = 0
            for(var pos in lista){
                soma += lista[pos]
                if(lista[pos] > maior)
                    maior = lista[pos]
                if(lista[pos] < menor)
                    menor = lista[pos]
            }
        }
        media = soma / lista.length
        finish.innerHTML = ''
        finish.innerHTML += `<p>Ao todo temos ${lista.length} número cadastrados</p>`
        finish.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        finish.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        finish.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        finish.innerHTML += `<p>A media dos valores digitados é ${media}.</p>`

    }
