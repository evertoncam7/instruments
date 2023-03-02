


function page_afinacao(){


    function c(cl){
        const el = document.createElement("div");
        el.setAttribute("class", cl);
        return el;
    }


    const page = c("page_inicio");

    page.innerHTML = `<h2>Afinação</h2><p>Existem várias maneiras de afinar o violão, aqui mostrarei algumas delas.</p>`;

    

    return page;

}