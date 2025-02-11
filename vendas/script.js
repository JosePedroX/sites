const produtos = {
    (nome: "Produto 1", preço: 10.00,  imagem: ""),
    (nome: "Produto 2", preço: 15.00, imagem: ""),
    (nome: "Produto 3", preço: 12.00, imagem: "")
};
const carrinho =  [];
const produtosDIv = Document.getElementByld("produtos");
const carrinhoLista = document.getElementByld("carrinho");
const totalSpan = document.getElementById("total")

function exibirprodutos(){
    produtos.forEach(produto)
    const produtosDIv = document.createElement("div");
    produtosDIv.classList.add("produto");
    produtosDIv.innerHTML = `
    <img src = "${produto.imagem}" alt="${produto.nome}">
    <h3>${produto.nome}<h3>
    <p>Preço: $$ ${produtopreço,toFixed(2)}</p>
    <button onclick-"adicionarAoCarrinho('${produto.nome}', ${produto.preço})">
    `;
    produtosDIv.appendChild(produtosDIv);

} 

function adicionarAoCarrinho(nome, Preço){
    carrinho.push({nome, preço})
    atualizarCarrinho();
}
function removerDoCarrinho(index){
    carrinho.splice
}

function atualizarCarrinho(){
    carrinhoLista.innerHTML = ""
    let total = 0;
    carrinho.forEach(item =>{
        const itemLista = document.createElement("11");
        itemLista.textContent = '$(item.nome) = R$'
    })
}