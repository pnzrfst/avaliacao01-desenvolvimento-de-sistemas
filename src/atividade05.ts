import leia from 'readline-sync';

export default function atividade05() {
  // // Questão 05
  // // Você precisa desenvolver um algoritmo para calcular a pontuação de todos os jogadores de um time de futebol. 
  // // Nesse momento será analisada apenas a quantidade de gols, passes certos e passes errados. (Utilize Vetor e Objeto)

  // // Cada Gol: 50 Pontos
  // // Cada Passe Certo: 10 Pontos
  // // Cada Passe Errado: -5 Pontos
  // // Você deve solicitar o nome do jogador, quantidade de gols, numero de passes certos e quantidade de passes errados. 
  // // O algoritmo deve calcular a pontuação de cada jogador e informar se o jogador foi bem ou mal na partida, 
  // levando como base a seguinte tabela. 
  // No final, deve apresentar o jogador com melhor pontuação. Lembre-se que um time de futebol tem 10 jogadores de linha.

  // // Pontuação < 50 - Péssima partida.
  // // Pontuação de 50 até 100 - Partida ruim.
  // // Pontuação de 100 até 150 - Fez o básico
  // // Pontuação de 150 até 200 - Foi bem na partida
  // // Pontuação acima de 200 - Jogou demais

  let jogadores: any[] = []

  do{
    let novoJogador = {
      nome: leia.question("Insira um nome: "),
      gols: leia.questionInt("Digite a qtd de gols: "),
      passesCertos: leia.questionInt("Digite a qtd de passes certos: "),
      passesErrados: leia.questionInt("Digite a qtd de passes errados: "),
      pontuacao: 0
    }

    const resultado = ((novoJogador.gols * 50) + (novoJogador.passesCertos * 10)) - (novoJogador.passesErrados * 5);

    novoJogador.pontuacao = resultado;

    if(resultado < 50){
      console.log('Voce fez uma pessima partida.');
    }else if(resultado >= 50 && resultado < 100){
      console.log('Voce fez uma partida ruim.');
    }else if(resultado >= 100 && resultado < 150){
      console.log('Fez o basico.');
    }else if(resultado >= 150 && resultado < 200){
      console.log('Foi bem na partida.')
    }else{
      console.log('Jogou demais.')
    }

    jogadores.push(novoJogador);

  }while(jogadores.length < 10);

  let melhorPontuacao = -Infinity; 
  let melhorJogador = null
  
  for(var i = 0; i < jogadores.length; i++){
    let melhorPontuacao = 0
    
    if(jogadores[i].pontuacao > melhorPontuacao){
      melhorPontuacao = jogadores[i].pontuacao;
      melhorJogador = jogadores[i].nome
    }

  }
  
  console.log(`O jogador com maior pontuacao foi o: ${melhorJogador}`)

}