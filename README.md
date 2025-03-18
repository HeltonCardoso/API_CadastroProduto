# ProductAPI

  

## Descrição

  

ProductAPI é uma API simples, desenvolvida com o framework FastAPI, que permite o cadastro, listagem, alteração e remoção de produtos. A API oferece endpoints para manipulação de dados de produtos, sendo ideal para aplicações que necessitam de controle de estoque rápido e eficiente.

  

### Funcionalidades

  

-  **Cadastro de Produtos**: Permite adicionar novos produtos ao inventário com informações como nome, descrição, preço e quantidade.

-  **Listagem de Produtos**: Exibe todos os produtos cadastrados na API.

-  **Alteração de Produtos**: Permite atualizar os dados de um produto existente, como preço, descrição e quantidade.

-  **Remoção de Produtos**: Permite excluir um produto do inventário utilizando o ID do produto.

  

## Tecnologias

  

-  **FastAPI**: Framework para criação de APIs rápidas e eficientes, com suporte a tipagem e validação de dados.

-  **Python 3.7+**: Linguagem de programação utilizada para a criação da API.

-  **Uvicorn**: Servidor ASGI utilizado para executar a aplicação FastAPI.

  

## Endpoints da API

  

### 1. POST /produtos/

Cadastrar um novo produto.

  

-  **Requisição**: JSON

-  **Campos**:

-  `nome` (str): Nome do produto.

-  `descricao` (str): Descrição do produto.

-  `preco` (float): Preço do produto.

-  `quantidade` (int): Quantidade disponível do produto.

  

-  **Resposta**:

```json

{

"message": "Produto cadastrado com sucesso!",

"produto": {

"nome": "Exemplo Produto",

"descricao": "Descrição do produto",

"preco": 100.00,

"quantidade": 50

}

}
```
  

### 2. GET /produtos/

Listar todos os produtos cadastrados.

  

-  **Resposta**:

```json

  

{

"nome": "Produto 1",

"descricao": "Descrição do Produto 1",

"preco": 50.00,

"quantidade": 20

},

{

"nome": "Produto 2",

"descricao": "Descrição do Produto 2",

"preco": 75.00,

"quantidade": 15

}

```

### 3. PUT /produtos/{produto_id}

  

-  **Alterar um produto existente.**

-  **Requisição: JSON**

-  **Campos**:

  

-  `nome` (str): Novo nome do produto.

-  `descricao`(str): Nova descrição do produto.

-  `preco`(float): Novo preço do produto.

-  `quantidade` (int): Nova quantidade disponível do produto.

  

-  **Resposta**:

  

```json

{

"message": "Produto alterado com sucesso!",

"produto": {

"nome": "Produto Atualizado",

"descricao": "Descrição do Produto Atualizado",

"preco": 120.00,

"quantidade": 25

}

}

```

  

### 4. DELETE /produtos/{produto_id}

-  **Remover um produto.**

  

-  **Resposta**:

  

```json

{

"message": "Produto removido com sucesso!",

"produto": {

"nome": "Produto 1",

"descricao": "Descrição do Produto 1",

"preco": 50.00,

"quantidade": 20

}

}

```

  

### Como usar a API

-  **Clonar o repositório**

-  **Clone o repositório do projeto para a sua máquina local.**

  

-  **bash**

git clone https://github.com/seu-usuario/ProductAPI.git

-  **Instalar as dependências**

-  **Instale as dependências necessárias para o projeto.**

  

-  **bash**

  

pip install -r requirements.txt

  
  

### Rodar a API

-  **Execute a API usando o Uvicorn.**

-  **bash**

uvicorn api:app --reload

  
  

### Acessar a documentação interativa

A API gera uma documentação interativa com o Swagger UI automaticamente. Você pode acessá-la em http://127.0.0.1:8000/docs para testar os endpoints diretamente do navegador.

  
  

### Dependências

Este projeto utiliza as seguintes dependências:

  

-  **FastAPI**: Framework para a criação de APIs rápidas e eficientes.

  

-  **uvicorn**: Servidor ASGI para rodar a aplicação FastAPI.

  

-  **Python 3.7+**: A API foi desenvolvida para funcionar com Python 3.7 ou superior.

  

-  **Para instalar as dependências, utilize o comando:**

  

bash

  

pip install -r requirements.txt

  

### Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Para isso, basta criar um fork do repositório, fazer as modificações necessárias e abrir um pull request.

  

### Licença

Este projeto está licenciado sob a MIT License - consulte o arquivo [LICENSE](https://github.com/HeltonCardoso/API_CadastroProduto/blob/main/LICENSE) para mais detalhes