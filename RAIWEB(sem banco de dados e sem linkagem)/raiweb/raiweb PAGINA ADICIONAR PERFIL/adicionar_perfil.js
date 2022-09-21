
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
