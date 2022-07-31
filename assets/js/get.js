

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
    if (document.getElementById(bx.id) && obj) {
        document.getElementById(bx.id).scrollLeft = parseInt(obj.pos);
    }
}

function inverteArray(arr){

    const ay = [];
    for (let index = arr.length - 1; index >= 0 ; index--) {
        ay.push(arr[index]);
    } 
    return ay;
    
}


function filterArrayNotas(arr1){

    const array1 = [];

    for (let index = 0; index < arr1.length; index++) {
        
        for (let index2 = 0; index2 < arr1.length; index2++) {
           
            if (arr1[index].corda == arr1[index2].corda && arr1[index].casa == arr1[index2].casa) {
                
            }else if(arr1[index].corda == arr1[index2].corda && arr1[index].casa < arr1[index2].casa){
                array1.push(arr1[index]);
            }

        }
        
    }

    for (let index3 = 0; index3 < array1.length; index3++) {
        
        delete arr1[array1[index3].index];
        
    }

    let arr11 = arr1.filter(function(e){
        return e;
    });

    return arr11;

}



