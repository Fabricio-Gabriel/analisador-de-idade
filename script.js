
function verificando() {
    var anoDeNas = document.getElementById('ano')
    var radsex = document.getElementsByName('radsex')
    var res = document.querySelector('div#res')
    var img = document.getElementById('imga')
    var data = new Date()
    var valor = Number(anoDeNas.value)
    var idade = data.getFullYear() - valor
    var genero = ''
    if (valor == 0 || valor > data.getFullYear()) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else if (idade <= 10 && radsex[0].checked) {
        var genero = 'Homem'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        img.src = 'hcria.txt.png'
    } else if (idade > 10 && idade <= 18 && radsex[0].checked) {
        var genero = 'Homem'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        img.src = 'hado.png'
    } else if (idade > 18 && idade <= 64 && radsex[0].checked) {
        var genero = 'Homem'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        img.src = 'hadu.png'
    } else if (idade > 64 && idade < 120 && radsex[0].checked) {
        var genero = 'Homem'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        img.src = 'hvei.png'
    }
    if (idade <= 10 && radsex[1].checked) {
        var genero = 'Mulher'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        img.src = 'mcria.png'
    } else if (idade > 10 && idade <= 18 && radsex[1].checked) {
        var genero = 'Mulher'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        img.src = 'mado.png'
    } else if (idade > 18 && idade <= 64 && radsex[1].checked) {
        var genero = 'Mulher'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        img.src = 'madul.png'
    } else if (idade > 64 && idade < 120 && radsex[1].checked) {
        var genero = 'Mulher'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        img.src = 'mveia.png'
    }
}