var numpl = parseInt(prompt("Quantos Jogadores?"), 10);
var counter = 0
var counter1 = 0
var count6 = numpl-1;
var jogadores = []
var pontos = []
var dicaGratisUsada = []
var pergunta = [
    "Qual minha marca de chocolate favorito?",
    "Qual desses não está no meu TOP 4?",
    "Qual é o nome do vírus responsável pela infecção em Raccoon City no primeiro jogo da franquia?",
    "Quantos sets de dados eu tenho?",
    "Para qual desses filmes eu dei a menor nota?",
    "Quem foi o criador do T-Vírus através da combinação do Progenitor com DNA de sanguessugas?",
    "Qual minha forma favorita?",
    "Para qual desses eu dei a maior nota?",
    "Qual era o codinome de HUNK, dentro de sua unidade de elite?",
    "Qual minha defesa mais usada em xadrez?",
    "Qual foi minha review de Tróia?",
    "Em Resident Evil 1, quem foi o arquiteto responsável pelo design da Mansão Spencer?",
    "Qual meu filme de terror favorito?",
    "Qual meu podcast mais escutado?",
    "3 Verdades, 1 Mentira",
    "Qual o nome da empresa em que trabalho?",
    "Qual minha música favorita?",
    "3 Verdades, 1 Mentira",
    "Qual desses sistemas eu nunca joguei?",
    "Qual meu artista mais ouvido em 2025?",
    "3 Verdades, 1 Mentira",
    "Qual meu sistema operacional favorito?",
    "Qual a música que mais ouvi em 2025?",
    "3 Verdades, 1 Mentira",
    "O que tem escrito no quadro acima da minha mesa?",
    "Qual desses eu não tenho na Steam?",
    "Qual minha integrante favorita do Katseye?",
    "Qual meu animal favorito?",
    "Em qual desses jogos eu tenho mais horas?",
    "Quem é a conexão entre Trem-Bala, Street Fighter, Contra o mundo e Peaky Blinders?",
    "Qual foi o destino da minha última viagem?",
    "Em qual desses eu tenho todas as conquistas?",
    "Qual minha patinadora favorita?",
    "Qual o meu browser?",
    "Qual desses não está na minha lista de desejos?",
    "Qual meu atleta favorito?",
    "Qual meu mito grego favorito?",
    "Qual meu jogo favorito?",
    "Qual meu livro favorito do John Green?",
    "Qual meu Shonnen favorito?",
    "Qual é meu deus grego favorito?",
    "Qual meu telefone?",
    "Qual minha classe de RPG favorita?",
    "Qual desses quadrinhos eu possuo?",
    "Qual meu livro favorito de Stephen King?",
    "Em qual desses jogos eu não possuo 100% das conquistas?",
    "Qual a IA que eu uso?",
    "Qual a peça mais recente do meu pc?"
];  


var resposta = [
    "Hershey's",
    "Nestlé",
    "Lindt",
    "Milka",
    "Karate Kid (2010)",
    "10 Coisas que eu odeio em você",
    "Trem-Bala",
    "Superman (2025)",
    "G-Virus",
    "T-Virus",
    "Las Plagas",
    "C-Virus",
    "Cinco",
    "Três",
    "Quatro",
    "Dois",
    "Parasita (3.5)",
    "Alien (2.5)",
    "Oldboy (4)",
    "Onde os Fracos Não Têm Vez (3)",
    "James Marcus",
    "Edward Ashford",
    "Ozwell E. Spencer",
    "Alex Wesker",
    "Círculo",
    "Quadrado",
    "Retângulo",
    "Triângulo",
    "A Barraca do Beijo 3 (4.5)",
    "Garotas Malvadas 2 (4)",
    "Liga da Justiça (3.5)",
    "Halloween Ends (3)",
    "Night Hawk",
    "Mr. Death",
    "Silver Fox",
    "Lone Wolf",
    "Caro-Kann",
    "Siciliana",
    "Francesa",
    "Escandinavia",
    "Sim vamos quebrar a estátua do deus do sol o que poderia dar errado?",
    "Iliad (Redux)",
    "SEAN BEAN O QUE VOCÊ ESTÁ FAZENDO COM ESSE CAVALO?",
    "Pranking the Achaeans (Gone wrong)",
    "Michael Warren",
    "Travis Spencer",
    "George Trevor",
    "Henry Ashford",
    "Sinners",
    "The Thing (1982)",
    "Evil Dead (2013)",
    "Final Destination Bloodlines",
    "Dungeons and Daddies",
    "Vortex",
    "Dead Meat podcast",
    "Nerdcast",
    "Meu pokémon favorito é o Oshawott.",
    "Eu assisti todos os filmes da Marvel.",
    "Eu tenho uma coleção completa no Valorant.",
    "Eu li todos os contos do Edgar Allan Poe.",
    "Techcomp",
    "Grupo Ecomp",
    "Gecomp Consultoria",
    "Equipe Ecomp",
    "When the Party’s Over – Billie Eilish",
    "Exagerado – Cazuza",
    "Bruises & Scratches – Sophie May",
    "A Grave Mistake – Ice Nine Kills",
    "Meu chocolate favorito é o branco.",
    "Eu Nunca li um quadrinho do Flash Barry Allen.",
    "Eu namoro Vic a 4 anos.",
    "Eu conheço Davi a 18 anos.",
    "Pathfinder",
    "Ordem Paranormal",
    "Relika",
    "Vampiros",
    "Jorge Rivera-Herans",
    "Ice Nine Kills",
    "Kendrick Lamar",
    "Jão",
    "Eu vou para São Paulo mês que vem.",
    "O personagem no Valorant que tenho mais horas é o Sova.",
    "Eu tenho a faixa laranja em Kung Fu.",
    "Eu não como nenhum fruto do mar.",
    "Windows 11",
    "Arch Linux",
    "Linux Mint",
    "Fedora KDE",
    "Storm - Jorge Rivera-Herans",
    "Exagerado – Cazuza",
    "Super Bowl Halftime Show - Kendrick Lamar",
    "Welcome to Horrorwoord",
    "Paramore é minha banda favorita.",
    "Marco Checcheto é meu quadrinista favorito.",
    "Minha série favorita é cobra Kai.",
    "Eu tenho um 3DS.",
    "Keep Gambling",
    "Give up",
    "Fih",
    "Garlic Bread",
    "Just Cause",
    "Resident Evil",
    "Superhot",
    "God of war",
    "Daniela",
    "Meghan",
    "Yoonchae",
    "Sophia",
    "Cacatua",
    "Lontra",
    "Tamanduaí",
    "Kakapo",
    "Tabletop Simulator",
    "Bloons TD 6",
    "Cyberpunk 2077",
    "Marvel Rivals",
    "Noah Centineo",
    "Andrew Koji",
    "Bill Skarsgård",
    "Jessica Rothe",
    "São Miguel do Gostoso",
    "João Pessoa",
    "Mossoró",
    "São Paulo",
    "Cyberpunk 2077",
    "binding of Isaac: Repentance",
    "Resident Evil 2",
    "Marvel Spider-Man",
    "Alysa Liu",
    "Amber Glenn",
    "Isabeau Levito",
    "Yuzuru Hanyu",
    "Zen",
    "Chrome",
    "Firefox",
    "Vivaldi",
    "The Quarry",
    "Star Wars Outlaws",
    "Assassin's Creed Black Flag Resynced",
    "Baldur's Gate 3",
    "Noah Lyle",
    "Lebron James",
    "Aspas",
    "Richarlison",
    "Aquiles",
    "Hades e Persefone",
    "Prometeu",
    "Eros e Psiquê",
    "Cyberpunk 2077",
    "The binding of Isaac: Repentance+",
    "Sifu",
    "The Walking Dead",
    "A Culpa é das estrelas",
    "O Antropoceno revisado",
    "Onde está você, Alaska?",
    "Cidades de Papel",
    "Dandadan",
    "One Piece",
    "Gurren Lagann",
    "Chainsaw Man",
    "Posidão",
    "Aidoneus",
    "Júpiter",
    "Menrva",
    "Iphone 11 Pro",
    "Iphone 11",
    "Iphone 14",
    "Iphone 13",
    "Ladino",
    "Paladino",
    "Mago",
    "Bardo",
    "Demolidor (2022)",
    "Titãs: Estelar",
    "Lore Olympus 3",
    "Superman e a Autoridade",
    "Misery",
    "It",
    "O Iluminado",
    "Doutor Sono",
    "Emily is Away",
    "Marvel Spider-Man",
    "Katana Zero",
    "Speed Dating for Ghosts",
    "ChatGPT",
    "Gemini",
    "Claude",
    "ManusAI",
    "SSD",
    "Placa de vídeo",
    "Memória",
    "Monitor"
];


var correta = [3,4,2,3,2,1,4,1,2,1,2,3,3,4,1,2,2,1,1,1,4,4,3,2,1,2,2,4,1,2,2,4,1,1,3,1,4,4,3,3,2,4,2,4,2,3,2,2]
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
        div.style.left = "39.6vw";
    }

    if(round == 2){

        var div = document.getElementById("grid2");
        div.style.left = "32.15%";

        var div = document.getElementById("titulos2");
        div.style.left = "32.15%";

        var div = document.getElementById("score");
        div.style.left = "-52.6vw";

        document.getElementById("round").innerHTML = "Round 2";
    }

    if(round == 3){

        var div = document.getElementById("grid2");
        div.style.left = "-132.15%";

        var div = document.getElementById("titulos2");
        div.style.left = "-132.15%";

        var div = document.getElementById("score2");
        div.style.left = "39.6vw";
    }

    if(round == 4){

        var div = document.getElementById("grid3");
        div.style.left = "32.15%";

        var div = document.getElementById("titulos3");
        div.style.left = "32.15%";

        var div = document.getElementById("score2");
        div.style.left = "-52.6vw";

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
        div.style.left = "32.2vw";
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
        div.style.left = "104.7vw";

        round--;
    }

    if(round == 2){

        var div = document.getElementById("grid2");
        div.style.left = "132.15%";

        var div = document.getElementById("titulos2");
        div.style.left = "132.15%";

        var div = document.getElementById("score");
        div.style.left = "39.6vw";

        round--;

        document.getElementById("round").innerHTML = "Round 1";
    }

    if(round == 3){

        var div = document.getElementById("grid2");
        div.style.left = "32.15%";

        var div = document.getElementById("titulos2");
        div.style.left = "32%";

        var div = document.getElementById("score2");
        div.style.left = "104.7vw";

        round--;
    }

    if(round == 4){

        var div = document.getElementById("grid3");
        div.style.left = "132.15%";

        var div = document.getElementById("titulos3");
        div.style.left = "132.15%";

        var div = document.getElementById("score2");
        div.style.left = "39.6vw";

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
        div.style.left = "104.7vw";

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

while (counter < numpl){
    jogadores.push(prompt("insira o nome do " + (counter+1) + "° jogador."));
    pontos.push(0);
    dicaGratisUsada.push(false);
    counter++;
}

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
    document.getElementById("btn-dica").style.display = "block";

    contadordeazuis = 0;
    while(contadordeazuis < 4){
        var div = document.getElementById("botaoresposta" + (contadordeazuis+1))
        div.style.backgroundColor = "transparent";
        var div = document.getElementById("botaoresposta1" + (contadordeazuis+1))
        div.style.backgroundColor = "transparent";
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
    document.getElementById("btn-dica").style.display = "none";
    
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

function dica(){
    if (dicaGratisUsada[counter1-1] === false) {
        dicaGratisUsada[counter1-1] = true;
    } else {
        pontos[counter1-1] -= (pont[log] / 2);
    
        document.getElementById("pontos").innerHTML = pontos[counter1-1];
        document.getElementById("scp" + (counter1-1)).innerHTML = pontos[counter1-1];
        document.getElementById("scpn" + (counter1-1)).innerHTML = pontos[counter1-1];
    }

    document.getElementById("btn-dica").style.display = "none";
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
