function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')  //ou document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("ERRO")
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade <11){
                img.setAttribute('src', 'crianca_h.jpg')
            }
            else if (idade < 21){
                img.setAttribute('src', 'jovem_h.jpg')
            }
            else if (idade < 60){
                img.setAttribute('src', 'homem.jpg')
            }
            else{
                img.setAttribute('src', 'idoso.jpg')
            }
        }
        else{
            genero = "mulher"
            if (idade >= 0 && idade <11){
                img.setAttribute('src', 'crianca_m.jpg')
            }
            else if (idade < 21){
                img.setAttribute('src', 'jovem_m.jpg')
            }
            else if (idade < 60){
                img.setAttribute('src', 'mulher.jpg')
            }
            else{
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}