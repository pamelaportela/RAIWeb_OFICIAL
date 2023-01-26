var i = 2

//funcao que adiciona meta
function adicionar_meta()
{
    //promp que pergunta qual e a proxima meta
    let a_meta = prompt('Insira a próxima meta'); //variavel que armazena o texto 
    if(a_meta== ''|| a_meta==null) //se for vazio nada sera adicionado
    {
        return;
    }
    //elemento 'pai'(que contem a div que sera adicionada)
    var elemento_pai = document.getElementById('andamento');
    //elemento que procede a div(a div sera adicionada antes desse elemento)
    var elemento_ambaixo = document.getElementById('botao_de_adicionar_meta');
    
    // Criar elemento
    var caixa_nova = document.createElement('div'); //A div que sera adicionada
    var nome_meta = document.createElement('label'); //tag que estara dentro da div
    var botao_de_marcar = document.createElement('input'); //tag que estara fora da div
    var botao_de_remover= document.createElement('button');
    var icone_lixo = document.createElement('i') //icone de lixeira
    var botao_de_editar = document.createElement('button')
    var icone_lapiz = document.createElement('i')

    // Criando atributos  para as das tags
    nome_meta.setAttribute('for',('meta'+(i)));  //criando
    nome_meta.setAttribute('class','texto_meta'); //class
    nome_meta.setAttribute('id',('texto_meta'+(i)))
    nome_meta.textContent = a_meta;  //conteudo
    
    //atributos para a caixinha de marcar
    botao_de_marcar.setAttribute('class','checkbox') 
    botao_de_marcar.setAttribute('type','checkbox') 
    botao_de_marcar.setAttribute('id', ('meta_'+(i)))
    botao_de_marcar.setAttribute('onclick','progresso()')

    //atributos para o botao de editar
    botao_de_editar.setAttribute('class','botao_editar');
    botao_de_editar.setAttribute('onclick','editar_meta('+(i)+')')
    botao_de_editar.setAttribute('id','botao_de_editar_meta')

    //atributos para o icone de editar
    icone_lapiz.setAttribute('class','fa-solid fa-pencil');
    botao_de_editar.appendChild(icone_lapiz);

    //atributos para o caixinha botao de excluir
    botao_de_remover.setAttribute('class','botao_remover');
    botao_de_remover.setAttribute('onclick','remover_meta('+(i)+')')
    botao_de_remover.setAttribute('id','botao_de_remover_meta')
    
    //atributos para o icone de excluir
    icone_lixo.setAttribute('class','fa-solid fa-trash-can')
    botao_de_remover.appendChild(icone_lixo); //coloca o icone de lixo como um elemento dentro do botao de remover
    
    //atributos da div nova
    caixa_nova.setAttribute('class','caixa_da_checkbox')
    caixa_nova.setAttribute('id',('caixa_da_checkbox'+(i)))

    // Inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
    caixa_nova.appendChild(botao_de_marcar);
    caixa_nova.appendChild(nome_meta);
    caixa_nova.appendChild(botao_de_editar);
    caixa_nova.appendChild(botao_de_remover);
    elemento_pai.insertBefore(caixa_nova,elemento_ambaixo);
    
    console.log(i=i+1);
    progresso();
}

function remover_meta(numero_meta)
{
    let confirmacao = confirm("TEM CERTEZA QUE DESEJA APAGAR A META?");
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

//funcao que define a parte preenchida da barra de progresso
function progresso()
{
    //declaracao de variaveis
    var metas_concluidas = 0
    const elemento_pai = document.getElementById('andamento');
    //lista com as checkbox do site
    var caixas_de_marcar = elemento_pai.getElementsByClassName('checkbox');
    var barra_de_progresso = document.getElementById('barra_de_progresso')
    
    for(j=0; j< caixas_de_marcar.length; j++)

        if(caixas_de_marcar[j].checked==true)
        {
            metas_concluidas++
        }

    grafico_progresso = (metas_concluidas/caixas_de_marcar.length)*100
    barra_de_progresso.style.setProperty('--progress',grafico_progresso)
    
        
}
        


//Joao Felipe Silva Damasceno 2022 RAITEC