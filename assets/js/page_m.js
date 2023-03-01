


function fn_musicas(){

    function c(el, cl, id = null){
        
        const e = document.createElement(el);
        e.setAttribute("class", cl);
        if(id){
            e.setAttribute("id", id);
        }

        return e;

    }

    const musica = c("div", "page_musica");

    const sec_alf = c("div", "alf");

    for (let index = 0; index < get_musicac_alfabeto_all().length; index++) {
       
        const li_musica_index = c("div", "li-index-musica");
        li_musica_index.innerHTML = get_musicac_alfabeto_all()[index].al;

        li_musica_index.addEventListener("click", function(e){

            list_bandas.innerHTML = "";

            const re = get_musicas_search(e.target.innerHTML);

            for (let index = 0; index < re.length; index++) {
                
                const list_bandas_li = c("div", "list-bandas-li");
                list_bandas_li.innerHTML = re[index].name;
                list_bandas_li.addEventListener("click", function(){

                    const slug = slug_title(re[index].name);
                    document.location.href = "p.html?"+slug;

                });
                
                list_bandas.appendChild(list_bandas_li);
                
            }

            console.log(re);

        });

        sec_alf.appendChild(li_musica_index);
        
    }

    const list_bandas = c("div", "list-bandas");

    musica.appendChild(sec_alf);
    musica.appendChild(list_bandas);

    console.log();

    return musica;
   
}