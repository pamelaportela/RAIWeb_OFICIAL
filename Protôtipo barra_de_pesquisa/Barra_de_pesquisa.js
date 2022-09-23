function buscar_item() 
{
    // pega o que está escrito na barra de pesquisa no momento em que a função é chamada
    let item_procurado = document.getElementById('barra_de_pesquisa').value

// lower case pega o valor da string e transforma em minusculo
    item_procurado=item_procurado.toLowerCase();

// Pegando os elementos do site para realizar a busca getElementsByClassName retorna uma array
    let elementos_do_site = document.getElementsByClassName('item');
      
    for (i = 0; i < elementos_do_site.length; i++) 
    { 
        //o if está dizendo "se em o elemento do site estiver incluido o item procurado entao faça:"
        if (!elementos_do_site[i].innerHTML.toLowerCase().includes(item_procurado)) 
        //se não for o elemento procurado entao ele não será mais mostrado
        {
            elementos_do_site[i].style.display="none";
        }
        else 
        {
    //se for o elemento procurado entao ele será  mostrado
            elementos_do_site[i].style.display="list-item";                 
        }
    }
}