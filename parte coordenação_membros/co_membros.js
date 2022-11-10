function buscar_item(itens, barra_de_pesquisa) 
{
    // pega o que está escrito na barra de pesquisa no momento em que a função é chamada
    let item_procurado = document.getElementById(barra_de_pesquisa).value

// lower case pega o valor da string e transforma em minusculo
    item_procurado= ignorar_acento(item_procurado)
    item_procurado= item_procurado.toLowerCase();

// Pegando os elementos do site para realizar a busca getElementsByClassName retorna uma array
    let elementos_do_site = document.getElementsByClassName(itens);
    for (i = 0; i < elementos_do_site.length; i++) 
    { 

        //o if está dizendo "se em o elemento do site estiver incluido o item procurado entao faça:"
        if (!ignorar_acento(elementos_do_site[i].innerHTML.toLowerCase()).includes(item_procurado)) 
        //se não for o elemento procurado entao ele não será mais mostrado

        {
            elementos_do_site[i].style.display="none";
        }
        else 
        {
    //se for o elemento procurado entao ele será  mostrado
            elementos_do_site[i].style.display="inline-flex";                 
        }
    }
}

// funcao que filta os elementos
function filtrar_lista(itens, filtro, tipo) 
// itens sao os itens que serao filtrados ex(lista de membros. lista de componentes); filtro eh o filtro que foi aplicado ex(setor inovacao, participando do Dtec); tipo eh para o que o filtro foi aplicado, se eh filtro de membro, se eh filtro para componentes etc
{
    // pega o que está escrito no filtro
    nome_filtro = filtro
    filtro = document.getElementById(filtro)

    // mudar as cores dos botoes nao clicados
    let botoes = document.getElementsByName(tipo);

    for(i=0; i < botoes.length; i++){
        botoes[i].style.backgroundColor = 'white'
        botoes[i].style.color = '#05053F'
        botoes[i].setAttribute('onclick','filtrar_lista(' +'"' + itens + '"' +', '+ '"' + botoes[i].id + '"' + ', '+ '"' + tipo + '"' + ')')
        
    }

    // mudar a cor do botao clicado
    filtro.style.backgroundColor = 'rgba(136, 3, 136, 0.733)'
    filtro.style.color = 'white'
    filtro.setAttribute('onclick','desligar_filtro(' +'"' + itens + '"' +', '+ '"' + nome_filtro + '"' + ', '+ '"' + tipo + '"' + ')')

    
    let item_procurado = filtro.value

// Pegando os elementos do site para realizar a busca getElementsByClassName retorna uma array
    let elementos_do_site = document.getElementsByClassName(itens);
    

    for (i = 0; i < elementos_do_site.length; i++) 
    { 

        //o if está dizendo "se em o elemento do site estiver incluido o item procurado entao faça:"
        if ((elementos_do_site[i].value  != item_procurado) && (!ignorar_acento(elementos_do_site[i].innerHTML.toLowerCase()).includes(ignorar_acento(item_procurado.toLowerCase()))))
        //se não for o elemento procurado entao ele não será mais mostrado
        {
            elementos_do_site[i].style.display="none";
        }
        else 
        {
    //se for o elemento procurado entao ele será  mostrado
            elementos_do_site[i].style.display="inline-flex";                 
        }
    }

    

}

// funcao que desliga o filtro permitindo que todos os elementos aparecam novamente
function desligar_filtro(itens, filtro, tipo)
{
    nome_filtro = filtro
    filtro = document.getElementById(filtro)
    filtro.setAttribute('onclick','filtrar_lista(' +'"' + itens + '"' +', '+ '"' + nome_filtro + '"' + ', '+ '"' + tipo + '"' + ')')
    filtro.style.backgroundColor = 'white'
    filtro.style.color = 'black'
    let elementos_do_site = document.getElementsByClassName(itens);
    for (i = 0; i < elementos_do_site.length; i++) 
    { 

            elementos_do_site[i].style.display="inline-flex";                  
    }
}

function ignorar_acento(str)
{
    str = str.replace(/[ÀÁÂÃÄÅ]/,"A");
    str = str.replace(/[àáâãäå]/,"a");
    str = str.replace(/[ÉÊ]/,"E");
    str = str.replace(/[éê]/,"e");
    str = str.replace(/[Ç]/,"C");
    str = str.replace(/[ç]/,"c");
    str = str.replace(/[w]/,"u");
    return str.replace(/[^a-z0-9]/gi,''); 
}

function ver_detalhes(id){
    console.log(document.getElementById(id).parentElement.parentElement.parentElement.textContent)
    document.getElementById(id).textContent = 'Função de mostrar detalhes ainda sendo trabalhada'
    // // pego um objeto do html com base no id. Esse pobjeto tambem sera o referencial
    // objeto = document.getElementById(id)

    // // Criando Elemento novo
    // elemento_novo = document.createElement('iframe')
    // elemento_novo.setAttribute('id','melhor_miranha')
    // elemento_novo.setAttribute('src','https://sm.ign.com/t/ign_br/screenshot/default/goku_an6e.h720.jpg')
    // elemento_novo.setAttribute('width','80%')
    // elemento_novo.setAttribute('height','80%')
    // elemento_novo.setAttribute('position','absolute')

    // //declaro o elemento pai do objeto
    // elemento_pai = objeto.parentElement;
    // alert(!(elemento_pai.id.includes('pai')))
    // // enquanto no id do pai do objeto nao houver a palavra "pai", sera pega a tag pai do pai. Essa funcao retorna a tag de maior hierarquia e pega como elemento filho a tag de segunda maior hierarquia
    // while(!(elemento_pai.id.includes('pai')) == true){
    //     elemento_filho = elemento_pai
    //    elemento_pai = elemento_pai.parentElement;
    // }
    // elemento_pai.style.backgroundColor = 'green'
    // elemento_pai.style.position = 'relative'
    // elemento_pai.style.top = '0'
    // elemento_pai.insertBefore(elemento_novo,elemento_filho);
    

}