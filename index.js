let herois = ["Homem de Ferro", 'Batman',"Super Homem"];
let ranking = [];

let ranking2 =["ferro","bronze","prata","Ouro","Diamante","Lendário","Imortal"];






/*  primeira solucao com switch */
const partidasRankeadas = (v,d)=>{
    const resultado = v - d;

    switch (true) {
        case (resultado >= 0 && resultado <= 9):
            ranking.push("Ferro");
            break;
            
            case (resultado >= 10 && resultado <= 20):
                ranking.push("Bronze");
            break;
    
    
            case (resultado >= 21 && resultado <= 50):
                ranking.push("Prata");
            break;
    
    
            case (resultado >= 51 && resultado <= 80):
                ranking.push("Ouro");
            break;
    
            case (resultado >= 81 && resultado <= 90):
                ranking.push("Diamante");
            break;
        
            case (resultado >= 91 && resultado <= 100):
                ranking.push("Lendário");
            break;
    
        
        default:
            ranking.push("Imortal");
            break;
    }
    console.log(resultado);

    return console.log(`O Herói tem de saldo de ${resultado}  e está no nível de ${ranking[ranking.length - 1]}`);
}

partidasRankeadas(90,5);


/*  resultado 2 com estrutura de decisao  */
const partidasRankeadas2 = (vitoria , derrota)=>{
    const resultado = vitoria  - derrota;

   
    if(resultado < 10){
       console.log(`O Herói tem de saldo de ${resultado}  e  está no nível de ${ranking2[0]}`);
    }
    else if(resultado >= 10 && resultado <= 20 ){
       console.log(`O Herói tem de saldo de ${resultado}  e  está no nível de ${ranking2[1]}`);
    }
    else if(resultado >= 21 && resultado <=50){
       console.log(`O Herói tem de saldo de ${resultado}  e  está no nível de ${ranking2[2]}`);
    } 
    else if(resultado >= 51 && resultado <= 80){
       console.log(`O Herói tem de saldo de ${resultado}  e  está no nível de ${ranking2[3]}`);
    }
    else if(resultado >= 81 && resultado <= 90){
       console.log(`O Herói tem de saldo de ${resultado}  e  está no nível de ${ranking2[4]}`);
    }
   else if(resultado >= 91 && resultado <= 100 ){
       console.log(`O Herói tem de saldo de ${resultado}  e  está no nível de ${ranking2[5]}`);
    }
    else if(resultado >=101){
       console.log(`O Herói tem de saldo de ${resultado}  e  está no nível de ${ranking2[6]}`);
    };


}

partidasRankeadas2(100,20);
