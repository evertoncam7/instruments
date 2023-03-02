



function get(val){

    const result = bd.filter(function(v){
        return v.name == val;
    });
    
    return result;

};

function get_exer_acorde(val){

    const result = bd_exer_acorde.filter(function(v){
        return v.id == val;
    });
    
    return result;

};

function get_exer_acorde_all(){

    const result = bd_exer_acorde.map(function(v, i){
        return v;
    });
    
    return result;

};

function get_musicac_alfabeto_all(){

    const result = bd_muscas_index.map(function(v, i){
        return v;
    });
    
    return result;

};

// Músicas

function get_musicas_search(val){

    const result = bd_musica_bandas.filter(function(v){
        const n = v.name[0];
        return n == val;
    });
    
    return result;

};

// Artista


function get_artista(val){

    const result = bd_artistas.filter(function(v){

        console.log(val, v.name);
    
        return slug_title(v.name) == val;
        
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
        // document.getElementById(bx.id).scrollLeft = parseInt(obj.pos);
        document.getElementById(bx.id).scroll({
            left: parseInt(obj.pos),
            behavior:"smooth"
        });
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

    stateEscala.search[0] = e;

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


function get_escala_intervalo(tom){

    const r = get_escala(tom)[0];
    console.log("-----------------------------------");
    console.log(r);
    const escala = r.escala;
    const intervalo = r.intervalo;

    const bx = document.createElement("div");
    bx.setAttribute("class", "get_escala_intervalo-bx");

        const bxTitle = document.createElement("div");
        bxTitle.setAttribute("class", "get_escala_intervalo-bx-title");
        bxTitle.innerHTML = "Intervalos";
        bx.appendChild(bxTitle);

        const bx1 = document.createElement("div");
        bx1.setAttribute("class", "get_escala_intervalo-bx-inner-1");
        bx.appendChild(bx1);

            if (escala) {
                for (let index = 0; index < escala.length; index++) {
                    
                    const bx1Inner = document.createElement("div");
                    bx1Inner.setAttribute("class", "get_escala_intervalo-bx-inner-1-casa");
                    bx1Inner.innerHTML = escala[index];
                    bx1.appendChild(bx1Inner);
                    
                }
            }

            

        const bx2 = document.createElement("div");
        bx2.setAttribute("class", "get_escala_intervalo-bx-inner-2");
        bx.appendChild(bx2);

            const bx2Inner1 = document.createElement("div");
            bx2Inner1.setAttribute("class", "get_escala_intervalo-bx-inner-2-casa");
            bx2Inner1.style.width = "50%";
            bx2.appendChild(bx2Inner1);

            if (intervalo) {
                for (let index2 = 0; index2 < intervalo.length + 1; index2++) {
                    
                    const bx2Inner = document.createElement("div");
                    bx2Inner.setAttribute("class", "get_escala_intervalo-bx-inner-2-casa");
                    if (index2 < intervalo.length ) {
                        bx2Inner.innerHTML = intervalo[index2];
                    }else{
                        bx2Inner.style.width = "50%";
                    }
                    
                    bx2.appendChild(bx2Inner);
    
                }
            }

            


    console.log(escala, intervalo);
    console.log("Intervalo...");

    return bx;

}


function cleanState(){




}

function slug_title(title){

    const t  = title;
    const t2 = t.normalize('NFD').replace(/[\u0300-\u036f]/g, "");;
    const t3 = t2.toLowerCase();
    const t4 = t3.split(" ");
    const t5 = t4.join("-")

    return t5;

}





// Function time 

const testDataNote = [

]


function recordSongs(){

    const timeline = [];
    let countTimeLine = 0;
    let time = null;

    let activeTecla = false;


    // window.addEventListener("key")


    window.addEventListener("keydown", function (event) {
  
        if (event.key !== undefined) {

            console.log(event.keyCode);

            if (event.keyCode == 68) {


                console.log("Tecla 68");

                clearInterval(time);
                console.log(timeline);

            }

            if(event.keyCode == 80){
                play();
            }

            if (event.keyCode == 83) {

                activeTecla = true;
                console.log("Tecla 83");
                
            }
            
        } else if (event.which !== undefined) {

          // Handle the event with KeyboardEvent.which

        }

    });

    window.addEventListener("keyup", (event) => {

        if (event.key != undefined){

            if (event.keyCode == 83) {
                activeTecla = false;
            }
            
        }

    });


    function createChannel(){

        time = setInterval(() => {

            if (activeTecla) {
                timeline[countTimeLine] = {som:"assets/sons/do2.mp3"};
            }else{
                timeline[countTimeLine] = {};
            }

            countTimeLine++;
            console.log("Start...");

        }, 100);
    
    }

    function play(){

        console.log("Play...");

        let countTime = 0;
        const p = setInterval(() => {

            if (timeline[countTime]) {
                const a = new Audio(timeline[countTime].som);
                a.play();
            }
            
            countTime++;

        }, 100);

    }

    return {
        createChannel
    }

}

const som = recordSongs();
// som.createChannel();










