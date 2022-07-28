
let state = {
    noteOld:[],
    search:[],
    nota:"",
    data:[],
    buttonNotas:""
};

function fn_acordes(comp, q_cordas, afinacao){

    state.search[0] = '';
    state.search[1] = '';
    state.search[2] = '';
    state.nota = '';

    const container_select = document.createElement("div");
    container_select.setAttribute("class", "container_select");

        const container_select_inner = document.createElement("div");
        container_select_inner.setAttribute("class", "container_select_inner");
        container_select.appendChild(container_select_inner);

        const container_select_bx = document.createElement("div");
        container_select_bx.setAttribute("class", "container_select_bx");



        container_select_inner.appendChild(container_select_bx);

            const text = document.createElement("p");
            text.innerHTML = "Notas";
        container_select_bx.appendChild(text);

        // COMEÇA O SELECT

        function fn1(e){

            state.search[0] = e.target.options[e.target.selectedIndex].text;

            const s = state.search[0] + state.search[1] + state.search[2];
            state.nota = s;

            notaTitulo(comp);

            state.data = [];

            state.data.push(...get(s));

            bx_q_acordes.innerHTML = "";

            for (let indexBxQacordes = 0; indexBxQacordes < state.data.length; indexBxQacordes++) {
            
                const bollQ = document.createElement("div");
                bollQ.setAttribute("class", "bollQ");

                if(indexBxQacordes == 0){
                    bollQ.style.border = "1px solid #fff";
                    state.buttonNotas = bollQ;
                }

                bollQ.innerHTML = (indexBxQacordes+1);
                bollQ.addEventListener("click", function(e){
                    
                    fAcorde(indexBxQacordes);
                    
                    state.buttonNotas.style.border = "none";
                    state.buttonNotas = this;

                    this.style.border = "1px solid #fff";

                });
    
                bx_q_acordes.appendChild(bollQ); 
                
            }

            function fAcorde(i = 0){

                if(state.noteOld.length){

                    for (let cleanState = 0; cleanState < state.noteOld.length; cleanState++) {
                        comp.querySelectorAll(".num_cordas")[state.noteOld[cleanState][0]-1].querySelectorAll(".gradeNotasCasa")[state.noteOld[cleanState][1]-1].innerHTML = "";    
                    }
    
                    state.noteOld = [];
    
                }
    
                scrollNotas(comp ,get(s)[i]);

                const bdt = [];
                if (get(s)[i]) {
                    
                    get(s)[i].notas.forEach(function (v, i){
                        
                        const split = v.split("-");
                        const cor = parseInt(split[0]);
                        const cas = (20 - parseInt(split[1]) + 1);
                        const tex = cas;

                        bdt.push({corda:(cor - 1), casa:cas, text:tex, pos:2});

                    });

                    tabb.add(bdt);
                }
               

                for (let index = 0; index < (get(s)[i] ? get(s)[i].notas.length : 0); index++) {
    
                    const arr = get(s)[i].notas[index].split("-");
                    state.noteOld.push([parseInt(arr[0]), parseInt(arr[1])]);
                    
                    const aa = comp.querySelectorAll(".num_cordas")[(parseInt(arr[0])-1)];
                    aa.querySelectorAll(".gradeNotasCasa")[(parseInt(arr[1])-1)].innerHTML = "<div class='boll_2'></div>";
                    
                }

            }

            fAcorde();
           
            
            

            // console.log(state.data);

        }

        const obj = [
            {id:1, value:"", text:""},
            {id:1, value:"C", text:"C"},
            {id:1, value:"D", text:"D"},
            {id:1, value:"E", text:"E"},
            {id:1, value:"F", text:"F"},
            {id:1, value:"G", text:"G"},
            {id:1, value:"A", text:"A"},
            {id:1, value:"B", text:"B"},
        ];

        const sel1 = select("container_select_bx_select").option(obj);
        sel1.addEventListener("change", function(e){
            fn1(e);
        })

        container_select_bx.appendChild(sel1);

           

            // fim do select 1


            // começo do select 2

            const text2 = document.createElement("p");
            text2.innerHTML = "#/b";
            container_select_bx.appendChild(text2);

            function fn2(e){

                state.search[1] = e.target.options[e.target.selectedIndex].text;

                const s = state.search[0] + state.search[1] + state.search[2];
                state.nota = s;

                notaTitulo(comp);

                console.log(s);
           
                if(state.noteOld.length){

                    for (let cleanState = 0; cleanState < state.noteOld.length; cleanState++) {
                        comp.querySelectorAll(".num_cordas")[state.noteOld[cleanState][0]-1].querySelectorAll(".gradeNotasCasa")[state.noteOld[cleanState][1]-1].innerHTML = "";    
                    }

                    state.noteOld = [];

                }

                scrollNotas(comp ,get(s)[0]);
                
                for (let index = 0; index < (get(s)[0] ? get(s)[0].notas.length : 0); index++) {

                    const arr = get(s)[0].notas[index].split("-");
                    state.noteOld.push([parseInt(arr[0]), parseInt(arr[1])]);
                    
                    const aa = comp.querySelectorAll(".num_cordas")[(parseInt(arr[0])-1)];
                    aa.querySelectorAll(".gradeNotasCasa")[(parseInt(arr[1])-1)].innerHTML = "<div class='boll_2'></div>";
                  
                }

            }

            const obj2 = [
                {id:12, value:"", text:""},
                {id:12, value:"#", text:"#"},
                {id:12, value:"b", text:"b"},
            ];

            const sel2 = select("container_select_bx_select").option(obj2);
            sel2.addEventListener("change", function(e){
                fn2(e);
            })

        container_select_bx.appendChild(sel2);

        // select 3

        function fn3(e){

            state.search[2] = e.target.options[e.target.selectedIndex].text;

            const s = state.search[0] + state.search[1] + state.search[2];
            state.nota = s;

            notaTitulo(comp);

            console.log(s);
        
            if(state.noteOld.length){

                for (let cleanState = 0; cleanState < state.noteOld.length; cleanState++) {
                    comp.querySelectorAll(".num_cordas")[state.noteOld[cleanState][0]-1].querySelectorAll(".gradeNotasCasa")[state.noteOld[cleanState][1]-1].innerHTML = "";    
                }

                state.noteOld = [];

            }

            scrollNotas(comp ,get(s)[0]);
            
            
            for (let index = 0; index < (get(s)[0] ? get(s)[0].notas.length : 0); index++) {

                const arr = get(s)[0].notas[index].split("-");
                state.noteOld.push([parseInt(arr[0]), parseInt(arr[1])]);
                
                const aa = comp.querySelectorAll(".num_cordas")[(parseInt(arr[0])-1)];
                aa.querySelectorAll(".gradeNotasCasa")[(parseInt(arr[1])-1)].innerHTML = "<div class='boll_2'></div>";
                
            }

        }

        const text3 = document.createElement("p");
        text3.innerHTML = "Tipo";
        container_select_bx.appendChild(text3);

        const obj3 = [
            {id:12, value:"", text:""},
            {id:12, value:"", text:"M"},
            {id:12, value:"m", text:"m"},
        ];

        const sel3 = select("container_select_bx_select").option(obj3);
        sel3.addEventListener("change", function(e){
            fn3(e);
        })

    container_select_bx.appendChild(sel3);



    const bx_q_acordes = document.createElement("div");
    bx_q_acordes.setAttribute("class", "bx_q_acordes");
    // bx_q_acordes.innerHTML = "Quantidade de acordes...";

    console.log(state.data);

        

    container_select.appendChild(bx_q_acordes);

    const bx_tablatura = document.createElement("div");
    bx_tablatura.setAttribute("class", "bx_tablatura");
    bx_tablatura.setAttribute("id", "bx_tablatura_id");
    bx_tablatura.innerHTML = "Tablatura";

    const reversefinacao = [];

    for (let rev = afinacao.length - 1; rev >= 0 ; rev--) {
        
        reversefinacao.push(afinacao[rev]);
        
    }

    const config = {
        quant_cordas:q_cordas,
        afinacao:reversefinacao
    }

    console.log(afinacao)

    const tabb = tablatura(config);

 

    bx_tablatura.appendChild(tabb.tb);
     

    container_select.appendChild(bx_tablatura);

 

    
    

    const bx_partitura = document.createElement("div");
    bx_partitura.setAttribute("class", "bx_partitura");
    bx_partitura.innerHTML = "Partitura...";

    // container_select.appendChild(bx_partitura);




          


    return container_select;

}

