const notaFinal = 9;
const faltas = 2;
const advertencias = 0;

if (notaFinal < 7 && faltas > 4){
    console.log('Reprovado.');
} else {
    console.log('Aprovado.')
}

if (faltas <= 2 && !advertencias) {
    console.log('Bônus recebido.');
} else {
    console.log('Bônus não recebido.')
}