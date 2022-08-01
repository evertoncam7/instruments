

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

function notaTitulo(comp, nota){
    return comp.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".bxTop").querySelector(".bxHeader2").querySelectorAll(".bxHeader2_")[1].innerHTML = nota;
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


function filterArrayAcordes(arr1){

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


function get_escala(escala){

    const resp = bd_escalas.filter(function(e){
        return e.tom == escala;
    });

    return resp;

}


const stateEscala = {
    search:[],
    noteOld:[],
    nota:""
}
function update_braco(comp, e){

    stateEscala.search[0] = e.target.options[e.target.selectedIndex].text;

    const s = stateEscala.search[0];

   
    stateEscala.nota = s;

    if(state.noteOld.length){

        for (let cleanState = 0; cleanState < state.noteOld.length; cleanState++) {
            comp.querySelectorAll(".num_cordas")[state.noteOld[cleanState][0]-1].querySelectorAll(".gradeNotasCasa")[state.noteOld[cleanState][1]-1].innerHTML = "";    
        }

        state.noteOld = [];

    }


    if(stateEscala.noteOld.length){

        for (let cleanState = 0; cleanState < stateEscala.noteOld.length; cleanState++) {
            comp.querySelectorAll(".num_cordas")[stateEscala.noteOld[cleanState][0]-1].querySelectorAll(".gradeNotasCasa")[stateEscala.noteOld[cleanState][1]-1].innerHTML = "";    
        }

        stateEscala.noteOld = [];

    }

    notaTitulo(comp, s);

    for (let index = 0; index < (get_escala(s)[0] ? get_escala(s)[0].notas.length : 0); index++) {

        const arr = get_escala(s)[0].notas[index].split("-");
        stateEscala.noteOld.push([parseInt(arr[0]), parseInt(arr[1])]);
        
        const aa = comp.querySelectorAll(".num_cordas")[(parseInt(arr[0])-1)];
        aa.querySelectorAll(".gradeNotasCasa")[(parseInt(arr[1])-1)].innerHTML = "<div class='boll_2'></div>";
        
    }


    return get_escala(s)[0];

}



