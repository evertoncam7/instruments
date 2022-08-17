

const state_exer_acorde = {
    description:"",
    oldDescition:""
};

function list_exer_acorde(compBraco){

    function c(el, cl, id = null){
        const e = document.createElement(el);
        e.setAttribute("class", cl);
        if(id){
            e.setAttribute("id", id);
        }
        return e;
    }

    const list = c("div", "list-exer-acorde");
    const r = get_exer_acorde_all();

    for (let index = 0; index < r.length; index++) {
        
        const l = c("div", "list-exer-acorde-li");
        l.innerHTML = r[index].name;
        l.addEventListener("click", function(){
            // exer_acorde();

            const p = this.parentNode;

            const pf = p.querySelectorAll(".list-exer-acorde-description");

            if (state_exer_acorde.description) {
                state_exer_acorde.description.classList.remove("list-exer-acorde-description-active");
            }

            if(state_exer_acorde.oldDescition){
                state_exer_acorde.oldDescition.innerHTML = "";
            }

            state_exer_acorde.description = pf[index];

            pf[index].classList.add("list-exer-acorde-description-active");
            pf[index].innerHTML = r[index].description;

            const btnDescription = c("div", "btn-description");
            btnDescription.innerHTML = "Iniciar";
            pf[index].appendChild(btnDescription);

            state_exer_acorde.oldDescition = pf[index];

        });

        list.appendChild(l);

        const lText = c("div", "list-exer-acorde-description");
        
        
        list.appendChild(lText);
        
    }

    return list;

}

function exer_acorde(n, compBraco, compTab)
{

    const r = get_exer_acorde(n);
    console.log("----->");
    



    return "Acorde exer...";

}



console.log(null);