

function component_pages(){

    var pages = [];

    const bx_pages = document.createElement("div");
    bx_pages.setAttribute("class", "bx_pages");

    function create(conteudo){

        bx_pages.innerHTML = "";

        const bx_pages_pages = document.createElement("div");
        bx_pages_pages.setAttribute("class", "bx_pages_pages");
        
        if(typeof conteudo == "object"){
            bx_pages_pages.appendChild(conteudo);
        }else{
            bx_pages_pages.innerHTML = conteudo;
        }
        
        bx_pages.appendChild(bx_pages_pages);

        if(pages.length){
            pages.shift();
        }

        pages.push(bx_pages);
        return bx_pages;
        
    }

    return {
        create
    };

}