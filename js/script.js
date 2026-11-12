const formulario = document.getElementById("formContato");
const alerta = document.getElementById("alertaSucesso");

function enviar(evento) {
    evento.preventDefault();
    alerta.classList.remove("d-none");
    formulario.reset();
}

formulario.addEventListener("submit", enviar);