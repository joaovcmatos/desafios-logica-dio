/*
Instruções para entrega
# 1️⃣ Desafio Classificador de nível de Herói
**O Que deve ser utilizado**
- Variáveis ( var, let, const)
- Operadores ( todos aqueles kkk ex: ===, !==, >=, <=)
- Laços de repetição  (for, while, do while)
- Estruturas de decisões ( if, else if, else) (Switch Case= (switch(expressão),{case, break, default} )
## Objetivo
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói,
 depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
## Saída
Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

let nomeDoHeroi = "joão";
let xpHeroi = 77777;
let classe ="";
if (xpHeroi <= 1000) {
    classe = "Ferro";
} else if (xpHeroi <= 2000) {
    classe = "Bronze";
} else if (xpHeroi <= 5000) {
    classe = "Prata";
} else if (xpHeroi <= 7000) {
    classe = "Ouro";
} else if (xpHeroi <= 8000) {
    classe = "Platina";
} else if (xpHeroi <= 9000) {
    classe = "Ascendente";
} else if (xpHeroi <= 10000) {
    classe = "Imortal";
} else  {
    classe = "Radiante";
}
 console.log( "O Heroi " + nomeDoHeroi + " está no nível: " + classe);
