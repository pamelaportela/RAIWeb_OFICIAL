function login()
{
nome = document.getElementById('nome_de_usuario')
senha = document.getElementById('senha')
botao = document.getElementsByTagName('button')
verificacao_nome = nome.value;
verificacao_senha = senha.value;
if( nome.value = 'dudu' && senha.value=='gente boa')
{
    open('https://www.youtube.com/watch?v=3r3YeEm8RAk')
    nome.value = verificacao_nome
    senha.value = verificacao_senha
    
}
else if( nome.value = 'Silvestre' && senha.value=='pistolaquerendodarstrike'){
    open('https://www.youtube.com/watch?v=xvFZjo5PgG0')
    nome.value = verificacao_nome
    senha.value = verificacao_senha

}

else{
   let inputs = document.getElementsByTagName('input')
   nome.value = verificacao_nome

    for(i=0; i< inputs.length; i++)
    {
        inputs[i].style = 'border: 4px solid red' 
        botao[0].style = 'border: 2px solid red' 
    }

  
    setTimeout(() => { 

    for(i=0; i< inputs.length; i++)
    {
        inputs[i].style = 'border: none'
        botao[0].style = "border:none"


    }
}, 1000);
    
}

}
