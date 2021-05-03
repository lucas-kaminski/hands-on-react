//DOM = Document Object Model


//Pegar a tag por id (#)
console.log(document.getElementById("exemplo"));
//Pega o valor da tag
console.log(document.getElementById("exemplo").innerHTML);
//Altera o valor
document.getElementById("exemplo").innerHTML = "<div>Lucas</div>";

//pega pela class name (.) (retorna um array) 
console.log(document.getElementsByClassName("lista")[1].innerHTML)

//pela tag
console.log(document.getElementsByTagName("h2")[0].innerHTML)

//pelo nome
console.log(document.getElementsByName('nome'))