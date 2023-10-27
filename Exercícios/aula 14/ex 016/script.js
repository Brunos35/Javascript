function contar(){
    var inicio = window.document.getElementById('txtn1')
    var fim = window.document.getElementById('txtn2')
    var passo = window.document.getElementById('txtpasso')
    var res = document.getElementById('res')
    res.style.padding = '5px'

    if(inicio.value.length == 0|| fim.value.length == 0 || passo.value.length == 0){
    res.innerHTML = 'Impossivel contar'
    //alert('[ERRO] Faltam dados')
    
    }else{
        res.innerHTML = `Contando: <br>`
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(passo<=0){
            alert = ('Passo inválido! Coniderando PASSO igual a 1')
            p = 1
        }

        if(i < f){

            for(var c = i; c <= f ; c += p){//contagem crescente
                res.innerHTML += ` ${c} \u{1F449}`  
            }
        }else{

            for(var c = i; c >= f ; c -= p){//contagem decrescente
                res.innerHTML += ` ${c} \u{1F449}`  
            }
            
        }
        res.innerHTML += `\u{1F44D}`
    }
}
