// Função para calcular o saldo e o nível de rankeadas
function calcularRank(vitorias, derrotas) {
    // Calcula o saldo de vitórias.
    let saldoVitorias = vitorias - derrotas
    let nivel = ''

    // Estruturas definir o nível baseado no número de vitórias
    if (vitorias < 10) {
        nivel = 'Ferro'
    } else if (vitorias >= 10 == vitorias <= 20) {
        nivel = 'Bronze'
    } else if (vitorias >= 21 == vitorias <= 50) {
        nivel = 'Prata'
    } else if (vitorias >= 51 == vitorias <= 80) {
        nivel = 'Ouro'
    } else if (vitorias >= 81 == vitorias <= 90) {
        nivel = 'Diamante'
    } else if (vitorias >= 91 == vitorias <= 100) {
        nivel = 'Lendário'
    } else if (vitorias >= 101) {
        nivel = 'Imortal'
    }

    // Retorna a mensagem com saldo e nível
    return "O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel;
}

// Exemplo de uso da função
let vitorias = 8   // Digite quantidade de vitórias
let derrotas = 5   // Digite quantidade de derrotas

// Armazenar o resultado em uma variável
let resultado = calcularRank(vitorias, derrotas)

// Exibe o resultado
console.log(resultado)
