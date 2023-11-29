document.addEventListener("DOMContentLoaded", function () {
    var formContato = document.getElementById("formContato");

    formContato.addEventListener("submit", function (event) {
        if (!validarFormulario()) {
            event.preventDefault();
        } else {
            // Se o formulário for válido, exibe o alerta de sucesso
            alert("Mensagem enviada com sucesso!");
        }
    });

    function validarFormulario() {
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var tipoContato = document.getElementById("tipoContato").value;
        var mensagem = document.getElementById("mensagem").value;

        if (nome.trim() === "" || email.trim() === "" || tipoContato.trim() === "" || mensagem.trim() === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return false;
        }

        // Simulando o envio bem-sucedido (substitua por sua lógica real de envio)
        return true;
    }
});
