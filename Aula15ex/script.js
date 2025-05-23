function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number (fano.value) > ano){
        window.alert("ERRO! Verifique os dados e tente novamente!")
    }else{
       var fsex = window.document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex [0].checked){
            genero = "Homem"
            if(idade >= 0 && idade < 10 ){
                //Criança
                img.setAttribute('src', 'Criança-homem.png')
            }else if ( idade < 21){
                //jovem
                img.setAttribute('src', 'Jovem-homem.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'Adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'Idoso.png')
            }
       }else if(fsex[1].checked){
             genero = "Mulher"
            if(idade >= 0 && idade < 10 ){
                //Criança
                img.setAttribute('src', 'Criança-mulher.png')
            }else if ( idade < 21){
                //jovem
                   img.setAttribute('src', 'Jovem-mulher.png')
            }else if (idade < 50){
                //Adulto
                  img.setAttribute('src', 'Adulta.png')
            } else {
                //Idoso
                 img.setAttribute('src', 'Idosa.png')
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }

}