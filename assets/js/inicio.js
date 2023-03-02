


function inicio(){


    function c(cl){
        const el = document.createElement("div");
        el.setAttribute("class", cl);
        return el;
    }


    const page = c("page_inicio");

    page.innerHTML = `<h2>História do violão</h2>
    <p>O violão é um instrumento musical de cordas que existe há milhares de anos. Sua origem é incerta, mas muitos acreditam que ele tenha se originado na Espanha durante o século XV.</p>

    <p>No entanto, o instrumento foi modificado e aprimorado ao longo do tempo. Durante o século XIX, o violão passou por diversas mudanças, incluindo a adição de uma sexta corda e o uso de madeiras mais resistentes e duráveis.</p>
    
    <p>A popularidade do violão aumentou ao longo do século XX, com o surgimento de grandes músicos como Andrés Segovia, que ajudaram a elevar a reputação do instrumento. A partir daí, o violão se tornou um instrumento amplamente utilizado em diversos gêneros musicais, desde o flamenco e a música clássica até o blues, o jazz e o rock.</p>
    
    <p>Hoje em dia, o violão é um dos instrumentos musicais mais populares do mundo, com milhões de pessoas tocando e aprendendo a tocar em todo o mundo. É um instrumento versátil e acessível, que pode ser usado para criar uma variedade de sons e estilos musicais.</p>
    `;

    

    return page;

}