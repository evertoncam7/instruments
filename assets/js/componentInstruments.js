

const optionInst = {
    size:{
        width:1000,
        height:""
    },
    qcordas:0,
    qcasas:0,
    afinacao:[],
    cordaT:false,
    mark:[],
    styleComponent:{

    }
}



function componentInstrument(opt){

    let ca = 0;

    const state = {
        oldState:{

        },
        newState:{
            valWidthBraco:[]
        }
    }

    

    const init = {
        width:1100,
        height:110,
        casas:20,
        cordas:6,
        madeira:"",
        mark:[31, 51, 72, 91, 122, 141, 161],
        numC:1,
        corBraco:"#44362F",
        corMark:"#D7E1DF"
    }

    if (opt) {
        if (opt.instrument) {
            switch(opt.instrument){
                
                case "Violão":
                    init.width = 1100;
                    break;

                case "Violão12":
                    init.width = 1100;
                    init.cordas = 6;
                    init.numC = 2;
                    init.casas = 20;
                    init.mark = [31, 51, 72, 91, 122, 141, 161];
                    init.corBraco = "#44362F";
                    init.corMark = "#D7E1DF";
                    break;

                case "Ukulele":
                    init.width = 1100;
                    init.casas = 12;
                    init.cordas = 4;
                    init.mark = [51, 71, 101, 121];
                    init.corBraco = "#44362F";
                    init.corMark = "#D7E1DF";
                    break;

                case "Viola":
                    init.width = 1100;
                    init.casas = 19;
                    init.cordas = 5;
                    init.numC = 2;
                    init.mark = [];
                    init.corBraco = "#44362F";
                    init.corMark = "#D7E1DF";
                    break;

                case "Baixo":
                    init.width = 1100;
                    init.casas = 20;
                    init.cordas = 4;
                    init.numC = 1;
                    init.mark = [31, 51, 71, 91, 122, 141, 161];
                    init.corBraco = "#E79A29";
                    init.corMark = "#44362F";
                    break;

                case "Guitarra":
                    init.width = 1100;
                    init.casas = 20;
                    init.cordas = 6;
                    init.numC = 1;
                    init.mark = [31, 51, 71, 91, 122, 141, 161];
                    init.corBraco = "#DBB87C";
                    init.corMark = "#44362F";
                    break;

                default:
                    console.log("Não existe instrumentos.");
            }

        }
        
    }

    // Equivale as primeiras casas 

    let casa1 = (((init.width * 10)/100)*31)/100;
    let casa2 = (((init.width * 10)/100)*31)/100;

    function c(el){
        return document.createElement(el);
    }

    function qs(cl){
        return document.querySelector(cl);
    }

    function qsa(cl){
        return document.querySelectorAll(cl);
    }

    const bx = c("div");
    bx.setAttribute("class", "bx");
    
        const bxHeader = c("div");
        bxHeader.setAttribute("class", "bxHeader");

        let countCasas = init.casas;
        for (let indexCount = init.casas; indexCount >= 1; indexCount--) {

            const gradeCount = c("div");
            gradeCount.setAttribute("class", "gradeCount");
            gradeCount.style.width = casa2+"px";
            gradeCount.innerHTML = countCasas--;
            bxHeader.appendChild(gradeCount);

            state.newState.valWidthBraco.push(casa2);
            casa2 = casa2 * 1.05;
        }

        console.log(state.newState);

        bx.appendChild(bxHeader);

    const bxB = c("div");
    bxB.setAttribute("class", "bxB");
    bxB.style.width = ca+"px";

        const bxBbrac = c("div");
        
        bxBbrac.style.height = init.height+"px";

        bxBbrac.setAttribute("class", "bxBbrac");
        bxBbrac.style.background = init.corBraco;
        bxB.appendChild(bxBbrac);

            const gradeMark = c("div");
            gradeMark.setAttribute("class", "gradeMark");
            bxBbrac.appendChild(gradeMark);

            // Aqui depende da configuração da quantidade de casas.

            for (let index = init.casas; index >= 1; index--) {

                const bxCasa = c("div");
                bxCasa.setAttribute("class", "bxCasa");
                bxCasa.style.width = casa1+"px";

                // Header e Braço
                bxHeader.style.width = ca+"px";
                bxBbrac.style.width = ca+"px";

                if (init.casas <= 12) {
                    // bx.style.width = ca+"px";
                }

                casa1 = casa1 * 1.05;
                ca += casa1;
                
                    const trasteMark = c("div");
                    trasteMark.setAttribute("class", "trasteMark");
                    bxCasa.appendChild(trasteMark);

                    const casaMark = c("div");
                    casaMark.setAttribute("class", "casaMark");

                    if (init.mark) {
                        
                        for(let markItem of init.mark){
                            const item = String(markItem);

                            if (item.length == 2) {
                                if (item[0] == index) {
                                    for (let indice = 0; indice < parseInt(item[1]); indice++) {
                                        
                                        const boll = c("div");
                                        boll.setAttribute("class", "boll");
                                        boll.style.background = init.corMark;
                                        const rb1 = ((init.width*1)/100)/2;
                                        boll.style.width = (init.width*1)/100+"px";
                                        boll.style.height = (init.width*1)/100+"px";
                                        boll.style.borderRadius = rb1+"px";
                                        casaMark.appendChild(boll);
        
                                    }
                                }
                            }else if(item.length == 3){
                                const s = item[0]+""+item[1];
                               
                                if (parseInt(s) == index) {
                                    for (let indice = 0; indice < item[2]; indice++) {
                                        
                                        const boll = c("div");
                                        boll.setAttribute("class", "boll");
                                        boll.style.background = init.corMark;
                                        const rb2 = ((init.width*1)/100)/2;
                                        boll.style.width = (init.width*1)/100+"px";
                                        boll.style.height = (init.width*1)/100+"px";
                                        boll.style.borderRadius = rb2+"px";
                                        casaMark.appendChild(boll);
        
                                    }
                                }
                            }
            
                        }
                    }

                    bxCasa.appendChild(casaMark);

                gradeMark.appendChild(bxCasa);  
            }

            const gradeCordas = c("div");
            gradeCordas.setAttribute("class", "gradeCordas");

            let espessura = 2;
            for (let index = 0; index < init.cordas; index++) {
                
                const bxCorda = c("div");
                bxCorda.setAttribute("class", "bxCorda");
                
                for (let indexCorda = 0; indexCorda < init.numC; indexCorda++) {
                    
                    const corda = c("div");
                    corda.setAttribute("class", "corda");
                    corda.style.height = espessura+"px";
                    console.log(espessura);
                    

                    bxCorda.appendChild(corda);
                    
                }

                gradeCordas.appendChild(bxCorda);
                espessura -= 0.25;
                
            }


            bxBbrac.appendChild(gradeCordas);

            
            
    bx.appendChild(bxB);

    function data(data){

    }

    function create(){
        return bx;
    }

    return {
        data,
        create
    }

}




const container = document.getElementById("id-container");


const opt = {
    instrument:"Violão"
}
const ct = componentInstrument(opt);

const opt2 = {
    instrument:"Violão12"
}
const ct2 = componentInstrument(opt2);

const opt3 = {
    instrument:"Viola"
}
const ct3 = componentInstrument(opt3);

const opt4 = {
    instrument:"Ukulele"
}
const ct4 = componentInstrument(opt4);

const opt5 = {
    instrument:"Baixo"
}
const ct5 = componentInstrument(opt5);

const opt6 = {
    instrument:"Guitarra"
}
const ct6 = componentInstrument(opt6);

container.appendChild(ct.create());
container.appendChild(ct2.create());
container.appendChild(ct3.create());
container.appendChild(ct4.create());
container.appendChild(ct5.create());
container.appendChild(ct6.create());

console.log(ct.create());
console.log(ct2.create());