const calcularTriangulos = () => {
    let lado1= parseInt(document.getElementById("medida1").value);
    let lado2= parseInt(document.getElementById("medida2").value);
    let lado3= parseInt(document.getElementById("medida3").value);

    if (lado1 < lado2+lado3 && lado2<lado1+lado3 && lado3<lado1+lado2){
        document.getElementById("resposta").innerHTML = "Resposta:\n É um triângulo."
    }
    else{
        document.getElementById("resposta").innerHTML = "Resposta:\n Não é um triângulo."
    }
}

const limpar = () => {
    let vazio="";
    document.getElementById("medida1").value=vazio;
    document.getElementById("medida2").value=vazio;
    document.getElementById("medida3").value=vazio;

    document.getElementById("resposta").innerHTML=vazio;
}

const calcularTriangulosComEnter = (event) => {
    let key=event.key;
    if (key == "Enter"){
    let lado1= parseInt(document.getElementById("medida1").value);
    let lado2= parseInt(document.getElementById("medida2").value);
    let lado3= parseInt(document.getElementById("medida3").value);

    if (lado1 < lado2+lado3 && lado2<lado1+lado3 && lado3<lado1+lado2){
        document.getElementById("resposta").innerHTML = "Resposta:\n É um triângulo."
    }
    else{
        document.getElementById("resposta").innerHTML = "Resposta:\n Não é um triângulo."
    }
    }
}

const okButton = document.getElementById("ok");

okButton.addEventListener("click", calcularTriangulos);

const limparButton = document.getElementById("limpar");

limparButton.addEventListener("click", limpar);

const usarEnter = document.getElementById("medida3");

usarEnter.addEventListener("keydown", calcularTriangulosComEnter);