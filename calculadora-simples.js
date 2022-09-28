function numeros(n){
    var cont = document.getElementById('digite').innerHTML
    document.getElementById('digite').innerHTML = cont + n
}
function zerar(){
    document.getElementById('digite').innerHTML = " "
}
function apagar(){
    var res = document.getElementById('digite').innerHTML
    document.getElementById('digite').innerHTML = res.substring(0, res.length -1)
}
function operacao(){
    var res = document.getElementById('digite').innerHTML
    if (res){
        document.getElementById('digite').innerHTML = eval(res)
    }
}