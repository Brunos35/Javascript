function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (formano.value.length == 0 || formano.value > ano){
        window.alert('[ERRO] verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width ='250px'
        img.style.height ='250px'
        img.style.borderRadius = '50%'
        img.style.paddingTop = '8px'
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'homem-criança.jpg')
            }else if(idade >= 10 && idade < 60){
                //adulto
                img.setAttribute('src', 'homem-joven.jpg')
            }else if(idade >=60){
                //idoso
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        }else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'mulher-criança.jpg')
            }else if(idade >= 10 && idade < 60){
                //adulto
                img.setAttribute('src', 'mulher-jovem.jpg')
            }else if(idade >=60){
                //idoso
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`
        res.appendChild(img)
    }
}