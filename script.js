var numpl = parseInt(prompt("Quantos Jogadores?"), 10);
var counter = 0
var counter1 = 0
var count6 = numpl-1;
var jogadores = []
var pontos = []
var pergunta = [
    "Qual dessas bebidas se tornou minha atual favorita?",
    "Qual meu jogo favorito?",
    "Qual meu filme de terror favorito?",
    "Qual desses quadrinhos eu não possuo?",
    "Qual desses jogos não está no meu Top 4?",
    "Quem é o Assassino em Sexta-Feira 13 (1980)?",
    "Qual o nome do antagonista de Karate Kid 2?",
    "Qual o nome do personagem principal de Sifu?",
    "Em apenas um dos filmes de Pânico, o Ghostface é revelado ser apenas uma pessoa, qual esse filme?",
    "Quem é esse? Anexo 1",
    "Em qual desses jogos eu não possuo 100% das conquistas?",
    "Qual meu Reboot favorito?",
    "Qual o nome do personagem principal de Karate Kid (2010)?",
    "Em qual obra de Shakespeare o filme '10 Coisas que eu odeio em você' é inspirado?",
    "Qual meu mito favorito?",
    "Qual meu quadrinista favorito?",
    "Qual desses personagens não é do filme 'Trem Bala'?",
    "Quem sofreu mais?",
    "Qual desses quadrinhos eu possuo?",
    "Complete a frase: 'Olá. Meu nome é Inigo Montoya'",
    "Qual foi o Sétimo trabalho de Héracles?",
    "Quem é esse? Anexo 2",
    "Qual desses não está no meu Top 4 do Letterboxd?",
    "Qual é meu deus grego favorito?",
    "Qual meu chocolate favorito?",
    "Qual meu livro favorito do John Green?",
    "Qual dessas artistas eu não escuto?",
    "Qual desses não é um dos meus pokémons favoritos?",
    "Em qual desses contos de Edgar Allan Poe o Detetive Auguste Dupin não aparece?",
    "Qual minha música favorita?",
    "Qual o nome da minha skin favorita no Valorant?",
    "Qual desses quadrinhos não está no meu Top 4?",
    "Qual dessas músicas eu gosto mais?",
    "Quem é esse? Anexo 3",
    "No conto 'O Corvo' de E. A. Poe, qual a única palavra que o corvo é capaz de dizer?",
    "Qual dessas bandas é minha favorita?",
    "Qual minha série favorita?",
    "Qual o único grupo alimentício que eu não como?",
    "Qual minha cor favorita?",
    "Qual meu Shonnen favorito?",
    "Qual minha atual faixa no Kung Fu?",
    "Qual console eu possuo?",
    "De acordo com 1984 de George Orwell, 2+2=?",
    "Qual meu livro favorito de Stephen King?",
    "Qual o último filme que eu assisti no cinema?",
    "Qual o meu personagem com mais horas no Valorant?",
    "Qual o nome do personagem principal de Karate Kid 4?",
    "Quem é meu diretor favorito?"
];  
var resposta = [
    "Guaraná Zero",
    "Pepsi Black",
    "Coca-Cola Zero",
    "Suco de laranja",
    "Cyberpunk 2077",
    "The Binding of Isaac: Repentance+",
    "Sifu",
    "The Walking Dead",
    "Evil Dead (2013)",
    "The Thing (1982)",
    "Scream (1996)",
    "Scream (2022)",
    "Imortal Hulk 6",
    "Reino do Amanhã",
    "Batman Cavaleiro das Trevas",
    "Titãs: Robin",
    "The Walking Dead",
    "Undertale",
    "Marvel Spider-Man",
    "Sifu",
    "Jason Voorhees",
    "Freddy Krueger",
    "Pamela Voorhees",
    "Michael Myers",
    "Cheng",
    "Chozen",
    "Terry",
    "Johnny",
    "Ying",
    "Chang",
    "Wong",
    "Ele não tem um nome",
    "Pânico 2",
    "Pânico 3",
    "Pânico 4",
    "Pânico 6",
    "Andrew Koji",
    "Jason Tobin",
    "Hoon Lee",
    "Jackie Chan",
    "Emily is Away",
    "Marvel Spider-Man",
    "Katana Zero",
    "Speed Dating for Ghosts",
    "Evil Dead (2013)",
    "Scream (2022)",
    "Halloween (2018)",
    "It (2017)",
    "Daniel LaRusso",
    "Li Fong",
    "Cheng Li",
    "Dre Parker",
    "Romeu e Julieta",
    "A Megera Domada",
    "A Tempestade",
    "Hamlet",
    "Eros e Psiquê",
    "Hades e Perséfone",
    "Apolo e Dafne",
    "Hefesto e Afrodite",
    "Gabriel Picolo",
    "Marco Checchetto",
    "Dan Mora",
    "Alex Ross",
    "O Pai",
    "Tangerina",
    "Lobo",
    "Serpente",
    "Medusa",
    "Prometeu",
    "Sísifo",
    "Atlas",
    "Demolidor (2022)",
    "Titãs: Estelar",
    "Lore Olympus 3",
    "Superman e a Autoridade",
    "Você matou meu pai, prepare-se para morrer.",
    "Você matou minha amada, agora pagará.",
    "Mas você não lembrará disso.",
    "E venho em nome do rei da Espanha.",
    "Hidra de Lerna",
    "Leão da Nemeia",
    "Javali de Erimanto",
    "Touro de Creta",
    "Brandon Lee",
    "Heath Ledger",
    "Jason Momoa",
    "Keanu Reeves",
    "Cinema Paradiso",
    "De Volta para o Futuro",
    "Karate Kid (2010)",
    "Trem Bala",
    "Posidão",
    "Aidoneus",
    "Perun",
    "Menrva",
    "Branco",
    "Meio Amargo",
    "Ao Leite",
    "Com Amendoim",
    "A Culpa é das Estrelas",
    "O Antropoceno Revisado",
    "Onde Está Você, Alaska?",
    "Cidades de Papel",
    "Sophie May",
    "Lorde",
    "Chappell Roan",
    "Taylor Swift",
    "Toxel",
    "Oshawott",
    "Snom",
    "Piplup",
    "O Assassinato na Rua Morgue",
    "O Mistério de Marie Rogêt",
    "A Carta Roubada",
    "A Queda da Casa de Usher",
    "When the Party’s Over – Billie Eilish",
    "Exagerado – Cazuza",
    "Bruises & Scratches – Sophie May",
    "A Grave Mistake – Ice Nine Kills",
    "Araxys",
    "Rei do Sol",
    "Herói Valoroso",
    "Kuronami no Yaba",
    "Invencível",
    "Reino do Amanhã",
    "A Sombra da Aranha",
    "Scott Pilgrim",
    "Naked – Finneas",
    "A Grave Mistake – Ice Nine Kills",
    "With the Band – Sophie May",
    "Indigo Night – Tamino",
    "James A. Janisse",
    "Brandon Lee",
    "Keith Habersberger",
    "Matthew Mercer",
    "Nunca Mais (Nevermore)",
    "Para Sempre (Forever)",
    "Um Dia (Someday)",
    "De Acontecer (Befall)",
    "Måneskin",
    "Ice Nine Kills",
    "Panic! At the Disco",
    "Paramore",
    "Sherlock",
    "Cobra Kai",
    "Looking For Alaska",
    "Warrior",
    "Doces",
    "Laticínios",
    "Pimentas",
    "Frutos do Mar",
    "Vermelho",
    "Preto",
    "Roxo",
    "Laranja",
    "Dandadan",
    "One Piece",
    "Gurren Lagann",
    "Sword Art Online",
    "Azul",
    "Verde",
    "Amarela",
    "Roxa",
    "Nintendo DSi",
    "PSP",
    "PS Vita",
    "Nintendo DS Lite",
    3,
    4,
    5,
    2,
    "Misery",
    "It",
    "O Iluminado",
    "Doutor Sono",
    "Auto da Compadecida 2",
    "Sonic 3",
    "Ainda Estou Aqui",
    "Anora",
    "Sage",
    "Gekko",
    "Sova",
    "Reyna",
    "Daniel LaRusso",
    "Julie Pierce",
    "Dre Parker",
    "Li Fong",
    "Jordan Peele",
    "Robert Zemeckis",
    "David Fincher",
    "John Hughes"
];
var correta = [2, 4, 1, 3, 2, 3, 2, 4, 2, 1, 3, 4, 4, 2, 1, 2, 4, 1, 4, 1, 4, 1, 2, 2, 1, 3, 2, 4, 4, 2, 3, 3, 3, 2, 1, 1, 3, 4, 1, 3, 1, 4, 3, 2, 3, 1, 2, 2]
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
