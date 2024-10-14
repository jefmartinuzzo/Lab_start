// Classe Heroi
class Heroi {
    // Construtor da classe
    constructor(nome, idade, tipo) {
        this.nome = nome;  // Nome do herói
        this.idade = idade;  // Idade do herói
        this.tipo = tipo;  // Tipo do herói (guerreiro, mago, monge, ninja)
    }

    // Método atacar
    atacar() {
        let ataque;
        
        // Estrutura de decisão para definir o ataque com base no tipo do herói
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "não tem um ataque definido";
        }

        // Exibe a mensagem do ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe Heroi

// Criando diferentes heróis
const heroi1 = new Heroi("Aragorn", 90, "guerreiro");
const heroi2 = new Heroi("Gandalf", 2019, "mago");
const heroi3 = new Heroi("Bruce Lee", 33, "monge");
const heroi4 = new Heroi("Naruto", 18, "ninja");

// Testando os ataques dos heróis
heroi1.atacar(); // O guerreiro atacou usando espada
heroi2.atacar(); // O mago atacou usando magia
heroi3.atacar(); // O monge atacou usando artes marciais
heroi4.atacar(); // O ninja atacou usando shuriken
