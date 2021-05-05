//Reação a algum acontecimento
//onclick pode colocar o comando js direto
//this faz referência ao proprio elemento
function clicou() {
    document.querySelector(".evento").innerHTML = "Novo botão"
}

//onkeyup é quando finaliza a digitação
function digitou(e) {
//    console.log("digitou")
    if(e.key == "Enter") {
        let texto = document.getElementById("campo").value;
        console.log(texto)
    }
}