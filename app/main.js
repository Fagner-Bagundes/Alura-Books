let livros = []
const endpointDaAPI = `https://guilhermeonrails.github.io/casadocodigo/livros.json`
getBuscarLivrosDaAPI() 
const elementoParaInserirLivros = document.querySelector(`.livros`)

async function getBuscarLivrosDaAPI () {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    console.table(livros);
    exibirOsLivrosNaTela(livros)
}

function exibirOsLivrosNaTela(ListaDeLivros) {
    ListaDeLivros.forEach(livros => {
        elementoParaInserirLivros.innerHTML += 
        `
        <div class="livro">
        <img class="livro__imagens" src= "${livros.imagem}"
          alt="${livros.alt}" />
        <h2 class="livro__titulo">
        ${livros.titulo}
        </h2>
        <p class="livro__descricao">${livros.autor}</p>
        <p class="livro__preco" id="preco">${livros.preco}</p>
        <div class="tags">
          <span class="tag">${livros.categoria}</span>
          <span class="tag">${livros.categoria}</span>
        </div>
      </div>
        `
        
    });
    
}