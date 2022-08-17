

const tb_state = {
    oldNotas:[],
    oldEscalas:[]
};


function tablatura(config){

    function c(elem, cl){
        const el = document.createElement(elem);
        el.setAttribute("class", cl);
        return el;
    }

 
    const tb = c("div", "tb-box");

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
                    
                tb_container_grade_notas.appendChild(tb_container_grade_notas_notas);

            }

            function add(casasActive){

                


                if(config.type == "escala"){

                    

                    if(tb_state.oldEscalas.length){
                        for (let indexEsc = 0; indexEsc < tb_state.oldEscalas.length; indexEsc++) {
                            
                            tb_state.oldEscalas[indexEsc].innerHTML = "";
                        
                        }
                    }
                    

                    const  gradeNotasContainer = c("div", "grade-notas-container");
                    tb_container.appendChild(gradeNotasContainer);

                    for (let index = 0; index < config.quant_cordas; index++) {
                     
                        const cc = c("div", "corda-grade-container");
                        gradeNotasContainer.appendChild(cc);

                        for (let indexBxCasa = 0; indexBxCasa < casasActive.length; indexBxCasa++) {
                            
                            const ccc = c("div", "corda-grade-container-bx");
                            cc.appendChild(ccc);
                            
                        }
                        
                    }
                    

                    for (let indexPosCasa = 0; indexPosCasa < casasActive.length; indexPosCasa++) {

                        const r_corda = (5 - casasActive[indexPosCasa].corda); 
                        const r_casa = casasActive[indexPosCasa].casa;

                        const r_text =  r_casa;

                        const r_cordas = gradeNotasContainer.querySelectorAll(".corda-grade-container");
                        const r_casas = r_cordas[r_corda].querySelectorAll(".corda-grade-container-bx")[indexPosCasa].innerHTML = r_text;
                        // console.log();
                        tb_state.oldEscalas.push(r_cordas[r_corda].querySelectorAll(".corda-grade-container-bx")[indexPosCasa]);
                    }

                }

                if (config.type == "acorde") {

                    if (tb_state.oldNotas.length) {
                        for (let indexOld = 0; indexOld < tb_state.oldNotas.length; indexOld++) {
                            
                            tb_state.oldNotas[indexOld].innerHTML = "";
                            
                        }
                    }


                    if (casasActive.length) {

                        let countC = 0;
                        for (let indexActive = 0; indexActive < casasActive.length; indexActive++) {            

                            const cord = tb_container_grade_notas.querySelectorAll(".tb-container-grade-notas-notas")[5 - casasActive[indexActive].corda];
                            // const cord = tb_container_grade_notas.querySelectorAll(".tb-container-grade-notas-notas")[casasActive[indexActive].corda];
                            tb_state.oldNotas.push(cord);

                            
                                const casa = c("div", "tb-container-grade-notas-notas-casa");
                                casa.innerHTML = casasActive[indexActive].text;
                                cord.appendChild(casa);
                            

                            countC++;

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