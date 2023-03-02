


function page_tablatura(){


    function c(cl){
        const el = document.createElement("div");
        el.setAttribute("class", cl);
        return el;
    }

    const page = c("page_inicio");
    page.innerHTML = `Uma tablatura é uma forma popular de notação musical para guitarras, baixos e outros instrumentos de corda. Para ler uma tablatura, siga estes passos:

    <ol>
    
        <li><em>Entenda a notação básica:</em> a tablatura é uma representação visual do braço do instrumento. Cada linha representa uma corda, e cada número na linha indica qual traste deve ser pressionado. A linha superior é a corda mais fina e a linha inferior é a corda mais grossa.</li>

        <li><em>Entenda a notação de acordes:</em>  em vez de simplesmente tocar notas individuais, as tablaturas também podem ser usadas para mostrar acordes. Em vez de apenas um número, um acorde pode ter vários números dispostos verticalmente em uma coluna. Cada número indica qual traste deve ser pressionado em uma corda diferente.</li>

        <li><em>Preste atenção às marcações:</em>  algumas tablaturas incluem marcas adicionais para ajudá-lo a tocar a música com precisão. Por exemplo, uma "h" sobre um número indica que você deve fazer um hammer-on, enquanto uma "p" indica que você deve fazer um pull-off.</li>

        <li><em>Pratique:</em>  assim como com qualquer outra habilidade musical, a prática é essencial. Comece com tablaturas simples e vá progredindo para músicas mais complexas à medida que você se torna mais confortável com a notação.</li>
        
    </ol>
        
    Lembre-se de que as tablaturas são apenas uma forma de notação musical e podem ser diferentes de partituras ou outras formas de notação. No entanto, se você aprender a ler tablaturas, isso pode ser uma habilidade valiosa para tocar música em seu instrumento de cordas favorito.`;

    return page;

}

















