import leia from 'readline-sync'

export default function atividade02() {
  // Questão 02
  // Escreva um programa que peça ao usuário a idade de uma pessoa e determine sua categoria com base nas seguintes regras:

  // Menor de 12 anos: "Criança"
  // De 12 a 17 anos: "Adolescente"
  // De 18 a 59 anos: "Adulto"
  // 60 anos ou mais: "Idoso"
  
  let idade = leia.questionInt("DIGITE SUA IDADE: ")


  if(idade < 12){
    console.log("Voce eh uma crianca.");
    return
  }else if(idade >= 12 && idade <= 17){
    console.log("Voce eh um adolescente.");
    return
  }else if(idade >= 18 && idade <= 59){
    console.log("Voce eh um adulto.");
    return
  }else{
    console.log("Voce eh um idoso.")
  }
}