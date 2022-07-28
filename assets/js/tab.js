




function tablatura(config){

    function c(elem, cl){
        const el = document.createElement(elem);
        el.setAttribute("class", cl);
        return el;
    }

    const tb = c("div", "tb-box");

    const tb_container = c("div", "tb-cantainer");
    
        const tb_container_grade_cordas = c("div", "tb-container-grade-cordas");
        tb_container.appendChild(tb_container_grade_cordas);

            for (let index = 0; index < config.quant_cordas; index++) {
                
                const tb_container_grade_cordas_cordas = c("div", "tb-container-grade-cordas-cordas");
                
                    const tb_container_grade_cordas_cordas_c = c("div", "tb-container-grade-cordas-cordas-c");
                    tb_container_grade_cordas_cordas.appendChild(tb_container_grade_cordas_cordas_c);
                    
                tb_container_grade_cordas.appendChild(tb_container_grade_cordas_cordas);

            }

            
        console.log(config);

        const tb_container_grade_notas = c("div", "tb-container-grade-notas");
        tb_container.appendChild(tb_container_grade_notas);


        tb.appendChild(tb_container);


    console.log(tb);


    return tb;


}