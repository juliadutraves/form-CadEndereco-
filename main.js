
'use strict'; // ativa o mode restrito
//-->
// Este modo faz com que o javascript opere de forma mais segura e rigorosa, ajudando a evitar erros comuns de progamação
/* consumo de API - https://viacep.com.br/ */
 
// função para limpar os campos preenchidos
 
const limparFormulario = () => {
    document.getElementById('logradouro').value = ''; // busca o campo rua pelo id
    document.getElementById('bairro').value = ''; // busca o campo bairro pelo id
    document.getElementById('localidade').value = ''; // busca o campo cidade pelo id
    document.getElementById('uf').value = ''; // busca o campo estado pelo id
    document.getElementById('numero').value = ''; // busca o campo do número da casa pelo id
    document.getElementById('complemento').value = ''; // busca o campo complemento pelo id
}
 
// verifica se o cep é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero); //  faz com que o usuario possa somente digitar caracteres de 0 á 9, pegando a expressão regular e jogando dentro do argumaneto "numero"
const cepValido = (cep) => cep.length == 8 && eNumero(cep); // identifica a quantos caracteres tem no argumento "cep" e executa a linha anterior "eNumero"
 
// função para preencher formulario
const preencherFormulario = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro; // preenche o campo rua pelo id
    document.getElementById('bairro').value = endereco.bairro; // preenche o campo bairro pelo id
    document.getElementById('localidade').value = endereco.localidade; // preenche campo cidade pelo id
    document.getElementById('uf').value = endereco.uf; // preenche o campo estado pelo id
}
 
 // função para consumo de API viaCep, tipo assincrona
 
async function pesquisarCep() {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
 
    if (cepValido(cep.value)) {
        const dados = await fetch(url); // fetch:fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas., await: espera essa requisição
        const addres = await dados.json(); //converte para json
        if (addres.hasOwnProperty('erro')) { // hasOwnProperty: retorna um booleano indiacando se objeto é verdadeiro
            alert('CEP não encontrado');
 
        } else {
            preencherFormulario(addres);
        }
 
    } else {
        alert('CEP incorreto');
    }
}
 
 
 // chama escutador para disparar ação de preenchimento
 
document.getElementById('cep').addEventListener('focusout' , pesquisarCep);