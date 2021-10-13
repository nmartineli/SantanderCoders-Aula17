// Programação Orientada a Objeto

//Classes - permitem maior controle sobre a criação de objetos

class Car {
  #marca;
  constructor(marca, modelo, cor) {
    this.#marca = marca;
    this.modelo = modelo;
    this.cor = cor;
  }
  andar() {
    console.log('Andando...');
    console.log('Andando..');
    console.log('Andando.');
  }
}

let cruze = new Car('Chevrolet', 'Cruze', 'Vermelho');
let onix = new Car('Chevrolet', 'Onix', 'Prata');
//Dá para conferir qual a origem da instância de cada objeto Cada instância é 100% independente entre si

/* Herança:
As classes podem herdar informações de outras classes 
A classe filha extende da classe mãe. Todos as instâncias da classe filha (ou classe especialista) serão instâncias também da classe mãe 
(ou classe principal). 
*/

class Pessoa {
  constructor(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  falar(texto) {
    console.log(`${this.name} ${this.lastname}: ${texto} `);
  }
}

class Aluno extends Pessoa {
  constructor(name, lastname, age, crew) {
    super(name, lastname, age);
    this.crew = crew;
  }
}

let natalia = new Aluno('Natalia', 'Martineli', 34, '811');

console.log(natalia instanceof Aluno);
console.log(natalia instanceof Pessoa);

natalia.falar('Olá mundo');
