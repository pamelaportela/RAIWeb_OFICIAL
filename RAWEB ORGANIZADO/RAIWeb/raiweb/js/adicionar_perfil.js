
function remover_conteudo(id){
    elemento = document.getElementById(id)
    elemento.value = ''
}
//Funcao geradora de senhas    
function gerar_senha() {

    // characteres = "0123456789abcdefghijklmnopqrstuvwxyz"
    // senha = ""
    // for (var i = 0, n = characteres.length; i < 4; ++i) {
    //         senha += characteres.charAt(Math.floor(Math.random() * n));
    //    }
    //    alert(senha);
    return(0)
    }

function comparar_senhas(){
    senha = document.getElementById('senha')
    confirmacao_de_senha = document.getElementById('confimacao_de_senha')
    if (senha.value!=confirmacao_de_senha.value){
        alert('AS SENHAS NÃO CONFEREM!')
    }
}

function adicionar_foto_de_perfil(){
    return(0)
    }

//MASCARA PARA CPF e invalidacao
input = document.getElementById('cpf')
//cpf invalido
input.addEventListener('keypress',() =>{
    let quantidade_caracteres_input = input.value.length
    if( quantidade_caracteres_input < 14){
        input.style = "border:1px solid #ff0000"
    }else{
        input.style = "border:1px solid ##05053F"
    }
})

function validacao_cpf(){
    if(input.value.length <14){
        alert('CPF invalido')
    }
}
//mascara
input.addEventListener('keypress',() =>{
    let quantidade_caracteres_input = input.value.length
    if(quantidade_caracteres_input === 3 || quantidade_caracteres_input === 7){
        input.value += '.'
    }else if(quantidade_caracteres_input === 11){
        input.value += '-'
    }
})

var filtro_teclas = function(event) {
    return ((event.charCode >= 48 && event.charCode <= 57) || (event.keyCode == 45 || event.charCode == 46))
  }
