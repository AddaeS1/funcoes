let soma = 0;
let questoesCertas = 0;
const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
}


function corrigirProva(){
   prova.questoes.forEach(questao =>{
    if (questao.resposta === questao.correta){
        soma +=1 ;
              
    }
    console.log("O aluno(a) ",(prova.aluno),"acertou", (soma), "questões e obteve nota ", (soma*20))          
   }
    
    )

}
corrigirProva(prova);

    
