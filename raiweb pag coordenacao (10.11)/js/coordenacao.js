const listaEventos = document.querySelector('.lista-eventos');

let eventoParticular = 0

function tipoEvento() {
    const inputRG = document.getElementById("botaoRG")
    const inputRe = document.getElementById("botaoRe")
    const inputCa = document.getElementById("botaoCa")
    const inputOu = document.getElementById("botaoOu")

    if (inputRG.checked == true)        return 1
    else if (inputRe.checked == true)   return 2
    else if (inputCa.checked == true)   return 3
    else if (inputOu.checked == true)   return 4
    else                                return 0
}

function corDoEvento(icone) {
    if (tipoEvento() == 1) {
        icone.classList.add("cor-rg");
    }
    else if (tipoEvento() == 2) {
        icone.classList.add("cor-reuniao");
    }
    else if (tipoEvento() == 3) {
        icone.classList.add("cor-capacitacao");
    }
    else if (tipoEvento() == 4) {
        icone.classList.add("cor-outros");
    }
}

function formatarData(data) {
    let string = data.value

    let dia = string.substring(8, 10)
    let mes = string.substring(5, 7)
    let ano = string.substring(0, 4)

    string = dia+"/"+mes+"/"+ano

    return string;
}

function limparInput(titulo, data) {
    const inputRG = document.getElementById("botaoRG")
    const inputRe = document.getElementById("botaoRe")
    const inputCa = document.getElementById("botaoCa")
    const inputOu = document.getElementById("botaoOu")

    inputRG.checked = false;
    inputRe.checked = false;
    inputCa.checked = false;
    inputOu.checked = false;

    titulo.value = "";
    data.value = "";
}

function inputOK(titulo, data) {
    if (titulo.value == "") {
        alert("Descrição do evento não informada!")
        return false
    }
    if (data.value == "") {
        alert("Data do evento não informada!")
        return false
    }
    if (tipoEvento() == 0) {
        alert("Tipo de evento não informado!")
        return false
    }
    else return true
}

function adicionarEvento() {
    
    const titulo = document.querySelector(".input-titulo");
    const data = document.querySelector(".input-data");

    if (inputOK(titulo, data) == false) return;

    let iEvento = eventoParticular

    // div geral do evento
    const caixaEvento = document.createElement("div");
    caixaEvento.classList.add("evento");
    caixaEvento.setAttribute("id", "evento-"+iEvento)

    // div da data
    const caixaData = document.createElement("div");
    caixaData.classList.add("data-evento");
        // dentro da div da data: icone da cor do evento
        const iconeTipo = document.createElement("i");
        iconeTipo.classList.add("bi");
        iconeTipo.classList.add("bi-circle-fill");
        corDoEvento(iconeTipo)
        // dentro da div da data: data do evento
        const dataEvento = document.createElement("p");
        dataEvento.innerText = formatarData(data);

    caixaData.appendChild(iconeTipo)
    caixaData.appendChild(dataEvento)
    caixaEvento.appendChild(caixaData)

    // titulo do evento
    const tituloEvento = document.createElement("p");
    tituloEvento.innerText = titulo.value;

    caixaEvento.appendChild(tituloEvento);

    // div de icones
    const caixaIcones = document.createElement("div");
    caixaIcones.classList.add("icones-evento");
        // dentro da div de icones: botao de editar evento
        const botaoEditar = document.createElement("button");
        botaoEditar.addEventListener('click', () => editarEvento(iEvento))
        botaoEditar.classList.add("botao-editar");
            // dentro do botao de editar: icone de editar evento
            const iconeEditar = document.createElement("i");
            iconeEditar.classList.add("fa-solid");
            iconeEditar.classList.add("fa-pencil");
        // dentro da div de icones: botao de remover evento
        const botaoRemover = document.createElement("button");
        botaoRemover.addEventListener('click', () => removerEvento(iEvento))
        botaoRemover.classList.add("botao-remover");
            // dentro do botao de remover: icone de deletar evento
            const iconeRemover = document.createElement("i");
            iconeRemover.classList.add("fa-solid");
            iconeRemover.classList.add("fa-trash-can");

    botaoEditar.appendChild(iconeEditar)
    botaoRemover.appendChild(iconeRemover)
    caixaIcones.appendChild(botaoEditar)
    caixaIcones.appendChild(botaoRemover)
    caixaEvento.appendChild(caixaIcones)

    // adicionando o novo evento criado na lista de eventos
    listaEventos.appendChild(caixaEvento)

    limparInput(titulo, data)

    eventoParticular++
}

function removerEvento(iEvento) {
    var eventoParaApagar = document.getElementById(('evento-'+(iEvento)));
    if (eventoParaApagar.parentNode) 
    {
        eventoParaApagar.parentNode.removeChild(eventoParaApagar);
    }
}

function editarEvento(iEvento) {
    alert("editar "+iEvento);
}
