function Calcular(){
    var numeroalunos = Number(document.getElementById("numeroalunos").value);
    var notaprova = (document.getElementById("notaprova").value).split(",");
    var notatrabalho = (document.getElementById("notatrabalho").value).split(",");

    class Aluno{
    constructor(
        nome,
        notaprova,
        notatrabalho,
        media, 
    ){
        this.nome = nome;
        this.notaprova = notaprova;
        this.notatrabalho = notatrabalho;
        this.media = media;
    }
    }

    var listaAlunos = []

    for (var i = 0; i <= numeroalunos -1; i++){
        var aluno = new Aluno(
            `aluno${i}`,
            Number(notaprova[i]),
            Number(notatrabalho[i]),
            ((Number(notaprova[i])*2)+(Number(notatrabalho[i])*3))/2
        )
        listaAlunos.push(aluno)
        }

        var valorprova = 0
        var valortrabalho = 0

    for (var j = 0; j < notaprova.length; j++){
        valorprova += Number(notaprova[j])
    }

    for (var k = 0; k < notatrabalho.length; k++){
        valortrabalho += Number(notatrabalho[k])
    }

        var prova = valorprova/numeroalunos
        var trabalho = valortrabalho/numeroalunos
        var geral = (prova + trabalho)/ 2

        document.getElementById('geral').innerHTML = geral;
        document.getElementById('trabalhos').innerHTML = prova;
        document.getElementById('provas').innerHTML = trabalho;

        var maiortrabalho = Math.max(...notatrabalho)
        document.getElementById('maiortrabalho').innerHTML = maiortrabalho

        var menortrabalho = Math.min(...notatrabalho)
        document.getElementById('menortrabalho').innerHTML = menortrabalho

        var maiorprova = Math.max(...notaprova)
        document.getElementById('maiorprova').innerHTML = maiorprova

        var menorprova = Math.min(...notaprova)
        document.getElementById('menorprova').innerHTML = menorprova
} 
