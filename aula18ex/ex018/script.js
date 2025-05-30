function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')

    if(inicio.Value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('ERRO! Faltando dados!')
    } else {
        window.alert('Tudo ok')
    }

}