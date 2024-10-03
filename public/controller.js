const controller = {
    adicionarAoCarrinho: async (produtoId) => {
        await model.adicionarAoCarrinho(produtoId);
        view.renderizarCarrinho(model.carrinho); // Atualiza a visualização do carrinho
    },

    removerDoCarrinho: async (index) => {
        await model.removerDoCarrinho(index);
        view.renderizarCarrinho(model.carrinho); // Atualiza a visualização do carrinho
    },

    finalizarCompra: async () => {
        await model.finalizarCompra(); // Chama a função de finalizar compra
    }
};
