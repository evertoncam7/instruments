
let state = {
    noteOld:[],
    search:[],
    nota:""
};

function fn_acordes(comp){

    state.search[0] = '';
    state.search[1] = '';
    state.search[2] = '';
    state.nota = '';

    console.log();

    const container_select = document.createElement("div");
    container_select.setAttribute("class", "container_select");

        const container_select_bx = document.createElement("div");
        container_select_bx.setAttribute("class", "container_select_bx");
    container_select.appendChild(container_select_bx);

            const text = document.createElement("p");
            text.innerHTML = "Notas";
        container_select_bx.appendChild(text);

        // COMEÇA O SELECT

        function fn1(e){

            state.search[0] = e.target.options[e.target.selectedIndex].value;

            const s = state.search[0] + state.search[1] + state.search[2];
            state.nota = s;

            notaTitulo(comp);

            console.log(state.nota);
            console.log("----");
           
            if(state.noteOld.length){

                for (let cleanState = 0; cleanState < state.noteOld.length; cleanState++) {
                    comp.querySelectorAll(".num_cordas")[state.noteOld[cleanState][0]-1].querySelectorAll(".gradeNotasCasa")[state.noteOld[cleanState][1]-1].innerHTML = "";    
                }

                state.noteOld = [];

            }
            
            for (let index = 0; index < (get(s)[0] ? get(s)[0].notas.length : 0); index++) {

                const arr = get(s)[0].notas[index].split("-");
                state.noteOld.push([parseInt(arr[0]), parseInt(arr[1])]);
                
                const aa = comp.querySelectorAll(".num_cordas")[(parseInt(arr[0])-1)];
                aa.querySelectorAll(".gradeNotasCasa")[(parseInt(arr[1])-1)].innerHTML = "<div class='boll_2'></div>";
                
            }

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

                state.search[1] = e.target.options[e.target.selectedIndex].value;

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

            state.search[2] = e.target.options[e.target.selectedIndex].value;

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
            {id:12, value:"M", text:"M"},
            {id:12, value:"m", text:"m"},
        ];

        const sel3 = select("container_select_bx_select").option(obj3);
        sel3.addEventListener("change", function(e){
            fn3(e);
        })

    container_select_bx.appendChild(sel3);

          


    return container_select;

}


/* <div class='bx_acorde'>
            <div class='bx_acorde_c'>
                <p>Notas</p>
                <select>
                    <option value=''></option>
                    <option value='C'>C</option>
                    <option value='D'>D</option>
                    <option value='E'>E</option>
                </select>

                <p>Sus/bemol</p>
                <select>
                    <option value='n'></option>
                    <option value='#'>#</option>
                    <option value='b'>b</option>
                </select>

                <p>Tipo</p>
                <select>
                    <option value=''></option>
                    <option value='maior'>Maior</option>
                    <option value='menor'>Menor</option>
                </select>
            </div>
        </div> */