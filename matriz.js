//tornar os if menores, 1 para linha, 1 para coluna, 1 para diagonais, de forma dinâmica!!!
//criar um botão para reiniciar o jogo
//sei la2.9
let button,quebraLinha, jogada = 1, vencedor = 0
let tabuleiro = new Array(3)
for(let i = 0; i < tabuleiro.length; i++){
    tabuleiro[i] = new Array(3)
}

for(let i = 0; i < tabuleiro.length; i++){
    quebraLinha = document.createElement('br')
    document.body.append(quebraLinha)
    for(let j = 0; j < tabuleiro[i].length; j++){
    button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.setAttribute('id','bt' + i + "" + j)
    button.setAttribute('class', 'btJogo' + i)
    button.setAttribute('onclick', 'marca(' + i + "," + j +")")
    button.append(document.createTextNode(""))
    document.body.append(button)
    }
}

function marca(linha, coluna){
    marcaCasa("bt" + linha + "" + coluna)
}

function marcaCasa(nomeBotao){
if(jogada % 2 == 0){
    document.getElementById(nomeBotao).innerText = "O"
    document.getElementById(nomeBotao).style.color =  "blue"
}else{
    document.getElementById(nomeBotao).innerText = "X"
    document.getElementById(nomeBotao).style.color =  "red"
}
document.getElementById(nomeBotao).disabled = true
let line = nomeBotao.charAt(2)
let column = nomeBotao.charAt(3)
jogada++
if(jogada >= 5){
    encerraJogo()
}
if(jogada >= 9){
alert("Jogo Empatado!")
}
}

function encerraJogo(){
if(document.getElementById("bt00").innerText == document.getElementById("bt01").innerText 
&& document.getElementById("bt01").innerText == document.getElementById("bt02").innerText
&& document.getElementById("bt00").innerText != ""){
alert("Jogo Finalizado! \n Vencedor: " + document.getElementById("bt00").innerText)
vencedor ++
}
if(document.getElementById("bt10").innerText == document.getElementById("bt11").innerText 
&& document.getElementById("bt11").innerText == document.getElementById("bt12").innerText
&& document.getElementById("bt10").innerText != ""){
alert("Jogo Finalizado! \n Vencedor: " + document.getElementById("bt10").innerText)
}
if(document.getElementById("bt20").innerText == document.getElementById("bt21").innerText 
&& document.getElementById("bt21").innerText == document.getElementById("bt22").innerText
&& document.getElementById("bt20").innerText != ""){
alert("Jogo Finalizado! \n Vencedor: " + document.getElementById("bt20").innerText)
}
if(document.getElementById("bt00").innerText == document.getElementById("bt11").innerText 
&& document.getElementById("bt11").innerText == document.getElementById("bt22").innerText
&& document.getElementById("bt00").innerText != ""){
alert("Jogo Finalizado! \n Vencedor: " + document.getElementById("bt00").innerText)
}
if(document.getElementById("bt02").innerText == document.getElementById("bt11").innerText 
&& document.getElementById("bt11").innerText == document.getElementById("bt20").innerText
&& document.getElementById("bt02").innerText != ""){
alert("Jogo Finalizado! \n Vencedor: " + document.getElementById("bt02").innerText)
}
if(document.getElementById("bt00").innerText == document.getElementById("bt10").innerText 
&& document.getElementById("bt10").innerText == document.getElementById("bt20").innerText
&& document.getElementById("bt00").innerText != ""){
alert("Jogo Finalizado! \n Vencedor: " + document.getElementById("bt00").innerText)
}
if(document.getElementById("bt01").innerText == document.getElementById("bt11").innerText 
&& document.getElementById("bt11").innerText == document.getElementById("bt21").innerText
&& document.getElementById("bt01").innerText != ""){
alert("Jogo Finalizado! \n Vencedor: " + document.getElementById("bt01").innerText)
}
if(document.getElementById("bt02").innerText == document.getElementById("bt12").innerText 
&& document.getElementById("bt12").innerText == document.getElementById("bt22").innerText
&& document.getElementById("bt02").innerText != ""){
alert("Jogo Finalizado! \n Vencedor: " + document.getElementById("bt02").innerText)
}
}

