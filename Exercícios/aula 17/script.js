let num = document.getElementById('fnum')
let list= document.getElementById('sellist')
let res = document.querySelector('div#res')
let valores = []
let opt = document.getElementById('opt')

function isNumero(n){
    if(Number(n)>= 1 && Number(n)<= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    
    if(isNumero(num.value) && !inLista(num.value , valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML = ''
    }else{
    window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    
    if(valores.length == 0){
        window.alert('Adicione um valor antes de finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
            maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML =''
        res.innerHTML += `<p>Ao todo temos ${tot} número(s) cadastrado(s) \u{1F47E}</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior} \u{1F973}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor} \u{1F90F}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma} \u{1F92F}</p>`

    }

}