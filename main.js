//modulo de arquivos do nodejs
const fs = require('fs');

//funcao para criptografar e decriptografar
function criptografar(arquivoTxt, chave){
    const textoI = fs.readFileSync(arquivoTxt, 'utf8')
    let textoC = ''
    let arquivoTxtFinal = arquivoTxt + '_criptografado.txt'

    for (let i = 0; i < textoI.length; i++){
        const cIncial = textoI.charCodeAt(i)
        const cChave = chave.charCodeAt(i % chave.length)
        const resultadoXOR = cIncial ^ cChave
        textoC += String.fromCharCode(resultadoXOR)
    }

    fs.writeFileSync(arquivoTxtFinal, textoC, 'utf-8')
}

//funcao para desciptografar
function decriptografar(arquivoTxt, chave){
    const textoI = fs.readFileSync(arquivoTxt, 'utf8')
    let textoD = ''
    let arquivoTxtFinal = arquivoTxt + '_decriptografado.txt'

    for (let i = 0; i < textoI.length; i++){
        const cIncial = textoI.charCodeAt(i)
        const cChave = chave.charCodeAt(i % chave.length)
        const resultadoXOR = cIncial ^ cChave
        textoD += String.fromCharCode(resultadoXOR)
    }

    fs.writeFileSync(arquivoTxtFinal, textoD, 'utf-8')
}

//const arquivoTxt = 'arquivo_inicial.txt_criptografado.txt' //coloque aqui o nome do arquivo txt para ser criptografado ou descriptografado
//const chave = 'chave123' //coloque aqui a chave de criptografia
//const opcao = 'decriptografar' //opcao para criptografar ou decriptografar o arquivo txt
const [arquivoTxt, chave, opcao] = process.argv.slice(2) //Pegar os nomes apartir do terminal

if (!arquivoTxt || !chave || !opcao) {
    console.log('O script deve ser executado da seguinte forma:\nVa ate a pasta onde o script e crie ou cole o arquivo.txt que voce deseja criptografar/decriptogravar(Vernam)\nApos isso abra o terminal execute o seguinte comando: node main.js nomeDoArquivo chave criptografar ou decriptografar\nExemplo:\n"node main.js aula7.txt questoes criptografar"')
    process.exit(1)
}

if(opcao === 'criptografar'){
    criptografar(arquivoTxt, chave)
    console.log("Arquivo criptografado com sucesso")
} else if(opcao === 'decriptografar'){
    decriptografar(arquivoTxt, chave)
    console.log("Arquivo decriptografado com sucesso")
} else {
    console.log("Opcao invalida")
    process.kill
}