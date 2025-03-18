document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const preco = document.getElementById('preco').value;
    const quantidade = document.getElementById('quantidade').value;
  
    fetch('http://127.0.0.1:8000/produtos/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: nome,
        descricao: descricao,
        preco: parseFloat(preco),
        quantidade: parseInt(quantidade),
      }),
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => alert('Erro ao cadastrar o produto'));
  });
  
  document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const produtoId = document.getElementById('produtoId').value;
    const novoNome = document.getElementById('novoNome').value;
    const novaDescricao = document.getElementById('novaDescricao').value;
    const novoPreco = document.getElementById('novoPreco').value;
    const novaQuantidade = document.getElementById('novaQuantidade').value;
  
    const data = {};
  
    if (novoNome) data.nome = novoNome;
    if (novaDescricao) data.descricao = novaDescricao;
    if (novoPreco) data.preco = parseFloat(novoPreco);
    if (novaQuantidade) data.quantidade = parseInt(novaQuantidade);
  
    fetch(`http://127.0.0.1:8000/produtos/${produtoId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => alert('Erro ao alterar o produto'));
  });
  
  document.getElementById('removeForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const produtoId = document.getElementById('produtoIdRemover').value;
  
    fetch(`http://127.0.0.1:8000/produtos/${produtoId}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => alert('Erro ao remover o produto'));
  });
  
  document.getElementById('listarBtn').addEventListener('click', function() {
    fetch('http://127.0.0.1:8000/produtos/')
    .then(response => response.json())
    .then(data => {
      const productList = document.getElementById('productList');
      productList.innerHTML = '';
      data.forEach(produto => {
        const li = document.createElement('li');
        li.textContent = `${produto.nome} - ${produto.descricao} - Preço: ${produto.preco} - Quantidade: ${produto.quantidade}`;
        productList.appendChild(li);
      });
    })
    .catch(error => alert('Erro ao listar os produtos'));
  });