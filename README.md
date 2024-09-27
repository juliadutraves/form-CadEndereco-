# form-CadEndereco-

## Descrição

Este projeto consiste em um formulário de cadastro que utiliza o CEP (Código de Endereçamento Postal) para preencher automaticamente os dados de endereço do usuário. Ao inserir o CEP, os campos de endereço, cidade e estado são preenchidos automaticamente, proporcionando uma experiência mais rápida e eficiente para o usuário.

## GIF

![videocep](https://github.com/user-attachments/assets/6dfc72c4-c360-4896-b243-0da9171ab261)

## Funcionalidades

- Campo de CEP: Usuário insere o CEP e, ao perder o foco ou pressionar Enter, os dados de endereço são preenchidos automaticamente.
- Autocompletar: Utiliza uma API para buscar informações de endereço com base no CEP fornecido.
- Validação: Verifica se o CEP é válido antes de realizar a busca.

## Tecnologias utilizadas 

- HTML5
- CSS3
- JavaScript
- API de Consulta de CEP (ViaCep) 

## Principais Funções

- fetch
- Await
- Async
- focusout

## Referência

- fetch:fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas.- https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch 

- HTTP Pipelines: é uma técnica que permite o envio de múltiplas requisições HTTP em uma única conexão - https://lbodev.com.br/glossario/o-que-e-http-pipelines/

- Await: Faz a execução de uma função async pausar, para esperar pelo retorno da Promise, e resume a execução da função async quando o valor da Promise é resolvido. Ele então retorna o valor final da Promise. Se esse valor não for uma Promise, ele é convertido para uma Promise resolvida. - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/await

- Async: Declaração cria uma ligação de uma nova função assíncrona a um determinado nome. A palavra-chave await é permitida no corpo da função, permitindo que o comportamento assíncrono e baseado em promessas seja escrito em um estilo mais limpo e evitando a necessidade de configurar explicitamente cadeias de promessas - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

- json: objeto namespace contém métodos estáticos para analisar valores e convertê-los em JavaScrip - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

- focusout:dispara quando um elemento perde o foco, após o blurevento. - https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event

- blurevento:dispara quando um elemento perde o foco. - https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event

- Link do ViaCep: https://viacep.com.br/


