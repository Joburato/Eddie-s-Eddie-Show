//var numpl = parseInt(prompt("Quantos Jogadores?"), 10);
//Use above for actual games!!

var numpl = 5;
var counter = 0
var counter1 = 0
var count6 = numpl-1;
//var jogadores = []
//Also this!!
var jogadores = ["Eddie", "Freddie", "Nessie", "Reggie", "Bob"]
var pontos = []
var pergunta = [
    "Qual minha idade?",
    "Quem é atualmente a pessoa que namorei por mais tempo?",
    "Qual seria originalmente meu nome?",
    "Qual meu curso?",
    "Quem é meu parceiro de fofoca?",
    "Quando eu Conheci Luca?",
    "Qual minha atual arma de apresentação?",
    "Qual minha amizade mais antiga?",
    "Em que mês eu conheci Vic?",
    "Qual o nome do meu pai?",
    "Qual a pessoa com quem eu tenho mais mensagens pelo Instagram?",
    "Por qual artista eu fui no MADA?",
    "Qual minha série favorita?",
    "Eu assisti todos os filmes da Marvel.",
    "Qual o trabalho dele?",
    "Para qual cidade eu viajei para ir em um Escape Room?",
    "Eu já fiquei com uma garota Europeia.",
    "Qual o canal dele no Youtube?",
    "Qual o único grupo alimentício que eu não como?",
    "Eu Nunca li um quadrinho do Flash Barry Allen.",
    "Qual o principal quadro dele?",
    "Qual minha franquia de filmes favorita?",
    "Eu tenho uma parede só de Post Its",
    "Qual o maior filme em que ele aparece?",
    "Quem é meu escritor favorito?",
    "Qual é essa edição do Eddie’s Eddie Show?",
    "Qual minha banda favorita?",
    "Qual meu Deus Grego Favorito?",
    "Qual minha faixa atual no Kung Fu?",
    "Qual meu quadrinho favorito?",
    "Qual foi o último filme de Velozes e Furiosos que eu assisti?",
    "Qual foi o último site que eu fiz para um cliente?",
    "Qual livro eu estou lendo no momento?",
    "Qual o último filme que eu assisti no cinema?",
    "Quantos minutos de música eu escutei em 2022?",
    "What’s my favorite Scary Movie?",
    "Quem é meu herói favorito?",
    "Qual a cor das minhas luvas de Boxing?",
    "Qual meu filme da Marvel Favorito?",
    "Qual meu Smartphone?",
    "Qual órgão eu removi?",
    "Qual foi minha primeira arte marcial?",
    "Qual meu tipo sanguíneo?",
    "Qual meu parente mais famoso?",
    "Qual meu formato de arquivo favorito?",
    "Qual a citação que eu mais uso?",
    "Qual órgão eu tenho a mais?",
    "Qual meu animal favorito?"
];
var resposta = ["20", "VIC", "EDUARDA", "TI", "ARTHUR", "DIA DOS NAMORADOS", "FACÃO", "DAVI", "JULHO", "DENIS", "LAIS", "POTYGUARA BARDO", "LOOKING FOR ALASKA", "FALSO", "YOUTUBER", "RECIFE", "FALSO", "DEAD MEAT", "FRUTOS DO MAR", "FALSO", "KILL COUNT", "SCREAM", "FALSO", "SCREAM", "JOHN GREEN", "TERCEIRA", "MANESKIN", "HADES", "VERDE", "REINADO DO AMANHÃ", "VELOZES E FURIOSOS 7", "UROGRUPO", "IT", "EVIL DEAD RISE", "70.000", "EVIL DEAD", "HOMEM-ARANHA", "VERMELHO", "NO WAY HOME", "IPHONE 11", "APÊNDICE", "JUDÔ", "O+", "CIRO GOMES", "PNG", "NÃO É SOBRE VENCER, É SOBRE MANDAR UMA MENSAGEM", "BAÇO", "KAKAPO"]
var correta = [3, 2, 4]
var lead = 0;
var log = 3
var log1 = 3
var pont = [200, 200, 200, 300, 300, 300, 400, 400, 400, 500, 500, 500, 200, 200, 200, 300, 300, 300, 400, 400, 400, 500, 500, 500, 200, 200, 200, 300, 300, 300, 400, 400, 400, 500, 500, 500, 200, 200, 200, 300, 300, 300, 400, 400, 400, 500, 500, 500, ]

var correto = new Audio('imagens/correto.mp3');
var errado = new Audio('imagens/errado.mp3');

var round = 0

function vai(){

    round++;

    if(round == 1){

        var div = document.getElementById("grid1");
        div.style.left = "-132.15%";

        var div = document.getElementById("titulos1");
        div.style.left = "-132.15%";

        var div = document.getElementById("score");
        div.style.left = "608px";
    }

    if(round == 2){

        var div = document.getElementById("grid2");
        div.style.left = "32.15%";

        var div = document.getElementById("titulos2");
        div.style.left = "32.15%";

        var div = document.getElementById("score");
        div.style.left = "-808px";

        document.getElementById("round").innerHTML = "Round 2";
    }

    if(round == 3){

        var div = document.getElementById("grid2");
        div.style.left = "-132.15%";

        var div = document.getElementById("titulos2");
        div.style.left = "-132.15%";

        var div = document.getElementById("score2");
        div.style.left = "608px";
    }

    if(round == 4){

        var div = document.getElementById("grid3");
        div.style.left = "32.15%";

        var div = document.getElementById("titulos3");
        div.style.left = "32.15%";

        var div = document.getElementById("score2");
        div.style.left = "-808px";

        document.getElementById("round").innerHTML = "Round 3";
    }

    if(round == 5){

        var div = document.getElementById("grid3");
        div.style.left = "-132.15%";

        var div = document.getElementById("grid4");
        div.style.left = "32.15%";

        var div = document.getElementById("titulos3");
        div.style.left = "-132.15%";

        var div = document.getElementById("titulos4");
        div.style.left = "32.15%";

        document.getElementById("round").innerHTML = "Round B";
    }

    if(round == 6){
        const leaders = getDescendingIndexes(pontos);
        console.log(leaders);

        var counter4 = 3;

        while (counter4 < numpl){
            var div = document.getElementById("scf" + counter4)
            div.style.display = "flex";
    
            counter4++;
        }

        var counter45 = 0;

        while (counter45 < numpl){

            document.getElementById("scplf" + counter45).innerHTML = jogadores[leaders[counter45]];
    
            document.getElementById("scpf" + counter45).innerHTML = pontos[leaders[counter45]];
    
            counter45++;
        }

        var div = document.getElementById("grid4");
        div.style.left = "-132.15%";

        var div = document.getElementById("titulos4");
        div.style.left = "-132.15%";

        document.getElementById("round").innerHTML = "O FINAL";

        var div = document.getElementById("scald");
        div.style.left = "495px";
    }

    if(round > 6){
        round--;
        var div = document.getElementById("scf" + count6);
        div.style.opacity = "100%";

        count6--;
    }   
}

function passa(){
    if(round == 1){

        var div = document.getElementById("grid1");
        div.style.left = "32.15%";

        var div = document.getElementById("titulos1");
        div.style.left = "32%";

        var div = document.getElementById("score");
        div.style.left = "1608px";

        round--;
    }

    if(round == 2){

        var div = document.getElementById("grid2");
        div.style.left = "132.15%";

        var div = document.getElementById("titulos2");
        div.style.left = "132.15%";

        var div = document.getElementById("score");
        div.style.left = "608px";

        round--;

        document.getElementById("round").innerHTML = "Round 1";
    }

    if(round == 3){

        var div = document.getElementById("grid2");
        div.style.left = "32.15%";

        var div = document.getElementById("titulos2");
        div.style.left = "32%";

        var div = document.getElementById("score2");
        div.style.left = "1608px";

        round--;
    }

    if(round == 4){

        var div = document.getElementById("grid3");
        div.style.left = "132.15%";

        var div = document.getElementById("titulos3");
        div.style.left = "132.15%";

        var div = document.getElementById("score2");
        div.style.left = "608px";

        round--;

        document.getElementById("round").innerHTML = "Round 2";
    }

    if(round == 5){

        var div = document.getElementById("grid4");
        div.style.left = "132.15%";

        var div = document.getElementById("grid3");
        div.style.left = "32.15%";

        var div = document.getElementById("titulos4");
        div.style.left = "132.15%";

        var div = document.getElementById("titulos3");
        div.style.left = "32.15%";

        document.getElementById("round").innerHTML = "Round 3";

        round--;
    }

    if(round == 6){
        var div = document.getElementById("grid4");
        div.style.left = "32.15%";

        var div = document.getElementById("titulos4");
        div.style.left = "32.15%";

        var div = document.getElementById("scald");
        div.style.left = "1608px";

        document.getElementById("round").innerHTML = "Round B";

        round--;
    }

}

function passar(){

    counter1++;

    if(counter1 > numpl){
        counter1 = 1;
    }
    document.getElementById("player").innerHTML = jogadores[counter1-1];
    document.getElementById("pontos").innerHTML = pontos[counter1-1];

    var counter3 = 0

    while (counter3 < numpl){
        var div = document.getElementById("sc" + counter3)
        div.style.display = "block";
        var div = document.getElementById("scn" + counter3)
        div.style.display = "block";

        document.getElementById("scpl" + counter3).innerHTML = jogadores[counter3];

        document.getElementById("scp" + counter3).innerHTML = pontos[counter3];

        document.getElementById("scpln" + counter3).innerHTML = jogadores[counter3];

        document.getElementById("scpn" + counter3).innerHTML = pontos[counter3];

        counter3++;
    }
}

//while (counter < numpl){
//    jogadores.push(prompt("insira o nome do " + (counter+1) + "° jogador."));
//    pontos.push(0);
//    counter++;
//}

//And This!

var passa1 = 0;

while(passa1 == 0){
    passar();
    passa1 = 1;
}

counter = 0

while (counter < numpl){
    document.getElementById("player" + (counter+1)).innerHTML = jogadores[counter];
    counter++;
}


function exibe(x){
    var xy = pergunta[x];
    document.getElementById("pergunta").innerHTML = xy;

    var respostabotoes = x*4;
    var respostanumeral = respostabotoes;

    document.getElementById("botaoresposta1").innerHTML = resposta[respostanumeral];
    document.getElementById("botaoresposta11").innerHTML = resposta[respostanumeral];

    respostanumeral++;
    document.getElementById("botaoresposta2").innerHTML = resposta[respostanumeral];
    document.getElementById("botaoresposta12").innerHTML = resposta[respostanumeral];
    
    respostanumeral++;
    document.getElementById("botaoresposta3").innerHTML = resposta[respostanumeral];
    document.getElementById("botaoresposta13").innerHTML = resposta[respostanumeral];

    respostanumeral++;
    document.getElementById("botaoresposta4").innerHTML = resposta[respostanumeral];
    document.getElementById("botaoresposta14").innerHTML = resposta[respostanumeral];

    log = x;
    
    var div = document.getElementById("perguntas");
    div.style.top = "20px";

    contadordeazuis = 0;
    while(contadordeazuis < 4){
        var div = document.getElementById("botaoresposta" + (contadordeazuis+1))
        div.style.backgroundColor = "rgb(18, 155, 197)";
        var div = document.getElementById("botaoresposta1" + (contadordeazuis+1))
        div.style.backgroundColor = "rgb(18, 155, 197)";
        contadordeazuis++;
    };
}

function fecha(){
    passar();
    var div = document.getElementById("perguntas");
    div.style.top = "200%";

    var div = document.getElementById("options");
    div.style.display = "grid";
    
    var div = document.getElementById("options1");
    div.style.display = "none";
}

function getDescendingIndexes(arr) {
    // Create an array of index-value objects
    const indexValuePairs = arr.map((value, index) => ({ index, value }));
  
    // Sort the array in descending order by value
    indexValuePairs.sort((a, b) => b.value - a.value);
  
    // Map the sorted index-value pairs to an array of the indexes
    const sortedIndexes = indexValuePairs.map(pair => pair.index);
  
    return sortedIndexes;
}

function revelar(reveal){
    
    if(reveal == correta[log]){
        correto.play();
        pontos[counter1-1] = pontos[counter1-1] + pont[log];

        var div = document.getElementById("botaoresposta" + reveal);
        div.style.backgroundColor = "green";
    }
    else{
        errado.play();

        var div = document.getElementById("botaoresposta1" + reveal);
        div.style.backgroundColor = "red";

        var div = document.getElementById("options");
        div.style.display = "none";
    
        var div = document.getElementById("opcoes");
        div.style.display = "grid";

        counter = 0

        while (counter < numpl){
            var div = document.getElementById("pl" + counter)
            document.getElementById("pl" + counter).innerHTML = jogadores[counter];

            div.style.display = "block";

            counter++;
        }

        var div = document.getElementById("pl" + (counter1-1))
        div.style.display = "none";
    }
}

function test(x){
    log1 = x;

    var div = document.getElementById("options1");
    div.style.display = "grid";

    var div = document.getElementById("opcoes");
    div.style.display = "none";
}

function revelar1(reveal){

    if(reveal == correta[log]){
        correto.play();
        pontos[log1] = pontos[log1] + (pont[log]/2);

        var div = document.getElementById("botaoresposta1" + reveal);
        div.style.backgroundColor = "green";
    }
    else{
        errado.play();
        var div = document.getElementById("botaoresposta1" + reveal);
        div.style.backgroundColor = "red";

        corresposta = correta[log];
        var div = document.getElementById("botaoresposta1" + corresposta);
        div.style.backgroundColor = "green";
        pontos[log1] = pontos[log1] - (pont[log]/2);
    }
}

function certo(){
    correto.play();
    pontos[counter1-1] = pontos[counter1-1] + pont[log];
    var div = document.getElementById("options");
    div.style.display = "grid";
    corresposta = correta[log];
    var div = document.getElementById("botaoresposta" + corresposta);
        div.style.backgroundColor = "green";

    var div = document.getElementById("opcoes");
    div.style.display = "none";
}
function desisti(){
    errado.play();
    var div = document.getElementById("options");
    div.style.display = "grid";
    corresposta = correta[log];
    var div = document.getElementById("botaoresposta" + corresposta);
    div.style.backgroundColor = "green";

    var div = document.getElementById("opcoes");
    div.style.display = "none";
}
