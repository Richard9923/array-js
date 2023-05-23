

const alunos = [
    ['Ana', 'Pedro', 'Guilherme'],
    [7,4,5]
];


function nomeAluno (nome) {

    if (nome == 'Ana') {
        return `A média de ${alunos[0][0]} é de ${alunos[1][0]}`
    } else if (nome == 'Pedro') {
        return `A média de ${alunos[0][1]} é de ${alunos[1][1]}`
    } else if (nome == 'Guilherme') {
        return `A média de ${alunos[0][2]} é de ${alunos[1][2]}`
    } else {
        return 'Aluno não encontrado'
    }
}

console.log(nomeAluno('Ana'));
console.log(nomeAluno('Pedro'));
console.log(nomeAluno('Guilherme'));
