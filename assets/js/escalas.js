

const state_escalas = {

}

function page_escalas(comp, q_cordas, afinacao, q_casas){

    function c(elem, cl){
        const el = document.createElement(elem);
        el.setAttribute("class", cl);
        return el;
    }

    const pe = c("div", "pe");

    const peBxContainer = c("div", "peBxContainer");
    pe.appendChild(peBxContainer);

    const peBxContainerInner_1 = c("div", "peBxContainerInner_1");
    peBxContainer.appendChild(peBxContainerInner_1);

    const peBxContainerInner_2 = c("div", "peBxContainerInner_2");
    peBxContainer.appendChild(peBxContainerInner_2);


    // COMEÇO DOS SELECTS


    function fn_select(comp, e){

        const t = e.target.options[e.target.selectedIndex].value;

        peBxContainerInner_2.innerHTML = "";
        peBxContainerInner_2.appendChild(get_escala_intervalo(t));

        const obj = update_braco(comp, t);
        // console.log(obj.notas);

        // if (!obj) {
        //     return;
        // }

        const bde = [];
        obj.notas.forEach((el, i) => {
            
            const r = el.split("-");
            const r1 = r[0];
            const r2 = (20 - parseInt(r[1]) + 1);

            const tex = obj.tom;

            bde.push({corda:(r1 - 1), casa:r2, text:tex, pos:2, index:i});
            
        });
        

        if (obj) {
            tabb.add(bde);
        }

        // 

    }

    const peBxText = c("div", "peBxText");
    peBxText.innerHTML = "Tom";
    peBxContainerInner_1.appendChild(peBxText);

    const optEscalaTom = [
        {id:1, value:"", text:""},
        {id:1, value:"C", text:"C"},
        {id:1, value:"D", text:"D"},
        {id:1, value:"E", text:"E"},
        {id:1, value:"F", text:"F"},
    ];

    const s1 = select("select_escala").option(optEscalaTom);
    s1.addEventListener("change", function(e){

        // console.log(e);
        fn_select(comp, e);

    });

    peBxContainerInner_1.appendChild(s1);

    const peBxText2 = c("div", "peBxText");
    peBxText2.innerHTML = "#/b";
    peBxContainerInner_1.appendChild(peBxText2);

    const optEscalaTom2 = [
        {id:1, value:"", text:""},
        {id:1, value:"", text:"#"},
        {id:1, value:"", text:"b"},
    ];
    peBxContainerInner_1.appendChild(select("select_escala").option(optEscalaTom2));

    const peBxText3 = c("div", "peBxText");
    peBxText3.innerHTML = "Tipo";
    peBxContainerInner_1.appendChild(peBxText3);

    const optEscalaTom3 = [
        {id:1, value:"", text:""},
        {id:1, value:"", text:"Maior (Aberta)"},
        {id:1, value:"", text:"Maior (Fechada)"},
        {id:1, value:"", text:"Menor Harmônica"},
    ];
    peBxContainerInner_1.appendChild(select("select_escala").option(optEscalaTom3));

    const peBxText4 = c("div", "peBxTextTab");
    peBxText4.innerHTML = "Tablatura";
    peBxContainer.appendChild(peBxText4);

    const bx_tab = c("div", "bx_tab");

    const config = {
        quant_cordas:q_cordas,
        afinacao:inverteArray(afinacao),
        type:"escala",
        quant_casas:q_casas
    }
    const tabb = tablatura(config);

    bx_tab.appendChild(tabb.tb);

    peBxContainer.appendChild(bx_tab);


    return pe;

}