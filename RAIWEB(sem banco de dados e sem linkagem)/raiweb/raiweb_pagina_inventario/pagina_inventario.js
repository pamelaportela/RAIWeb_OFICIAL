function buscar_item(itens,nome_dos_itens, barra_de_pesquisa) 
{
    // pega o que está escrito na barra de pesquisa no momento em que a função é chamada
    let item_procurado = document.getElementById(barra_de_pesquisa).value

// lower case pega o valor da string e transforma em minusculo
    item_procurado= ignorar_acento(item_procurado)
    item_procurado= item_procurado.toLowerCase();

// Pegando os elementos do site para realizar a busca getElementsByClassName retorna uma array
    let elementos_do_site = document.getElementsByClassName(itens);
    let nomes = document.getElementsByClassName(nome_dos_itens)

    for (i = 0; i < elementos_do_site.length; i++) 
    { 

        //o if está dizendo "se em o elemento do site estiver incluido o item procurado entao faça:"
        if (!ignorar_acento(nomes[i].textContent.toLowerCase()).includes(item_procurado)) 
        //se não for o elemento procurado entao ele não será mais mostrado
        {
            elementos_do_site[i].style.display="none";
        }
        else 
        {
    //se for o elemento procurado entao ele será  mostrado
            elementos_do_site[i].style.display="block";                 
        }
    }
}

// funcao que filtra os elementos
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
            elementos_do_site[i].style.display="block";                 
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

            elementos_do_site[i].style.display="block";                  
    }
}

function verificar(checkbox){
    if(checkbox.checked){
    checkbox.parentElement.style.backgroundColor = '#09CCCC'
    checkbox.parentElement.getElementsByTagName('span')[0].style.opacity = 1 
    }
    else{
        checkbox.parentElement.style.backgroundColor = 'white'
        checkbox.parentElement.getElementsByTagName('span')[0].style.opacity = 0

    }

}

// FUncao que mostrara qual equipe esta usando o item
function quem_usa(elemento_filho)
{
    elemento_pai = elemento_filho.parentElement
    item = elemento_pai.getElementsByClassName('nome_item')[0]
    if(item.textContent.includes('JK'))
    {
        alert('Braço Robôtico: 1\n'+ 'CNC: 5')
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

// Mudar a cor da tag de acordo com os status
tag  = document.getElementsByClassName('status');
for(i=0;i<tag.length;i++)
{
if(tag[i].textContent == 'Ocupado'){
    tag[i].style.backgroundColor = 'red'
    tag[i].setAttribute('onclick','quem_usa(parentElement)')
} 
else if(tag[i].textContent == 'Livre')
{
    tag[i].style.backgroundColor = 'green'
}

else if(tag[i].textContent == 'Solicitado')
{
    tag[i].style.backgroundColor = 'orange'
}

}

// Mostrar quantos itens tem ao todo
resultados = document.getElementsByClassName('resultados')
itens = document.getElementsByClassName('item_da_lista')

total = contar_todos_os_itens()

resultados[0].textContent = ( itens.length + ' resultados')
resultados[1].textContent = (total + ' itens ao todo')

function contar_todos_os_itens(){
    quantidade = document.getElementsByClassName('quantidade')
    lista_vazia = []
    for(i=0, total=0; i<quantidade.length; i++){
        // parseInte converte uma string em um int
      lista_vazia[i] = (parseInt((quantidade[i].textContent).replace(/\D/g, "")) + 0)
      console.log(lista_vazia[i])
      total = total + lista_vazia[i] 
    }
    return total
}