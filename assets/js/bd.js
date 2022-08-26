
const bd = [
    {
        id:0, 
        name:"C",
        som:"",
        group:"C",
        notas:['5-20-C', '3-19-E', '2-18-C'],
        casa:1,
        cordasNull:[],
        dedilhado:[],
        description:"",
        pos:701
    },
    {
        id:1, 
        name:"D",
        som:"",
        group:"D",
        notas:['4-19-A', '6-19-F#', '5-18-D'],
        casa:2,
        cordasNull:[],
        dedilhado:[],
        description:"",
        pos:750
    },
    {
        id:2, 
        name:"D",
        som:"",
        group:"D",
        notas:['6-16-A', '5-16-E', '4-16-C', '3-16-G', '2-16-D', '1-16-A', '3-14-A', '4-14-D', '5-14-F#'],
        casa:1,
        cordasNull:[],
        dedilhado:[],
        description:"",
        pos:355
    },
    {
        id:2, 
        name:"D",
        som:"",
        group:"D",
        notas:['1-11-D', '2-12-F#', '6-11-D', '1-14-B', '2-14-E', '3-14-A', '4-14-D', '5-14-F#', '6-14-B'],
        casa:1,
        cordasNull:[],
        dedilhado:[],
        description:"",
        pos:241
    },
    {
        id:3, 
        name:"E",
        som:"",
        group:"E",
        notas:['2-19-B', '3-19-E', '4-20-G#'],
        casa:1,
        cordasNull:[],
        dedilhado:[],
        description:"",
        pos:0
    },
    {
        id:4, 
        name:"F",
        som:"",
        group:"F",
        notas:['6-20-F', '5-20-C', '4-20-G#', '3-20-D#', '2-20-A#', '1-20-F', '2-18-C', '3-18-F', '4-19-A'],
        casa:1,
        cordasNull:[],
        dedilhado:[],
        description:"",
        pos:0
    },
    {
        id:5, 
        name:"C#",
        som:"",
        group:"C#",
        notas:['6-17-G#', '5-15-F', '4-15-C#', '3-15-G#'],
        casa:1,
        cordasNull:[],
        dedilhado:[],
        description:"",
        pos:528
    },
    {
        id:5, 
        name:"C#m",
        som:"",
        group:"C#m",
        notas:['6-17-G#', '5-16-E', '4-15-C#', '3-15-G#'],
        casa:1,
        cordasNull:[],
        dedilhado:[],
        description:"",
        pos:0

    },
    {
        id:5, 
        name:"Dm",
        som:"",
        group:"Dm",
        notas:['6-20-F', '4-19-A', '5-18-D'],
        casa:1,
        cordasNull:[],
        dedilhado:[],
        description:"",
        pos:0
    },
    {
        id:5, 
        name:"D#",
        som:"",
        group:"D#",
        notas:['6-17-G#', '4-17-B', '5-16-E', '3-19-E'],
        casa:1,
        cordasNull:[],
        dedilhado:[],
        description:"",
        pos:0
    },
    {
        id:5, 
        name:"D#m",
        som:"",
        group:"D#m",
        notas:['4-17-B', '5-16-E', '6-18-G', '3-19-E'],
        casa:1,
        cordasNull:[],
        dedilhado:[],
        description:"",
        pos:0
    },
    {
        id:5, 
        name:"Cm",
        som:"",
        group:"Cm",
        notas:['1-18-G', '2-18-C', '3-18-F', '4-18-A#', '5-18-D', '6-18-G', '5-17-D#', '4-16-C', '3-16-G'],
        casa:1,
        cordasNull:[],
        dedilhado:[],
        description:"",
        pos:0
    },
    {
        id:5, 
        name:"G",
        som:"",
        group:"G",
        notas:['2-19-B', '1-18-G', '6-18-G'],
        casa:1,
        cordasNull:[],
        dedilhado:[],
        description:"",
        pos:705
    }
];

const bd_escalas = [
    {
        id:1,
        tom:"F#",
        notas:['1-19-F#', '1-17-G#', '2-20-A#', '2-19-B', '2-17-C#', '3-20-D#', '3-18-F', '3-17-F#', '4-20-G#', '4-18-A#', '4-17-B', '5-19-C#', '5-17-D#', '6-20-F', '6-19-F#', '6-17-G#'],
        sequencia:[],
        pos:0,
        escala:[],
        intervalo:[]
    },
    {
        id:1,
        tom:"F",
        notas:[
            "1-20-F",
            "1-18-G",
            "1-16-A",
            "2-20-A#",
            "2-18-C",
            "2-16-D",
            "3-19-E",
            "3-18-F",
            "3-16-G",
            "4-19-A",
            "4-18-A#",
            "4-16-C",
            "5-18-D",
            "5-16-E",
            "5-15-F",
            "6-18-G",
            "6-16-A",
            "6-15-A#"
        ],
        sequencia:[],
        pos:499,
        escala:["F", "G", "A", "Bb", "C", "D", "E", "F"],
        intervalo:["1", "1", "1/2", "1", "1", "1", "1/2"]
    },
    {
        id:1,
        tom:"C",
        notas:[],
        sequencia:[],
        pos:0
    },
];


const bd_exer_acorde = [
    {id:"exer-acorde-01", name:"Exercício 01 - 30 bpm", bpm:"", n:[], description:"Este exercício consiste em dedo por dedo da mão esquerda(Destro) ir precionando as notas montando um acorde e depois do acorde formado varrer todas as cordas com a mão direita treinando a coordenação motora em baixa velocidade. (Faça junto com o app)"},
    {id:"exer-acorde-02", name:"Exercício 02 - 75 bpm", bpm:"", n:[], description:"Este exercício diferente do primeiro consiste em precionar as notas com os dedos da mão esquerda(Destro) para montar um acorde de forma simultânea e depois varrer com os dedos da mão direita as cordas para sair o som. (Fazer com o app)"},
    {id:"exer-acorde-03", name:"Exercício 03 - 100 bpm", bpm:"", n:[], description:"Desc 03"},
];











// PAGE MÚSICAS

const bd_muscas_index = [

    {id:"m-00", al:"A"},
    {id:"m-00", al:"B"},
    {id:"m-00", al:"C"},
    {id:"m-00", al:"D"},
    {id:"m-00", al:"E"},
    {id:"m-00", al:"F"},
    {id:"m-00", al:"G"},
    {id:"m-00", al:"H"},
    {id:"m-00", al:"I"},
    {id:"m-00", al:"J"},
    {id:"m-00", al:"K"},
    {id:"m-00", al:"L"},
    {id:"m-00", al:"M"},
    {id:"m-00", al:"N"},
    {id:"m-00", al:"H"},
    {id:"m-00", al:"O"},
    {id:"m-00", al:"P"},
    {id:"m-00", al:"Q"},
    {id:"m-00", al:"R"},
    {id:"m-00", al:"S"},
    {id:"m-00", al:"T"},
    {id:"m-00", al:"U"},
    {id:"m-00", al:"V"},
    {id:"m-00", al:"W"},
    {id:"m-00", al:"H"},
    {id:"m-00", al:"X"},
    {id:"m-00", al:"Y"},
    {id:"m-00", al:"Z"},
    
];

const bd_musica_bandas = [
    {id:"m-01", name:"AC/DC"},
    {id:"m-01", name:"Angra"},
    {id:"m-01", name:"Barão vermelho"},
    {id:"m-01", name:"Biquini Cavadão"},
    {id:"m-01", name:"J Quest"},
    {id:"m-01", name:"Capital Inicial"},
    {id:"m-01", name:"Jorge e Mateus"},
    {id:"m-01", name:"Gustavo Lima"},
    {id:"m-01", name:"Hugo e Guilherme"},
    {id:"m-01", name:"Henrique e Juliano"},
    {id:"m-01", name:"Zé Neto e Cristiano"},
    {id:"m-01", name:"Cristiano Araújo"},
    {id:"m-01", name:"Marília Mendonça"},
    {id:"m-01", name:"Zezé di Camargo e Luciano"},
    {id:"m-01", name:"Roupa Nova"},
];

const bd_artistas = [
    { name: "Henrique e Juliano", avatar:"assets/images/h-j.jpg", musicas:[
        { name: "Liberdade provisória", letra: "Letra", cifra: "Cifra" },
        { name: "Arranhão", letra: "Letra", cifra: "Cifra" },
        { name: "Na hora da raiva", letra: "Letra", cifra: "Cifra" },
    ]},
    { name: "Zé Neto e Cristiano", avatar:"assets/images/z-n-c.jpg", musicas:[
        { name: "Notificação preferida", letra: "Letra", cifra: "Cifra" },
        { name: "Você beberia ou não beberia", letra: "Letra", cifra: "Cifra" },
    ]},
    { name: "Zezé di Camargo e Luciano", avatar:"assets/images/z-l.jpg", musicas:[
        { name: "Dou a vida por um beijo", letra: "Letra", cifra: "Cifra" },
        { name: "Dois corações e uma história", letra: "Letra", cifra: "Cifra" },
        { name: "Imperfeito", letra: "Letra", cifra: "Cifra" },
        { name: "Amada terra", letra: "Letra", cifra: "Cifra" },
    ]},
    { name: "Hugo e Guilherme", avatar:"assets/images/h-g.jpg", musicas:[
        { name: "Coração na cama", letra: "Letra", cifra: "Cifra" },
        { name: "Mal feito", letra: "Letra", cifra: "Cifra" },
        { name: "Meu número", letra: "Letra", cifra: "Cifra" },
    ]},
];

const bd_musicas = [
    {id:"00222", name:"Dou a vida por um beijo", artist:"Zezé di Camargo e Luciano", letra:[
        {linha: "Difícil demais te amar assim"},
        {linha: "Minha tímidez tem que ter um fim"},
        {linha: "Preciso perder o medo de falar"},
        {linha: "Pra não te perder vou me declarar"},
    ]}
];






























// _DiaraMills_

// https://www.wecamgirls24.com/videos/137020/cayenne-badkitty28-suck-fuck-josslescaf-2017-06-10-a0e2ec7f24734487/