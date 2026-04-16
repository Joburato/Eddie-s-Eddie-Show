var players = [];
var currentPlayerIndex = 0;
var startAngle = 0;
var arc;
var spinTimeout = null;
var isSpinning = false;
var ctx;

function setPlayers() {
    var playerCount = parseInt(document.getElementById("playerCount").value);
    if (playerCount > 0) {
        var playersListHTML = "<h2>Lista de Jogadores</h2>";
        for (var i = 0; i < playerCount; i++) {
            playersListHTML += '<input type="text" placeholder="Nome do Jogador ' + (i + 1) + '" id="player_' + i + '"><br>';
        }
        playersListHTML += '<button onclick="startGame()">Iniciar Jogo</button>';
        document.getElementById("playersList").innerHTML = playersListHTML;
        document.getElementById("playersList").style.display = "block";
        document.getElementById("playersForm").style.display = "none";
    }
}

function startGame() {
    players = [];
    for (var i = 0; i < document.getElementById("playerCount").value; i++) {
        var playerName = document.getElementById("player_" + i).value.trim();
        if (playerName !== "") {
            players.push({ name: playerName, selected: true });
        }
    }
    if (players.length > 0) {
        startAngle = 0;
        document.getElementById("playersList").style.display = "none";
        document.getElementById("rouletteContainer").style.display = "block";
        reset(); // Garante que a roleta e os botões sejam resetados e desenhados
    } else {
        alert("Por favor, insira pelo menos um nome de jogador.");
    }
}

function reset() {
    clearTimeout(spinTimeout); // Para qualquer animação de giro em andamento
    isSpinning = false; // Libera o botão de girar
    startAngle = 0; // Reseta a posição da roleta
    currentPlayerIndex = 0;
    drawRouletteWheel();
    renderPlayerButtons();
}

function togglePlayer(index) {
    players[index].selected = !players[index].selected;
    renderPlayerButtons();
}

function renderPlayerButtons() {
    var playerButtonsHTML = "";
    for (var i = 0; i < players.length; i++) {
        var buttonText = players[i].selected ? "Selecionado" : "Não Selecionado";
        playerButtonsHTML += '<button onclick="togglePlayer(' + i + ')">' + players[i].name + ' (' + buttonText + ')</button>';
    }
    document.getElementById("playerButtons").innerHTML = playerButtonsHTML;
}

function spin() {
    if (isSpinning) {
        return;
    }
    var selectedPlayers = players.filter(player => player.selected);
    if (selectedPlayers.length > 0) {
        isSpinning = true;
        // Velocidade e tempo de rotação aumentados para um giro mais longo e rápido com um clique
        var spinAngleStart = Math.random() * 10 + 25;
        var spinTime = 0;
        var spinTimeTotal = Math.random() * 4000 + 5000; // Gira por 5-9 segundos
        rotateWheel(spinAngleStart, spinTime, spinTimeTotal);
    } else {
        alert("Por favor, selecione pelo menos um jogador antes de girar.");
    }
}

function rotateWheel(spinAngleStart, spinTime, spinTimeTotal) {
    spinTime += 30;
    if(spinTime >= spinTimeTotal) {
        stopRotateWheel();
        return;
    }
    var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
    startAngle += (spinAngle * Math.PI / 180);
    drawRouletteWheel();
    spinTimeout = setTimeout(function() { rotateWheel(spinAngleStart, spinTime, spinTimeTotal); }, 30);
}

function stopRotateWheel() {
    clearTimeout(spinTimeout);
    var degrees = startAngle * 180 / Math.PI + 90;
    var arcd = arc * 180 / Math.PI;
    var index = Math.floor((360 - degrees % 360) / arcd);
    var activePlayers = players.filter(player => player.selected);
    var winnerIndex = index % activePlayers.length;
    var winnerName = activePlayers[winnerIndex].name;

    var flashes = 0;
    var flashInterval = setInterval(function() {
        drawRouletteWheel(); // Redesenha a roleta a cada frame do pisca-pisca
        if (flashes % 2 === 0) {
            drawWinnerText(winnerName); // Desenha o texto do vencedor
        }
        flashes++;
        if (flashes > 5) { // Pisca 3 vezes e para
            clearInterval(flashInterval);
            isSpinning = false;
            drawRouletteWheel(); // Garante que a roleta final seja desenhada
            drawWinnerText(winnerName); // Garante que o nome do vencedor fique visível
        }
    }, 300);
}

// Função auxiliar para desenhar o texto do vencedor
function drawWinnerText(winnerName) {
    ctx.save();
    ctx.font = 'bold 40px Arial'; 
    var textWidth = ctx.measureText(winnerName).width;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillRect(250 - textWidth / 2 - 20, 250 - 30, textWidth + 40, 50);
    ctx.fillStyle = 'black';
    ctx.fillText(winnerName, 250 - textWidth / 2, 250 + 7);
    ctx.restore();
}

function drawArrow() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        var centerX = 250;
        var centerY = 50; // Altura fixa do ponteiro
        var size = 20; // Tamanho do ponteiro

        ctx.beginPath();
        ctx.moveTo(centerX, centerY + size / 2);
        ctx.lineTo(centerX - size / 2, centerY - size / 2);
        ctx.lineTo(centerX + size / 2, centerY - size / 2);
        ctx.closePath();

        ctx.fillStyle = "red"; // Cor do ponteiro
        ctx.fill();
    }
}


function easeOut(t, b, c, d) {
    var ts = (t /= d) * t;
    var tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
}

function drawRouletteWheel() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var outsideRadius = 200;
        var textRadius = 160;
        var insideRadius = 0; // Alterado para 0 para preencher até o centro

        ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;

        var activePlayers = players.filter(player => player.selected);
        arc = Math.PI / (activePlayers.length / 2);

        for (var i = 0; i < activePlayers.length; i++) {
            var angle = startAngle + i * arc;
            ctx.fillStyle = getColor(i, activePlayers.length);
            ctx.beginPath();
            ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
            ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
            ctx.stroke();
            ctx.fill();
            ctx.save();
            ctx.fillStyle = "white"; // Cor do texto alterada para branco para melhor contraste
            ctx.font = 'bold 15px Arial';
            ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius,
                250 + Math.sin(angle + arc / 2) * textRadius);
            ctx.rotate(angle + arc / 2 + Math.PI / 2);
            var text = activePlayers[i].name;
            ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
            ctx.restore();
        }
        
        // O círculo interno não é mais necessário, pois os segmentos preenchem o centro
        // Desenhar ponteiro no topo da roleta
        drawArrow();
    }
}


function getColor(item, maxitem) {
    var phase = 0;
    var center = 128;
    var width = 127;
    var frequency = Math.PI * 2 / maxitem;
    
    var red = Math.sin(frequency * item + 2 + phase) * width + center;
    var green = Math.sin(frequency * item + 0 + phase) * width + center;
    var blue = Math.sin(frequency * item + 4 + phase) * width + center;
    
    return RGB2Color(red, green, blue);
}

function RGB2Color(r, g, b) {
    return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}

function byte2Hex(n) {
    var nybHexString = "0123456789ABCDEF";
    return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(n & 0x0F, 1);
}
