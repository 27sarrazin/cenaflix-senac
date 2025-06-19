

$(document).ready(function () {
    $("#btnCadastrar").click(function (e) {
        e.preventDefault();

        const filme = {
            titulo: $("#titulo").val(),
            sinopse: $("#sinopse").val(),
            genero: $("#genero").val(),
            anoLancamento: $("#anoLancamento").val()
        };

        $.ajax({
            url: "http://localhost:8080/api/filmes/cadastrar-filme", 
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(filme),
            success: function (response) {
                alert("Filme cadastrado com sucesso!");
                window.location.href = "listarFilmes.html"; 
            },
            error: function (xhr, status, error) {
                alert("Erro ao cadastrar o filme: " + xhr.responseText);
                console.error("Detalhes do erro:", status, error);
            }
        });
    });
});
