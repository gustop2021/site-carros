const botoes = document.querySelectorAll("[data-filtro]");
const veiculos = document.querySelectorAll("figure");

function filtrar(filtro) {
    veiculos.forEach(function (veiculo) {
        if (filtro === "todos" || veiculo.dataset.categoria === filtro) {
            veiculo.classList.remove("oculto");
        } else {
            veiculo.classList.add("oculto");
        }
    });
}

botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
        filtrar(botao.dataset.filtro);
    });
});