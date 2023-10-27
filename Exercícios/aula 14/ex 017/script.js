alert('olá')
function calcular(){
var num = document.getElementById('txtn')
tab = document.getElementById('seltab')

if(num.value.length == 0){
    alert('Insira um Número!')
}else{
    var n = Number(num.value)
    tab.innerHTML = ''
    for(var c = 1; c <= 10; c++){
    var item = document.createElement('option')
    item.text = `${n} x ${c} = ${n*c}`
    item.value = `tab${c}`
    tab.appendChild(item)
    }
}


}