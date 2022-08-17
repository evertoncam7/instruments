

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

let idbx = 1;

function componentInstrument(opt){

    let widthtotal = 0;

    let ca = 0;
    let widthCasa = 0;

    const state = {
        oldState:{

        },
        newState:{
            valWidthBraco:[]
        }
    }

    const init = {
        name: "",
        width:1100,
        height:110,
        casas:20,
        cordas:6,
        madeira:"",
        mark:[31, 51, 72, 91, 122, 141, 161],
        numC:1,
        corBraco:"#44362F",
        corMark:"#D7E1DF",
        afinacao:["E", "A", "D", "G", "B", "E"]
    }

    if (opt) {
        if (opt.instrument) {

            switch(opt.instrument){
                
                case "Violão":

                    init.name = "Violão";
                    init.width = 1100;
                    init.corBraco = "linear-gradient(#44362f, #59453b, #44362f)";
                    break;

                case "Violão12":
                    init.name = "Violão de 12 cordas";
                    init.width = 1100;
                    init.cordas = 6;
                    init.numC = 2;
                    init.casas = 20;
                    init.mark = [31, 51, 72, 91, 122, 141, 161];
                    init.corBraco = "#44362F";
                    init.corMark = "#D7E1DF";
                    break;

                case "Ukulele":
                    init.name = "Ukulele";
                    init.width = 1100;
                    init.casas = 12;
                    init.cordas = 4;
                    init.mark = [51, 71, 101, 121];
                    init.corBraco = "#44362F";
                    init.corMark = "#D7E1DF";
                    break;

                case "Viola":
                    init.name = "Viola Caipira";
                    init.width = 1100;
                    init.casas = 19;
                    init.cordas = 5;
                    init.numC = 2;
                    init.mark = [];
                    init.corBraco = "#44362F";
                    init.corMark = "#D7E1DF";
                    init.afinacao = ["B", "E", "G#", "B", "E"];
                    break;

                case "Baixo":
                    init.name = "Contrabaixo";
                    init.width = 1100;
                    init.casas = 20;
                    init.cordas = 4;
                    init.numC = 1;
                    init.mark = [31, 51, 71, 91, 122, 141, 161];
                    init.corBraco = "#E79A29";
                    init.corMark = "#44362F";
                    break;

                case "Guitarra":
                    init.name = "Guitarra elétrica";
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

    const w = (init.width - 50);

    let casa1 = (((w * 10)/100)*31)/120;
    let casa2 = (((w * 10)/100)*31)/120;
    widthCasa = (((w * 10)/100)*31)/120;
    let somaCasa = 0;

    function c(el){
        return document.createElement(el);
    }

    function qs(cl){
        return document.querySelector(cl);
    }

    function qsa(cl){
        return document.querySelectorAll(cl);
    }

    const containerBx = c("section");
    containerBx.setAttribute("class", "containerBx");

    const bxTop = c("section");
    bxTop.setAttribute("class", "bxTop");

        const bxHeader1 = c("div");
        bxHeader1.setAttribute("class", "bxHeader1");

            const bxHeader1Container = c("div");
            bxHeader1Container.setAttribute("class", "bxHeader1Container");

            bxHeader1.appendChild(bxHeader1Container);

        const bxHeader2 = c("div");
        bxHeader2.setAttribute("class", "bxHeader2");

            const bxHeader21 = c("div");
            bxHeader21.setAttribute("class", "bxHeader2_");
            bxHeader21.innerHTML = init.name;

            const bxHeader22 = c("div");
            bxHeader22.setAttribute("class", "bxHeader2_");
            

            const bxHeader23 = c("div");
            bxHeader23.setAttribute("class", "bxHeader2_");

            bxHeader2.appendChild(bxHeader21);
            bxHeader2.appendChild(bxHeader22);
            bxHeader2.appendChild(bxHeader23);

        bxTop.appendChild(bxHeader1);
        bxTop.appendChild(bxHeader2);

    containerBx.appendChild(bxTop);


    const bx = c("div");
    bx.setAttribute("class", "bx");
    bx.setAttribute("id", "bx-"+idbx)

    const bx_inner = c("div");
    bx_inner.setAttribute("class","bx_inner");

    const container_bx = c("div");
    container_bx.setAttribute("class","container_bx");

  
    bx.addEventListener("scroll", function(e){

        console.log(e.target.scrollLeft);

    });
   
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

    

    const bx_inner_right = c("div");
    bx_inner_right.setAttribute("class","bx_inner_right");

        const bx_inner_right_space = c("div");
        bx_inner_right_space.setAttribute("class","bx_inner_right_space");
    bx_inner_right.appendChild(bx_inner_right_space);

        const bx_inner_right_center = c("div");
        bx_inner_right_center.setAttribute("class","bx_inner_right_center");
    bx_inner_right.appendChild(bx_inner_right_center);

            for (let indexNameCasa = 0; indexNameCasa < init.cordas; indexNameCasa++) {
                
                const bx_inner_right_center_name = c("div");
                bx_inner_right_center_name.setAttribute("class", "bx_inner_right_center_name");
                bx_inner_right_center_name.innerHTML = init.afinacao[indexNameCasa];

                bx_inner_right_center.appendChild(bx_inner_right_center_name);
                
            }


    const bx_inner_right_space2 = c("div");
        bx_inner_right_space2.setAttribute("class","bx_inner_right_space");
    bx_inner_right.appendChild(bx_inner_right_space2);

    

    bx_inner.appendChild(container_bx);
    bx_inner.appendChild(bx_inner_right);

    bx.appendChild(bx_inner);


    container_bx.appendChild(bxHeader);

    testeNode(bxHeader);

    const bxB = c("div");
    bxB.setAttribute("class", "bxB");
    
   

        // Começo das grades  

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
                    
                    bxCorda.appendChild(corda);
                    
                }

                gradeCordas.appendChild(bxCorda);
                espessura -= 0.25;
                
            }

        bxBbrac.appendChild(gradeCordas);

            const gradeNotas = c("div");
            gradeNotas.setAttribute("class", "gradeNotas");

            const dadosCasa = defined_afinacao(init);

            

            for(let gc = 0; gc < init.cordas; gc++){

                const num_cordas = c("div");
                num_cordas.setAttribute("class", "num_cordas");
                num_cordas.setAttribute("data-corda", init.afinacao[gc]);

                    for (let gn = 0; gn < init.casas; gn++) {

                      
                        const gradeNotasCasa = c("div");
                        gradeNotasCasa.setAttribute("class", "gradeNotasCasa");
                        gradeNotasCasa.setAttribute("data-casa", (gc+1) + "-" + (gn+1) + "-" + dadosCasa[gc][gn]);
                        gradeNotasCasa.setAttribute("id", (gc+1) + "-" + (gn+1) + "-" + dadosCasa[gc][gn]);
                        gradeNotasCasa.style.width = (widthCasa = widthCasa * 1.05) + "px";

                        num_cordas.appendChild(gradeNotasCasa);
                        
                    }

                gradeNotas.appendChild(num_cordas);

            }


        bxBbrac.appendChild(gradeNotas);

            
    container_bx.appendChild(bxB);
   


    // CONTROLES ====================================================================

    const bxControl = c("section");
    bxControl.setAttribute("class", "bxControl");

        const bx_left = c("article");
        bx_left.setAttribute("class", "bx_left");

            // Botões
            const comp = component_pages();

            const bxButton = c("nav");
            bxButton.setAttribute("class", "bxButton");

                const btn_bx_left = c("div");
                btn_bx_left.setAttribute("class", "btn_bx_left");
                btn_bx_left.innerHTML = "ACORDES";
                btn_bx_left.addEventListener("click", function(){
                    bx_controll2Center.appendChild(comp.create(fn_acordes(gradeNotas, init.cordas, init.afinacao, init.casas)));
                    activeButtom(btn_bx_left);
                });

                bxButton.appendChild(btn_bx_left);

                const btn_bx_left2 = c("div");
                btn_bx_left2.setAttribute("class", "btn_bx_left");
                btn_bx_left2.innerHTML = "ESCALAS";
                btn_bx_left2.addEventListener("click", function(){
                    bx_controll2Center.appendChild(comp.create(page_escalas(gradeNotas, init.cordas, init.afinacao, init.casas)));
                    activeButtom(btn_bx_left2);
                });

                bxButton.appendChild(btn_bx_left2);

                const btn_bx_left3 = c("div");
                btn_bx_left3.setAttribute("class", "btn_bx_left");
                btn_bx_left3.innerHTML = "ARPEJOS";
                btn_bx_left3.addEventListener("click", function(){
                    
                    bx_controll2Center.appendChild(comp.create("TESTE ARPEJOS"));
                    activeButtom(btn_bx_left3);

                });

                bxButton.appendChild(btn_bx_left3);

                const btn_bx_left4 = c("div");
                btn_bx_left4.setAttribute("class", "btn_bx_left");
                btn_bx_left4.innerHTML = "EXERCÍCIOS";
                btn_bx_left4.addEventListener("click", function(){

                    bx_controll2Center.appendChild(comp.create(page_exercicios(gradeNotas)));
                    activeButtom(btn_bx_left4);

                });

                bxButton.appendChild(btn_bx_left4);

                const btn_bx_left5 = c("div");
                btn_bx_left5.setAttribute("class", "btn_bx_left");
                btn_bx_left5.innerHTML = "MÚSICAS";
                btn_bx_left5.addEventListener("click", function(){

                    bx_controll2Center.appendChild(comp.create(fn_musicas()));
                    activeButtom(btn_bx_left5);

                });

                bxButton.appendChild(btn_bx_left5);

                bx_left.appendChild(bxButton);

        bxControl.appendChild(bx_left);


        // AQUI VAI OS ELEMENTOS DO CENTRO

        const bx_controll2 = c("article");
        bx_controll2.setAttribute("class", "bx_controll2");

            const bx_controll2Center = c("article");
            bx_controll2Center.setAttribute("class", "bx_controll2Center");

        bx_controll2.appendChild(bx_controll2Center);
    bxControl.appendChild(bx_controll2);

        // ==================================


        const bx_right = c("article");
        bx_right.setAttribute("class", "bx_left desktop");

            // Botões

            const bxButtonRight = c("nav");
            bxButtonRight.setAttribute("class", "bxButton");

                const btn_bx_right = c("div");
                btn_bx_right.setAttribute("class", "btn_bx_left");
                btn_bx_right.innerHTML = "AFINAÇÃO";
                btn_bx_right.addEventListener("click", function(){
                    bx_controll2Center.appendChild(comp.create("TESTE AFINAÇÃO"));
                    activeButtom(btn_bx_right);
                });

                bxButtonRight.appendChild(btn_bx_right);

                const btn_bx_right2 = c("div");
                btn_bx_right2.setAttribute("class", "btn_bx_left");
                btn_bx_right2.innerHTML = "MÚSICAS";
                btn_bx_right2.addEventListener("click", function(){

                    // Aqui está sendo criado uma página e exibindo a na tela.
                    bx_controll2Center.appendChild(comp.create("TESTE MÚSICAS"));
                    activeButtom(btn_bx_right2);
                });

                bxButtonRight.appendChild(btn_bx_right2);

                const btn_bx_right3 = c("div");
                btn_bx_right3.setAttribute("class", "btn_bx_left");
                btn_bx_right3.innerHTML = "ACESSÓRIOS";
                btn_bx_right3.addEventListener("click", function(){
                    bx_controll2Center.appendChild(comp.create("TESTE ACESSÓRIOS"));
                    activeButtom(btn_bx_right3);
                });

                bxButtonRight.appendChild(btn_bx_right3);

                const btn_bx_right4 = c("div");
                btn_bx_right4.setAttribute("class", "btn_bx_left");
                btn_bx_right4.innerHTML = "TÉCNICAS";
                btn_bx_right4.addEventListener("click", function(){
                    bx_controll2Center.appendChild(comp.create("TESTE TÉCNICAS"));
                    activeButtom(btn_bx_right4);
                });

                bxButtonRight.appendChild(btn_bx_right4);

                bx_right.appendChild(bxButtonRight);            

        bxControl.appendChild(bx_right);

    containerBx.appendChild(bx);

    containerBx.appendChild(bxControl);
 
    idbx++;
    
    
    // FIM CONTROLES =================================================================


    function data(data){

    }

    function create(){
        return containerBx;
    }

    return {
        data,
        create
    }

}




const container = document.getElementById("id-container");


const opt = {
    instrument:"Violão",
    afinacao:[]
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



let num = [];
for (let countN = 0; countN <= 99; countN++) {
    
    num.push(countN);
    
}

// Min 210
// Max 1790


const mediaTable = [];

function generateNum(qt, soma){

    // const media = soma / qt;
    let countNum = 0;
    let conutX = qt;
    let s = 0;
    let som = 0;

    for (let index = 0; index < qt; index++) {
        

        
        
    }

}



generateNum(20, 1000);




// ==================================================================================================







