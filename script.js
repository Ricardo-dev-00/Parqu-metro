class Parquimetro {
    constructor(tarifaPorHora) {
        this.tarifaPorHora = tarifaPorHora; // Tarifa por hora em reais
    }

    calcularTempo(valorInserido) {
        const horas = Math.floor(valorInserido / this.tarifaPorHora);
        const minutos = Math.floor(((valorInserido % this.tarifaPorHora) / this.tarifaPorHora) * 60);
        return { horas, minutos };
    }

    calcularTroco(valorInserido) {
        const tempoTotal = Math.floor(valorInserido / this.tarifaPorHora) * this.tarifaPorHora;
        return (valorInserido - tempoTotal).toFixed(2);
    }
}

// Instância do parquímetro com tarifa de R$5,00 por hora
const parquimetro = new Parquimetro(1.75);

// Seleção de elementos do DOM
const valorInput = document.getElementById('valor');
const calcularBtn = document.getElementById('calcular');
const resultadoDiv = document.getElementById('resultado');

// Evento de clique no botão calcular
calcularBtn.addEventListener('click', () => {
    const valor = parseFloat(valorInput.value);

    if (isNaN(valor) || valor <= 0) {
        resultadoDiv.innerHTML = 'Por favor, insira um valor válido.';
        return;
    }

    const tempo = parquimetro.calcularTempo(valor);
    const troco = parquimetro.calcularTroco(valor);

    resultadoDiv.innerHTML = `
    <div class="resultado-box">
        <p class="tempo">⏱️ Tempo de permanência: ${tempo.horas} horas e ${tempo.minutos} minutos</p>
        <p class="troco">💰 Troco: R$ ${troco}</p>
    </div>
`;

    // Limpar os campos após o cálculo
    document.getElementById("valor").value = "";
});
