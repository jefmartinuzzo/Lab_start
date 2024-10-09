// Variáveis utilizadas nomeHeroi, xp e nivel
let nomeHeroi = "Dead Cells"
// Altere a quantidade de experiência (XP) conforme necessário
let xp = 15001  
let nivel

// Estrutura de decisão para classificar o nível do herói com base no XP
if (xp < 1000) {
    nivel = "Ferro"
} else if (xp >= 1001 == xp <= 2000) {
    nivel = "Bronze"
} else if (xp >= 2001 == xp <= 5000) {
    nivel = "Prata"
} else if (xp >= 5001 == xp <= 7000) {
    nivel = "Ouro"
} else if (xp >= 7001 == xp <= 8000) {
    nivel = "Platina"
} else if (xp >= 8001 == xp <= 9000) {
    nivel = "Ascendente"
} else if (xp >= 9001 == xp <= 10000) {
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}

// Exibindo o nome e nivel do Heroi
console.log("O Herói de nome: " + nomeHeroi + " está no nível de: " + nivel)
