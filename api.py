from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite todas as origens
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos os métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permite todos os cabeçalhos
)

# Modelo de dados para o Produto
class Produto(BaseModel):
    nome: str
    descricao: str
    preco: float
    quantidade: int

# Armazenar produtos em uma lista (como se fosse um banco de dados)
produtos = []

# Rota para cadastrar um novo produto
@app.post("/produtos/")
def cadastrar_produto(produto: Produto):
    produtos.append(produto)
    return {"message": "Produto cadastrado com sucesso!", "produto": produto}

# Rota para listar todos os produtos
@app.get("/produtos/")
def listar_produtos():
    return produtos

# Rota para alterar um produto (pela posição na lista)
@app.put("/produtos/{produto_id}")
def alterar_produto(produto_id: int, produto: Produto):
    if produto_id < len(produtos):
        produtos[produto_id] = produto
        return {"message": "Produto alterado com sucesso!", "produto": produto}
    else:
        return {"message": "Produto não encontrado!"}

# Rota para remover um produto
@app.delete("/produtos/{produto_id}")
def remover_produto(produto_id: int):
    if produto_id < len(produtos):
        produto_removido = produtos.pop(produto_id)
        return {"message": "Produto removido com sucesso!", "produto": produto_removido}
    else:
        return {"message": "Produto não encontrado!"}
