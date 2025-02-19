import leia from 'readline-sync'

export default function atividade04() {  
  // Questão 04
  // Crie um programa de adivinhação de números. 
  // O computador deve escolher aleatoriamente um número entre 1 e 100, e o usuário deve tentar adivinhar. 
  // Após cada tentativa, o programa deve informar se o número correto é maior ou menor que a tentativa. 
  // O jogo termina quando o usuário acertar o número.
  let tentativaAcertar = leia.questionInt('Digite um numero')

  
  let numeroMagico = Math.trunc(Math.random() * 101)
  

  console.log(numeroMagico);

  do {
    if (tentativaAcertar < numeroMagico) {
      console.log('O número mágico é maior.');
    } else if (tentativaAcertar > numeroMagico) {
      console.log('O número mágico é menor.');
    }

    tentativaAcertar = leia.questionInt('Errou, tente de novo. ');
    
  } while (tentativaAcertar !== numeroMagico);  


  if(numeroMagico === tentativaAcertar){
    console.log(`Voce digitou ${tentativaAcertar}, e o numero magico e: ${numeroMagico}. Parabens!`)
  }

}