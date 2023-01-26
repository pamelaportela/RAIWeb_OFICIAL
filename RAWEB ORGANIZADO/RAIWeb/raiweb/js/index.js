function login()
{
// Declaracao de variavel
nome = document.getElementById('nome_de_usuario')
senha = document.getElementById('senha')
// getElementsByTagName retorna um vetor
botao = document.getElementsByTagName('button')
// Salvando os dados antigos inseridos nos input
verificacao_nome = nome.value;
verificacao_senha = senha.value;

//
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

// Quando os dados inseridos nao conferem
else{
   let inputs = document.getElementsByTagName('input')
   nome.value = verificacao_nome

    for(i=0; i< inputs.length; i++)
    {
        inputs[i].style = 'border: 4px solid red' 
        botao[0].style = 'border: 2px solid red' 
    }

//   setTimeout faz com que a funcao dentro das chaves so rode apos o tempo(milisegundos) indicados apos a virgula
    setTimeout(() => { 

    for(i=0; i< inputs.length; i++)
    {
        inputs[i].style = 'border: none'
        botao[0].style = "border:none"


    }
}, 1000);
    
}

}

function problema(){
    var elemento_pai = document.getElementById('corpo')
    var elemento_novo = document.createElement('iframe')
    var elemento_ambaixo = document.getElementById
    ('elemento_a_frente');

    elemento_novo.setAttribute('id','melhor_miranha')
    elemento_novo.setAttribute('src','media/pictures/WhatsApp Video 2022-09-24 at 11.57.19.mp4')
    elemento_novo.setAttribute('width','80%')
    elemento_novo.setAttribute('height','80%')

    elemento_pai.insertBefore(elemento_novo,elemento_ambaixo);
    setTimeout(() => { window.location.href='#foo';}, 100);

    var elemento_apagado = document.getElementById('melhor_miranha')
    setTimeout(() => { elemento_apagado.parentNode.removeChild(elemento_apagado);}, 4000);
}
