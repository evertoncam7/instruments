

function get(val){

    let result = bd.filter(function(v){
        return v.name == val;
    });

    return result

};

function select(cl){

    const container_select_bx_select_1 = document.createElement("select");
    container_select_bx_select_1.setAttribute("class", cl);
    
    function option(opt){

        opt.forEach(el => {

            const container_select_bx_select_1_opt_1 = document.createElement("option");
            container_select_bx_select_1_opt_1.setAttribute("value", el.value);
            container_select_bx_select_1_opt_1.innerHTML = el.text;
            container_select_bx_select_1.appendChild(container_select_bx_select_1_opt_1);
    
        });

        return container_select_bx_select_1;

    }

    return {
        option
    };

}

function notaTitulo(comp){
    return comp.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".bxTop").querySelector(".bxHeader2").querySelectorAll(".bxHeader2_")[1].innerHTML = state.nota;
}


