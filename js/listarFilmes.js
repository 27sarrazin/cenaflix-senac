

    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:8080/api/filmes/listarFilmes", // ou http://localhost:8080/listarFilmes
            type: "GET",
            success: function (filmes) {
                let tbody = $("#tabela-filmes tbody");
                tbody.empty(); // limpa a tabela antes de preencher

                filmes.forEach(function (filme) {
                    let linha = `
                        <tr>
                            <td>${filme.id}</td>
                            <td>${filme.titulo}</td>
                            <td>${filme.sinopse}</td>
                            <td>${filme.genero}</td>
                            <td>${filme.anoLancamento}</td>
                            <td><button class="btn btn-outline-primary btn-sm btn btn-primary" data-id=${filme.id}>Avaliar</button></td>
                        </tr>
                    `;
                    tbody.append(linha);
                });
            },
            error: function () {
                alert("Erro ao carregar os filmes!");
            }
        });
    });

    $(document).on("click", "button[data-id]", function () {
        const id = $(this).data("id");
        // Redireciona para outra página passando o ID na URL
        window.location.href = `avaliacoes.html?id=${id}`;
    });
    

