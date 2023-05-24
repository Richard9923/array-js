

const alunos = ['Ana', 'Pedro', 'Guilherme'];
const medias = [1,4,6];

const listaAlunosMedias = [alunos, medias];

function nomeAluno (aluno) {

    if (listaAlunosMedias[0].includes(aluno)) {
        console.log(`${aluno} esta cadastrado!`);

        const [alunos, medias] = listaAlunosMedias;
        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];

        console.log(mediaDoAluno);
    } else {
        console.log(`Aluno não encontrado!`);
    }

}

nomeAluno('Ana');



