
        const params = new URLSearchParams(window.location.search);
        const filmeId = parseInt(params.get("id"));

        if (!filmeId) {
            alert("Filme não especificado.");
            window.location.href = "index.html";
        }
       
        const API_BASE = `http://localhost:8080/api`;

        // Buscar dados do filme com jQuery
        $.get(`${API_BASE}/filmes/${filmeId}`, function (filme) {
            $("#filmeTitulo").text(filme.titulo);
            $("#filmeGenero").text(filme.genero);
            $("#filmeAno").text(filme.anoLancamento);
            $("#filmeSinopse").text(filme.sinopse);
        }).fail(function () {
            alert("Erro ao carregar o filme.");
        });



        // Carregar análises com jQuery
       function carregarAnalises(filmeId) {
    $.get(`${API_BASE}/analises/listaDeAnalises/${filmeId}`, function (analises) {
        const container = $("#analisesContainer");
        container.empty();

        if (!analises || analises.length === 0) {
            container.html("<p>Nenhuma análise ainda.</p>");
            return;
        }

        analises.forEach(function (analise) {
            const div = `
                <div class="border rounded p-3 mb-3 bg-white shadow-sm text-dark">
                    <h5 class="fw-bold">${analise.filme.titulo}</h5>
                    <p><strong>Comentário:</strong> ${analise.comentario}</p>
                    <p><strong>Nota:</strong> ${analise.nota}</p>
                </div>`;
            container.append(div);
        });
    }).fail(function () {
        $("#analisesContainer").html("<p class='text-danger'>Erro ao carregar análises.</p>");
    });
}


        carregarAnalises(filmeId);

        // Enviar nova análise com jQuery
        $("#formAnalise").submit(function (e) {
            e.preventDefault();

            const comentario = $("#analiseTexto").val();
            const nota = $("#nota").val();

            $.ajax({
                url: `${API_BASE}/analises/filme/${filmeId}`,
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({
                    comentario: comentario,
                    nota: nota,
                    filmeId: parseInt(filmeId)
                }),
                success: function () {
                    $("#formAnalise")[0].reset();
                    carregarAnalises(filmeId);
                },
                error: function () {
                    alert("Erro ao enviar análise.");
                }
            });
        });
    