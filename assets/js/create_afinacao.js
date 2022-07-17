
function defined_afinacao(opt_inst){

    const n = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    const newAficacao = [];

    if(opt_inst.casas){

        for(let i = 0; i < opt_inst.afinacao.length; i++){

            let cs = [];
            let pos = 0;

            if(n.includes(opt_inst.afinacao[i])){
                pos = n.indexOf(opt_inst.afinacao[i]);
            }

            let count = 0;
            for(let ii = 0; ii <= opt_inst.casas; ii++){
                
                if (pos >= n.length) {
                    pos = 0;
                }

                cs.push(n[pos]);

                pos++;
                
            }

            newAficacao.push(cs.reverse());
            cs = [];
            
        }

        return newAficacao;
        
    }else{
        console.log("Desculpe, mas a propriedade 'casa' não existe.");
    }

}

