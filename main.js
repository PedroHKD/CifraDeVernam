//modulo de arquivos do nodejs
const fs = require('fs');

//funcao para criptografar e decriptografar
function criptografar(arquivoTxt, chave){
    const textoI = fs.readFileSync(arquivoTxt, 'utf8')
    let textoC = ''

    for (let i = 0; i < textoI.length; i++){
        const cIncial = textoI.charCodeAt(i)
        const cChave = chave.charCodeAt(i % chave.length)
        const resultadoXOR = cIncial ^ cChave
        textoC += String.fromCharCode(resultadoXOR)
    }

    fs.writeFileSync(arquivoTxtFinal, textoC, 'utf-8')
}

//funcao para desciptografar
function descriptografar(arquivoTxt, chave){
    const textoI = fs.readFileSync(arquivoTxt, 'utf8')
    let textoD = ''

    for (let i = 0; i < textoI.length; i++){
        const cIncial = textoI.charCodeAt(i)
        const cChave = chave.charCodeAt(i % chave.length)
        const resultadoXOR = cIncial ^ cChave
        textoD += String.fromCharCode(resultadoXOR)
    }

    fs.writeFileSync(arquivoTxtFinal, textoD, 'utf-8')
}

const arquivoTxt = 'arquivo_final.txt' //coloque aqui o nome do arquivo txt para ser criptografado ou descriptografado
const chave = 'chave123' //coloque aqui a chave de criptografia
const arquivoTxtFinal = 'arquivo_finalDesc.txt' //coloque aqui o nome que deseja para o arquivo
let opcao = 1 //opcao = 1 para criptografar e opcao = 2 para decriptografar

if(opcao = 1){
    criptografar(arquivoTxt, chave)
    console.log("Arquivo criptografado com sucesso")
} else if(opcao = 2){
    descriptografar(arquivoTxt, chave)
    console.log("Arquivo decriptografado com sucesso")
} else {
    console.log("Opcao invalida")
    process.kill
}