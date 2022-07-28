

const tb_state = {
    oldNotas:[]
};


function tablatura(config){

    function c(elem, cl){
        const el = document.createElement(elem);
        el.setAttribute("class", cl);
        return el;
    }

    const tb = c("div", "tb-box");

   

    // tb.appendChild(tb_title);

 

    const tb_name = c("div", "tb-name");

        for (let indexAf = 0; indexAf < config.afinacao.length; indexAf++) {
            
            const nn = c("div", "nn");
            nn.innerHTML = config.afinacao[indexAf];

            tb_name.appendChild(nn);
            
        }



    tb.appendChild(tb_name);

    const tb_container = c("div", "tb-cantainer");
    
        const tb_container_grade_cordas = c("div", "tb-container-grade-cordas");
        tb_container.appendChild(tb_container_grade_cordas);

            for (let index = 0; index < config.quant_cordas; index++) {
                
                const tb_container_grade_cordas_cordas = c("div", "tb-container-grade-cordas-cordas");
                
                    const tb_container_grade_cordas_cordas_c = c("div", "tb-container-grade-cordas-cordas-c");
                    tb_container_grade_cordas_cordas.appendChild(tb_container_grade_cordas_cordas_c);

                tb_container_grade_cordas.appendChild(tb_container_grade_cordas_cordas);

            }

            
        // console.log(config);

        const tb_container_grade_notas = c("div", "tb-container-grade-notas");
        tb_container.appendChild(tb_container_grade_notas);

        let countCor = config.quant_cordas;
            for (let id_cordas = 0; id_cordas < config.quant_cordas; id_cordas++) {
                    
                const tb_container_grade_notas_notas = c("div", "tb-container-grade-notas-notas");
                tb_container_grade_notas_notas.setAttribute("id", "cor-"+id_cordas);
                tb_container_grade_notas_notas.setAttribute("data-corda", countCor);
                countCor--;
                    
                
                    // const tb_container_grade_notas_notas_n = c("div", "tb-container-grade-notas-notas-n");
                    // tb_container_grade_notas_notas.appendChild(tb_container_grade_notas_notas_n);

                    
                    
                    tb_container_grade_notas.appendChild(tb_container_grade_notas_notas);

            }

            function add(casasActive){

                if (tb_state.oldNotas.length) {
                    for (let indexOld = 0; indexOld < tb_state.oldNotas.length; indexOld++) {
                        
                        tb_state.oldNotas[indexOld].innerHTML = "";
                        
                    }
                }

                if (casasActive.length) {
                    // console.log("Active...");

                    for (let indexActive = 0; indexActive < casasActive.length; indexActive++) {

                        const cord = tb_container_grade_notas.querySelectorAll(".tb-container-grade-notas-notas")[5 - casasActive[indexActive].corda];
                        // const cord = tb_container_grade_notas.querySelectorAll(".tb-container-grade-notas-notas")[casasActive[indexActive].corda];
                        tb_state.oldNotas.push(cord);

                        console.log( 6 - casasActive[indexActive].corda);

                        for (let indexCordaCasa = 0; indexCordaCasa < casasActive[indexActive].casa; indexCordaCasa++) {
                            
                            const casa = c("div", "tb-container-grade-notas-notas-casa");
    
                            if (indexCordaCasa == casasActive[indexActive].casa - 1) {
                                casa.innerHTML = casasActive[indexActive].text;
                                cord.appendChild(casa);
                            }
    
                            console.log("---->"); 
    
                        }
                        
    
                    }
                    
                    
                }
                
            }

            


        tb.appendChild(tb_container);


    // console.log(tb);


    return {
        tb,
        add
    };


}