var i = 7
//funcao que adiciona projeto
function adicionar_projeto()
{
    //promp que pergunta qual e o nome do proximo projeto
    let nome = prompt('Qual o nome do próximo projeto?'); //variavel que armazena o texto 
    if(nome== ''|| nome==null) //se for vazio nada sera adicionado
    {
        return;
    }
    //promp que pergunta qual e a data de inicio do proximo projeto
    let data = prompt('Qual a data de início desse projeto? Escreva da forma: xx/xx/xxxx'); //variavel que armazena o texto 
    if(data== ''|| data==null) //se for vazio nada sera adicionado
    {
        return;
    }
    //elemento 'pai'(que contem a div que sera adicionada)
    var elemento_pai = document.getElementById('mural_projetos');
    //elemento que procede a div(a div sera adicionada antes desse elemento)
    var elemento_ambaixo = document.getElementById('botao_projeto');
    
    // Criar elemento
    var caixa_nova = document.createElement('div'); //A div que sera adicionada
    var imagem = document.createElement('img'); //tag que estara dentro da div
    var capa = document.createElement('div'); //tag que estara dentro da div
    var nome_do_projeto = document.createElement('h3'); // titulo
    var data_de_inicio = document.createElement('h3'); // data
    var botao_de_remover= document.createElement('button');
    var icone_lixo = document.createElement('i') //icone de lixeira
    var botao_de_editar = document.createElement('button')
    var icone_lapiz = document.createElement('i')

    // Criando atributos  para as das tags
    imagem.setAttribute('for',('img'+(i)));  //criando
    imagem.setAttribute('class','img-fluid'); //class
    imagem.setAttribute('id',('Projeto'+(i)))
    imagem.setAttribute('src','img/projeto.JPG');
    
    capa.setAttribute('for',('capa'+(i)));
    capa.setAttribute('class','banner-content'); //class
    nome_do_projeto.textContent = nome;
    capa.setAttribute('h3',nome);
    data_de_inicio.textContent = data;
    capa.setAttribute('h3',data);

    //atributos para o botao de editar
    botao_de_editar.setAttribute('class','botao_editar');
    botao_de_editar.setAttribute('onclick','editar_meta('+(i)+')')
    botao_de_editar.setAttribute('id','botao_de_editar_meta')

    //atributos para o icone de editar
    icone_lapiz.setAttribute('class','fa-solid fa-pencil');
    botao_de_editar.appendChild(icone_lapiz);

    //atributos para o caixinha botao de excluir
    botao_de_remover.setAttribute('class','botao');
    botao_de_remover.setAttribute('onclick','remover_meta('+(i)+')')
    botao_de_remover.setAttribute('id','botao_de_remover_meta')
    
    //atributos para o icone de excluir
    icone_lixo.setAttribute('class','fa-solid fa-trash-can')
    botao_de_remover.appendChild(icone_lixo); //coloca o icone de lixo como um elemento dentro do botao de remover
    
    //atributos da div nova
    caixa_nova.setAttribute('class','caixa_da_checkbox')
    caixa_nova.setAttribute('id',('caixa_da_checkbox'+(i)))

    // Inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
    
    caixa_nova.appendChild(imagem);
    caixa_nova.appendChild(botao_de_editar);
    caixa_nova.appendChild(botao_de_remover);
    elemento_pai.insertBefore(caixa_nova,elemento_ambaixo);
    
    console.log(i=i+1);
    progresso();
}

function remover_meta(numero_meta)
{
    let confirmacao = confirm("TEM CERTEZA QUE DESEJA APAGAR O PROJETO?");
    if (confirmacao ==false)
    {
        return;
    }

    var meta_que_sera_apagada = document.getElementById(('caixa_da_checkbox'+(numero_meta)));
    if (meta_que_sera_apagada.parentNode) 
    {
        meta_que_sera_apagada.parentNode.removeChild(meta_que_sera_apagada);
    }

    progresso();

}

function editar_meta(numero_meta)
{
    var meta_editada = document.getElementById(('texto_meta'+(numero_meta)))
    var texto_atual = meta_editada.textContent
    let novo_texto = prompt('EDITAR META: ', texto_atual);
    if (novo_texto == null)
    {
        return
    }
    meta_editada.textContent = novo_texto
}