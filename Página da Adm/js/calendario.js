const date = new Date(); // dia atual

// FUNÇÕES DE COMPARAÇÃO COM O BANCO DE DADOS
// por enquanto estão comparando com valores fixos para fins de teste
function diaRG(dia) {
    if(dia===20) { // se tivesse rg marcada para o dia 20, por exemplo
        return true;
    } else {
        return false;
    }
}

function diaReuniao(dia) {
    if(dia===8 || dia===10 || dia===12) {
        return true;
    } else {
        return false;
    }
}

function diaCapacitacao(dia) {
    if(dia===16 || dia===18 || dia===25) {
        return true;
    } else {
        return false;
    }
}

function diaOutros(dia) {
    if(dia===11 || dia===29 || dia===30) {
        return true;
    } else {
        return false;
    }
}

// FUNÇÃO PARA FORMATAR DATA NO MODELO: 05/08 (para mostrar na lista)
function dataFormatada(dia, mes) {
    let string = "";
    if(dia<10) {
        string += "0"+dia;
    } else {
        string += dia;
    }
    if(mes<9) {
        string += "/0"+(mes+1);
    } else {
        string += "/"+(mes+1);
    }
    return string;
}


// LISTA DE EVENTOS
function gerarLista (mesAtual, ultimoDia) {
    const listaEventos = document.querySelector('.dias-eventos')
    // criação da string que será adicionada ao html
    let testLis = "";

    // os dias a serem mostrados são identificados aqui
    for(let i =1; i <= ultimoDia; i++)
    {
        if(diaRG(i)===true) {
            const nomeEvento = "Reunião Geral RAITec"; // seria puxado do bando de dados
            const stringEvento = dataFormatada(i, mesAtual)+" - "+nomeEvento;
            // (dia > dia da rede    OU    mês > mês da rede)    E    (mês >= mês da rede)
            if((i > new Date().getDate() || mesAtual > new Date().getMonth()) && (mesAtual >= new Date().getMonth())) {
                testLis += `<i class="bi bi-circle-fill cor-rg"></i> <b>${stringEvento}</b> <br> <br>`;
            }
            else if(i===new Date().getDate() && mesAtual===new Date().getMonth()) {
                testLis += `<i class="bi bi-circle-fill cor-rg"></i> <b class="dia-atual">${stringEvento}</b> <br> <br>`;
            }
            else {
                testLis += `<i class="bi bi-circle-fill cor-rg"></i> <b class="dias-passados">${stringEvento}</b> <br> <br>`;
            }

        }
        else if(diaReuniao(i)===true) {
            const nomeEvento = "Reunião Setorial Inovação"; // seria puxado do bando de dados
            const stringEvento = dataFormatada(i, mesAtual)+" - "+nomeEvento;
            if((i > new Date().getDate() || mesAtual > new Date().getMonth()) && (mesAtual >= new Date().getMonth())) {
                testLis += `<i class="bi bi-circle-fill cor-reuniao"></i> <b>${stringEvento}</b> <br> <br>`;
            }
            else if(i===new Date().getDate()) {
                testLis += `<i class="bi bi-circle-fill cor-reuniao"></i> <b class="dia-atual">${stringEvento}</b> <br> <br>`;
            }
            else {
                testLis += `<i class="bi bi-circle-fill cor-reuniao"></i> <b class="dias-passados">${stringEvento}</b> <br> <br>`;
            }
        }
        else if(diaCapacitacao(i)===true) {
            const nomeEvento = "Capacitação de alguma coisa"; // seria puxado do bando de dados
            const stringEvento = dataFormatada(i, mesAtual)+" - "+nomeEvento;
            if((i > new Date().getDate() || mesAtual > new Date().getMonth()) && (mesAtual >= new Date().getMonth())) {
                testLis += `<i class="bi bi-circle-fill cor-capacitacao"></i> <b>${stringEvento}</b> <br> <br>`;
            }
            else if(i===new Date().getDate() && mesAtual===new Date().getMonth()) {
                testLis += `<i class="bi bi-circle-fill cor-capacitacao"></i> <b class="dia-atual">${stringEvento}</b> <br> <br>`;
            }
            else {
                testLis += `<i class="bi bi-circle-fill cor-capacitacao"></i> <b class="dias-passados">${stringEvento}</b> <br> <br>`;
            }
        }
        else if(diaOutros(i)===true) {
            const nomeEvento = "Alguma coisa (em outros)"; // seria puxado do bando de dados
            const stringEvento = dataFormatada(i, mesAtual)+" - "+nomeEvento;
            if((i > new Date().getDate() || mesAtual > new Date().getMonth()) && (mesAtual >= new Date().getMonth())) {
                testLis += `<i class="bi bi-circle-fill cor-outros"></i> <b>${stringEvento}</b> <br> <br>`;
            }
            else if(i===new Date().getDate() && mesAtual===new Date().getMonth()) {
                testLis += `<i class="bi bi-circle-fill cor-outros"></i> <b class="dia-atual">${stringEvento}</b> <br> <br>`;
            }
            else {
                testLis += `<i class="bi bi-circle-fill cor-outros"></i> <b class="dias-passados">${stringEvento}</b> <br> <br>`;
            }
        }
    }

    // inscrição da string no html
    listaEventos.innerHTML = testLis;
}


// CALENDARIO
const gerarCalendario = () => {
    date.setDate(1); // setando o dia como o primeiro do mês

    // quantidade de dias do mês atual
    const monthDays = document.querySelector('.dias')
    // último dia do mês atual
    const lastDay =  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    // último dia do mês anterior
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    // posição do primeiro dia do mês (dia da semana do primeiro dia do mês)
    const firstDayIndex = date.getDay();
    // posição do último dia do mês (dia da semana do último dia do mês)
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    // quantidade de dias do mês seguinte que vão aparecer
    const nextDays = 7 - lastDayIndex - 1;

    // vetor com os nomes dos meses
    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];

    // vetor com os nomes dos dias da semana
    const diaSemana = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];

    // string com a data atual a ser exposta; no modelo: "Terça-feira, 23 de Agosto de 2022"
    const stringDataAtual = diaSemana[new Date().getDay()]+", "+new Date().getDate()+" de "+meses[new Date().getMonth()]+" de "+new Date().getFullYear();

    document.querySelector('.data h1').innerHTML = meses[date.getMonth()]; // mostrar o mês selecionado
    document.querySelector('.data p').innerHTML = stringDataAtual; // mostrar a string da data atual

    // criação da string de dias que será adicionada ao html
    let days = "";

    // dias do mês anterior
    for(let x = firstDayIndex; x > 0; x--)
    {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
    }

    // dias do mês atual
    for(let i = 1; i <= lastDay; i++)
    {
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            if(diaRG(i)===true) {
                days += `<div class="hoje evento-rg">${i}</div>`;
            }
            else if(diaReuniao(i)===true) {
                days += `<div class="hoje evento-reuniao">${i}</div>`;
            }
            else if(diaCapacitacao(i)===true) {
                days += `<div class="hoje evento-capacitacao">${i}</div>`;
            }
            else if(diaOutros(i)===true) {
                days += `<div class="hoje evento-outros">${i}</div>`;
            }
            else {
                days += `<div class="hoje">${i}</div>`; // dia atual
            }
        }
        // A SEQUÊNCIA DE IFs A SEGUIR SÃO RELATIVOS AOS DIAS DE EVENTOS
        else if(diaRG(i)===true) {
            days += `<div class="evento-rg">${i}</div>`;
        }
        else if(diaReuniao(i)===true) {
            days += `<div class="evento-reuniao">${i}</div>`;
        }
        else if(diaCapacitacao(i)===true) {
            days += `<div class="evento-capacitacao">${i}</div>`;
        }
        else if(diaOutros(i)===true) {
            days += `<div class="evento-outros">${i}</div>`;
        }
        // FIM DOS EVENTOS
        else {
            days += `<div>${i}</div>`; // demais dias do mês
        }
    }

    // dias do mês seguinte
    for(let j = 1;j <= nextDays; j++)
    {
        days += `<div class="next-date">${j}</div>`;
    }

    // incrição da string de dias no html
    monthDays.innerHTML = days;

    gerarLista(date.getMonth(), lastDay);
}


// botão para escolher o mês anterior
document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    gerarCalendario();
})

// botão para escolher o mês seguinte
document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    gerarCalendario();
})

gerarCalendario();