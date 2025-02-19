import leia from 'readline-sync'

export default function atividade03() {
//   Questão 03
//   Escreva um programa que simule o jogo "Pedra, Papel e Tesoura". 
//   O usuário deve informar sua escolha, e o computador deve fazer uma escolha aleatória. 
//   O programa deve determinar o vencedor com base nas seguintes regras:

//   Pedra vence Tesoura.
//   Tesoura vence Papel.
//   Papel vence Pedra.
// 


  let escolhaComputadorConvertida = ""

  let escolhaPlayer = leia.question('Digite sua escolha: ');

  let escolhaComputador = Math.floor(Math.random() * 3);
  
  if(escolhaComputador === 0){
     escolhaComputadorConvertida = "Pedra"
  }

  if(escolhaComputador === 1){
     escolhaComputadorConvertida = "Papel"
  }

  if(escolhaComputador === 2){
     escolhaComputadorConvertida = "Tesoura"
  }


  console.log(escolhaComputadorConvertida)

  if(escolhaPlayer === escolhaComputadorConvertida){
    console.log(`Empataram, pois jogo ${escolhaPlayer} e o computador jogou ${escolhaComputadorConvertida}.`);
    return
  }else{
    if(escolhaPlayer === "Pedra" && escolhaComputadorConvertida === "Tesoura"){
      console.log(`Voce venceu, pois jogou ${escolhaPlayer} e o computador jogou ${escolhaComputadorConvertida}`);
      return
    }else if(escolhaPlayer === "Pedra" && escolhaComputadorConvertida === "Papel"){
      console.log(`Voce perdeu, pois jogou ${escolhaPlayer} e o computador jogou ${escolhaComputadorConvertida}`)
      return
    }else if(escolhaPlayer === "Papel" && escolhaComputadorConvertida === "Pedra"){
      console.log(`Voce venceu, pois jogou ${escolhaPlayer} e o computador jogou ${escolhaComputadorConvertida}`)
      return
    }else if(escolhaPlayer === "Papel" && escolhaComputadorConvertida === "Tesoura"){
      console.log(`Voce perdeu, pois jogou ${escolhaPlayer} e o computador jogou ${escolhaComputadorConvertida}`)
      return
    }else if(escolhaPlayer === "Tesoura" && escolhaComputadorConvertida === "Papel"){
      console.log(`Voce venceu, pois jogou ${escolhaPlayer} e o computador jogou ${escolhaComputadorConvertida}`);
      return
    }else if(escolhaPlayer === "Tesoura" && escolhaComputadorConvertida === "Pedra"){
      console.log(`Voce perdeu, pois jogou ${escolhaPlayer} e o computador jogou ${escolhaComputadorConvertida}`)
      return
    }else{
      console.log('Erro');
      return
    }
  }


}