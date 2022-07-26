

function get(val){

    let result = bd.filter(function(v){
        return v.name == val;
    });
    
    return result;

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
    console.log();
    return comp.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".bxTop").querySelector(".bxHeader2").querySelectorAll(".bxHeader2_")[1].innerHTML = state.nota;
}

function widthBraco(numCasa, init){

    let s = (((init.width * 10)/100)*31)/100; 

    for (let index = 0; index < numCasa; index++) {
        
        s += s*0.2;
        
    }

    return s;
}

function testeNode(c){
    return c.parentNode;
}

function activeButtom(btn){

    const b = document.querySelectorAll(".btn_bx_left");

    for (let index = 0; index < b.length; index++) {
        
        b[index].classList.remove("activeButtom");
        
    }

    btn.classList.add("activeButtom");

}

function scrollNotas(comp, obj){

   
    const bx = comp.parentNode.parentNode.parentNode.parentNode.parentNode;
    console.log(parseInt(obj.pos));
    document.getElementById(bx.id).scrollLeft = parseInt(obj.pos);
    


}


