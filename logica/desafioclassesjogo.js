class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let poder = "";
  
      if (this.tipo === "mago") {
        poder = "magia";
      } else if (this.tipo === "guerreiro") {
        poder = "espada";
      } else if (this.tipo === "monge") {
        poder = "artes marciais";
      } else {
        poder = "shuriken";
      }
  
      return `${this.nome}, o ${this.tipo} de ${this.idade} anos, atacou usando ${poder}`;
    }
  }
  
  const resultado = new Heroi("João", 25, "mago");
  console.log(resultado.atacar()); 