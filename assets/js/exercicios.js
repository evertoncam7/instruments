
const exer_state = {
    btn_exer:""
}

function page_exercicios(comp_v){

    function c(el, cl, id = null){
        const e = document.createElement(el);
        e.setAttribute("class", cl);
        if(id){
            e.setAttribute("id", id);
        }
        return e;
    }

    const elem = c("div", "exer-container");

    const elemHeader = c("div", "exer-container-header");

    const pages = component_pages();

        const elemCard = c("div", "exer-container-card");
        elemCard.innerHTML = "ACORDES";
        elemCard.addEventListener("click", function(e){

            if (exer_state.btn_exer) {
                exer_state.btn_exer.classList.remove("active_btn_exer");
            }

            this.classList.add("active_btn_exer");
            exer_state.btn_exer = this;

            // console.log(get_exer_acorde_all());
            // console.log("Teste acorde...");

            elemBody.appendChild(pages.create(list_exer_acorde(comp_v)));

        });

        elemHeader.appendChild(elemCard);  
        
        const elemCard1 = c("div", "exer-container-card");
        elemCard1.innerHTML = "ESCALAS";
        elemCard1.addEventListener("click", function(e){

            if (exer_state.btn_exer) {
                exer_state.btn_exer.classList.remove("active_btn_exer");
            }

            this.classList.add("active_btn_exer");
            exer_state.btn_exer = this;

            elemBody.appendChild(pages.create("Escalas..."));

        });

        elemHeader.appendChild(elemCard1);  

        const elemCard2 = c("div", "exer-container-card");
        elemCard2.innerHTML = "RITIMOS";
        elemCard2.addEventListener("click", function(e){

            if (exer_state.btn_exer) {
                exer_state.btn_exer.classList.remove("active_btn_exer");
            }

            this.classList.add("active_btn_exer");
            exer_state.btn_exer = this;

            elemBody.appendChild(pages.create("Ritimos..."));

        });

        elemHeader.appendChild(elemCard2);  

        const elemBody = c("div", "exer-container-body");

    elem.appendChild(elemHeader);
    elem.appendChild(elemBody);

    return elem;

}