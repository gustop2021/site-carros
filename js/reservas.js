const form = document.getElementById("formReserva");
let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

function mostrarReservas() {
    const lista = document.getElementById("listaReservas");
    lista.innerHTML = "";

    reservas.forEach(function (reserva) {
        const item = document.createElement("li");
        item.textContent = reserva.nome + " - " + reserva.veiculo + " (" + reserva.retirada + " a " + reserva.devolucao + ")";
        lista.append(item);
    });
}

form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value;
    const veiculo = document.getElementById("veiculo").value;
    const retirada = document.getElementById("retirada").value;
    const devolucao = document.getElementById("devolucao").value;
    if (devolucao <= retirada) {
        alert("Devolução precisa ser depois da retirada.")
    } else {

        const reserva = { nome: nome, veiculo: veiculo, retirada: retirada, devolucao: devolucao };

        reservas.push(reserva);
        localStorage.setItem("reservas", JSON.stringify(reservas));
        form.reset()
    }
});

mostrarReservas();