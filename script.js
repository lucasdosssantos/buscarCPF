function buscar() {
    //Função que carrega as informações JSON
    fetch('dados.json').then(resposta => resposta.json()).then(banco => {
        
        var identificador = document.getElementById('valorDigitado').value
        var encontrado = false;

        banco.forEach(pessoa => {
            if(identificador == pessoa.cpf) {
                //JQUERY
                var linkSite = `<a href="${pessoa.link}>Visite nosso site</a>`;
                document.getElementById('imagem').innerHTML = pessoa.imagem
                document.getElementById('nome').innerHTML = pessoa.nome
                document.getElementById('sobrenome').innerHTML = pessoa.sobrenome
                document.getElementById('cidade').innerHTML = pessoa.cidade
                document.getElementById('pais').innerHTML = pessoa.pais
                document.getElementById('link').innerHTML = linkSite;
                document.getElementById('erro').innerHTML = "";
                encontrado = true
            }
        })
        if(!encontrado) {
            document.getElementById('erro').innerHTML = "CPF não encontrado";
        }
        console.log(banco)
    })
}
