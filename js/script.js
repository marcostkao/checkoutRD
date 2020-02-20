
let inputCPF = document.getElementById("cpfUsuario");
let inputConfirmarSenha = document.getElementById("confirmarSenha");
let inputSenha = document.getElementById("senhaUsuario");
//let inputCPFTitular = document.getElementById("cpfTitular");
let inputCep = document.getElementById("cepUsuario");
let selectEstado = document.getElementById("");

//validação CPF
inputCPF.addEventListener("keyup", (event) => {
    //console.log(inputCPF.value);
    if (isNaN(inputCPF.value)) {
        inputCPF.value = inputCPF.value.substring(0, inputCPF.value.length - 1);
    }

    if (inputCPF.value.length >= 11) {
        inputCPF.value = inputCPF.value.substring(0, 11);
    }
});



//Validação CEP
inputCep.addEventListener("keyup", (event) => {

    if (isNaN(inputCep.value)) {
        inputCep.value = inputCep.value.substring(0, inputCep.value.length - 1);
    }

    if (inputCep.value.length >= 8) {
        inputCep.value = inputCep.value.substring(0, 8);
        buscarCep(inputCep.value)
    }
});


function buscarCep(cep) {
    let config = {
        method: "GET"
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(dados => {
            if(dados.erro){
                return inputCep.setAttribute('class', 'form-control is-invalid')
            }
            inputCep.setAttribute('class', 'form-control is-valid')
            
        })
}




//Validação numero do cartão
numeroCartao.addEventListener("keyup", (event) => {
    if (isNaN(numeroCartao.value)) {
        numeroCartao.value = numeroCartao.value.substring(0, numeroCartao.value.length - 1);
    }
    if (numeroCartao.value.length >= 16) {
        numeroCartao.value = numeroCartao.value.substring(0, 16);
    }
});



//CPF titular
cpfTitular.addEventListener("keyup", (event) => {
    if (isNaN(cpfTitular.value)) {
        cpfTitular.value = cpfTitular.value.substring(0, cpfTitular.value.length - 1);
    }

    if (cpfTitular.value.length >= 11) {
        cpfTitular.value = cpfTitular.value.substring(0, 11);
    }
});


//Validar CVV
CVVCartao.addEventListener("keyup", (event) => {
    if (isNaN(CVVCartao.value)) {
        CVVCartao.value = CVVCartao.value.substring(0, CVVCartao.value.length - 1);
    }

    if (CVVCartao.value.length >= 3) {
        CVVCartao.value = CVVCartao.value.substring(0, 3);
    }
});




//validação senha
inputConfirmarSenha.addEventListener('keyup', (e) => {
    if (inputConfirmarSenha.value != inputSenha.value) {
        inputConfirmarSenha.setAttribute('class', 'form-control is invalid');
    } else {
        inputConfirmarSenha.setAttribute('class', 'form-control is valid');
    }
});






















