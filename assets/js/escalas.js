

const state_escalas = {

}

function page_escalas(comp, q_cordas, afinacao){

    function c(elem, cl){
        const el = document.createElement(elem);
        el.setAttribute("class", cl);
        return el;
    }

    const pe = c("div", "pe");

    const peBxContainer = c("div", "peBxContainer");
    pe.appendChild(peBxContainer);


    // COMEÇO DOS SELECTS


    function fn_select(comp, e){

        // const t = e.target.options[e.target.selectedIndex].value;

        update_braco(comp, e);
        // console.log(get_escala(t));

    }

    const peBxText = c("div", "peBxText");
    peBxText.innerHTML = "Tom";
    peBxContainer.appendChild(peBxText);

    const optEscalaTom = [
        {id:1, value:"", text:""},
        {id:1, value:"C", text:"C"},
        {id:1, value:"D", text:"D"},
        {id:1, value:"E", text:"E"},
    ];

    const s1 = select("select_escala").option(optEscalaTom);
    s1.addEventListener("click", function(e){

        // console.log(e);
        fn_select(comp, e);

    });

    peBxContainer.appendChild(s1);

    const peBxText2 = c("div", "peBxText");
    peBxText2.innerHTML = "#/b";
    peBxContainer.appendChild(peBxText2);

    const optEscalaTom2 = [
        {id:1, value:"", text:""},
        {id:1, value:"", text:"#"},
        {id:1, value:"", text:"b"},
    ];
    peBxContainer.appendChild(select("select_escala").option(optEscalaTom2));

    const peBxText3 = c("div", "peBxText");
    peBxText3.innerHTML = "Tipo";
    peBxContainer.appendChild(peBxText3);

    const optEscalaTom3 = [
        {id:1, value:"", text:""},
        {id:1, value:"", text:"Maior"},
        {id:1, value:"", text:"Menor Harmônica"},
    ];
    peBxContainer.appendChild(select("select_escala").option(optEscalaTom3));

    const peBxText4 = c("div", "peBxText");
    peBxText4.innerHTML = "Tablatura";
    peBxContainer.appendChild(peBxText4);

    const bx_tab = c("div", "bx_tab");

    const config = {
        quant_cordas:q_cordas,
        afinacao:inverteArray(afinacao)
    }

    const tabb = tablatura(config);

    bx_tab.appendChild(tabb.tb);

    peBxContainer.appendChild(bx_tab);


    return pe;

}