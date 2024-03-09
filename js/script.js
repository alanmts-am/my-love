import { differenceInMilliseconds, formatDistanceToNow } from 'https://cdn.skypack.dev/date-fns@2.23.0';
import { ptBR } from 'https://cdn.skypack.dev/date-fns@2.23.0/locale';

const nossoDia = new Date('2023-07-04T10:00:00')

document.addEventListener("DOMContentLoaded", function() {
    var mensagemElement = document.getElementById("mensagem");
    var mensagemInicial = `Você é o amor da minha vida! Lembre-se sempre disso.
    Estarei sempre na sua vida e no seu coração. Te amo eternamente, minha vida <3`;
    mensagemElement.innerHTML = mensagemInicial;


    function calcularDiferencaEFormatar(dataInicial) {
        const diferencaFormatada = formatDistanceToNow(
            dataInicial,
            { addSuffix: true, locale: ptBR }
        );

        return diferencaFormatada;
    }

    window.trocarMensagem = function(botao) {
        var novaMensagem = `Eu quero ser pra sempre a sua pessoinha, o seu momote.
        Que possamos pra sempre sermos o melhor para o outro, pra sempre um só.
        Nada nesse mundo pode me fazer mais feliz do que você amor.
        Eu quero o seu bem e vou te proteger a todo custo! <3 <3 :) ;)`;
        
        mensagemElement.innerHTML = novaMensagem;
        mensagemElement.style.animation = "fadeInOut 1s";

        botao.disabled = true;

        setTimeout(function() {
            mensagemElement.style.animation = "none"; 
        }, 1500);

        var tempoJuntos = calcularDiferencaEFormatar(nossoDia);
        botao.innerHTML = "Juntos " + tempoJuntos;
    };
});