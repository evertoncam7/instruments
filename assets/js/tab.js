

function c(el){
    return document.createElement(el);
}

function s(cl){
    return document.querySelector(cl);
}

function sall(cl){
    return document.querySelectorAll(cl);
}

const stateTab = {
    cordas:[]
}


function cpTablatura(destino, config = {}){

    const numCompasso = [];
    
    const t = c('div');
    t.setAttribute('class', 'tablatura');

        const th = c('div');
        th.setAttribute('class', 'tablaturaHeader');

            const bxTitle = c('div');
            bxTitle.setAttribute('class', 'bxTitle');
            
                const tht = c('h3');
                tht.innerHTML = 'More Than words';

                const thst = c('div');
                thst.innerHTML = 'Extreme';

                const thstt = c('div');
                thstt.innerHTML = 'Transcrição Everton Camargo';

            bxTitle.appendChild(tht);
            bxTitle.appendChild(thst);
            bxTitle.appendChild(thstt);

        th.appendChild(bxTitle);

    // t.appendChild(th);

        const tb = c('div');
        tb.setAttribute('class', 'tablaturaBody');

           

        t.appendChild(tb);

    destino.appendChild(t);

    function createCompasso(id){

        // for (let index = 1; index < 19; index++) {
                
                const compasso = c('div');
                compasso.setAttribute('class', 'compasso');
                compasso.setAttribute('id', 'idCompasso-'+id);
                compasso.style.width = "300px";

                tb.appendChild(compasso);
                
                    const gradeCordas = c('div');
                    gradeCordas.setAttribute('class', 'gradeCordas-tab');

                        for (let i2 = 1; i2 <= 6; i2++) {
                            
                            const cordas = c('div');
                            cordas.setAttribute('class', 'cordas');

                            gradeCordas.appendChild(cordas);
                            
                        }

                    compasso.appendChild(gradeCordas);
                    
                    // ===============

                    const gradeNotas = c('div');
                    gradeNotas.setAttribute('class', 'gradeNotasss');

                        for (let i3 = 1; i3 <= 6; i3++) {
                            
                            const boxNotas = c('div');
                            boxNotas.setAttribute('class', 'boxNotas');
                            boxNotas.setAttribute('id', 'gradeNotasss-' + id + '-' + i3);

                            gradeNotas.appendChild(boxNotas);

                        }

                    compasso.appendChild(gradeNotas);


        // }
    }


    function addCompasso(id){

        const maxNum = [];

        createCompasso(id);

        console.log(t);

        function add(corda, cas ,posicao){

            let cd = "";

            const tt = t.querySelector(".tablaturaBody").querySelectorAll(".compasso");

            for (let comp_c = 0; comp_c < tt.length; comp_c++) {
                
                cd = tt[id - 1].querySelector(".gradeNotasss").querySelectorAll(".boxNotas")[corda - 1];
                
                stateTab.cordas.push(cd);
                
            }

            for (let index = 1; index <= posicao; index++) {
                
                const cs = document.createElement('div');
                cs.setAttribute('class', 'casa');

                if (index == posicao) {
                    cs.innerHTML = cas;
                }

                cd.appendChild(cs);
                
            }

            maxNum.push(posicao);

            const numUnique = [...new Set(maxNum)];
            const widthComp = Math.max(...numUnique);

            for (let comp_c2 = 0; comp_c2 < tt.length; comp_c2++) {
                
                const cpss = tt[id - 1];
                cpss.style.width = (widthComp * 25) * 6 + "px"; 
                
            }

            // const compassoEl = document.querySelector("#idCompasso-"+id);
            // compassoEl.style.width = (widthComp * 25) + "px"; 

            function tec(){

            }

            return {
                tec
            }

        }

        return {
            add
        }

    }

    function removeCompasso(id){

    }


    const cordasNotas = [];

    function add(corda, casa, pos){

        const comp = s(".boxNotas")[corda].parentNode.parentNode;

        console.log(comp);
        let widthCompasso = 0;

        numCompasso.push(pos);

        for (let i4 = 1; i4 <= pos; i4++) {

            const ca = c('div');
            ca.setAttribute('class', 'casa');

            if (i4 == pos) {
                ca.innerHTML = casa;
            }

            s(corda).appendChild(ca);
            
        }

        updateCompasso(comp);

    }

    function updateCompasso(compass){

        const nm = [];

        const com = compass.querySelector(".gradeNotasss");
        const comp = com.querySelectorAll(".boxNotas");
       
        for (let index = 0; index < comp.length; index++) {
            
            const m = comp[index].querySelectorAll('.casa');
            console.log(m.length);
            nm.push(m.length);

        }

        let removeDuplicate = [... new Set(nm)];
        const maxCompasso = Math.max(...removeDuplicate);

        compass.style.width = (maxCompasso * 25) + "px";

    }

    function remove(id){
        console.log('Remove');
    }

    function removeAll(){

        if (stateTab.cordas) {
            for (let index = 0; index < stateTab.cordas.length; index++) {
                
                stateTab.cordas[index].innerHTML = "";
                
            }
        }

    }

    return {
        add,
        remove,
        addCompasso,
        removeAll
    }

}

// const container = s('#container-id');

// const tab = cpTablatura(container);

// const adc = tab.addCompasso(1);
// adc.add(6, 3, 1);
// adc.add(1, 3, 2);
// adc.add(2, 3, 2);

// adc.add(1, 'X', 1);
// adc.add(2, 'X', 1);
// adc.add(3, 'X', 3);

// tab.add('#gradeNotas-1-1', 7, 1);
// tab.add('#gradeNotas-1-2', 10, 2);
// tab.add('#gradeNotas-1-2', 10, 1);
// tab.add('#gradeNotas-1-2', 10, 1);


// tab.add('#gradeNotas-2-2', 12, 1);
// tab.add('#gradeNotas-2-2', 14, 1);
// // tab.add('#gradeNotas-2-2', 16, 1);
// tab.add('#gradeNotas-2-2', 12, 1);

// tab.remove();

