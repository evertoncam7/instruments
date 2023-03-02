


function page_teoria_b(){


    function c(cl){
        const el = document.createElement("div");
        el.setAttribute("class", cl);
        return el;
    }


    const page = c("page_inicio");

    page.innerHTML = `A teoria básica da música é um conjunto de conceitos e princípios que ajudam a entender e criar música. Esses conceitos incluem:

    <ol>
    
        <li><em>Notação musical:</em> a notação musical é um sistema de escrita que permite representar graficamente a altura, a duração e outros aspectos do som.</li>
        <li><em>Melodia:</em> é a combinação de notas que formam uma linha melódica. A melodia é a parte da música que é cantada ou tocada com um instrumento solo.</li>
        <li><em>Harmonia:</em> é a combinação de acordes que dão suporte à melodia. A harmonia é a parte da música que é tocada pelos instrumentos de acompanhamento.</li>
        <li><em>Ritmo:</em> é o padrão de duração e acentuação das notas na música. O ritmo é o elemento que determina o movimento da música.</li>
        <li><em>Forma:</em> é a organização dos elementos da música em uma estrutura coerente. A forma pode ser definida por seções, como verso e refrão, ou por uma estrutura mais complexa, como a sonata.</li>
        <li><em>Dinâmica:</em> é a variação de intensidade na música, que pode ser suave ou forte, gradual ou abrupta.</li>
        <li><em>Timbre:</em> é a qualidade única do som de cada instrumento ou voz, que permite diferenciar um som de outro.</li>
        
    </ol>
        
    Esses elementos são a base da teoria da música e são fundamentais para a criação e interpretação musical. O estudo desses elementos permite compreender melhor como a música é construída e como ela afeta as emoções e sensações do ouvinte.`;

    return page;

}