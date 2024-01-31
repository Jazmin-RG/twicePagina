let cards = document.querySelector(".cards");
console.log(cards);

let datos=[{
    pregunta:"1",
    color:"arena"
},{
    pregunta:"2",
    color:"arena"
},{
    pregunta:"3",
    color:"arena"
},{
    pregunta:"4",
    color:"azul"
},{
    pregunta:"5",
    color:"azul"
},{
    pregunta:"6",
    color:"azul"
},{
    pregunta:"7",
    color:"rosa-pastel"
},{
    pregunta:"8",
    color:"rosa-pastel"  
},{
    pregunta:"9",
    color:"rosa-pastel" 
},
{
    pregunta:"10",
    color:"arena"
},{
    pregunta:"11",
    color:"arena"
},{
    pregunta:"12",
    color:"arena"
},{
    pregunta:"13",
    color:"azul"
},{
    pregunta:"14",
    color:"azul"
},{
    pregunta:"15",
    color:"azul"
},{
    pregunta:"16",
    color:"rosa-pastel"
},{
    pregunta:"17",
    color:"rosa-pastel"  
},{
    pregunta:"18",
    color:"rosa-pastel" 
},
{
    pregunta:"19",
    color:"arena"
},{
    pregunta:"20",
    color:"arena"
},{
    pregunta:"21",
    color:"arena"
},{
    pregunta:"22",
    color:"azul"
},{
    pregunta:"23",
    color:"azul"
},{
    pregunta:"24",
    color:"azul"
},{
    pregunta:"25",
    color:"rosa-pastel"
},{
    pregunta:"26",
    color:"rosa-pastel"  
},{
    pregunta:"27",
    color:"rosa-pastel" 
},
{
    pregunta:"28",
    color:"arena"
},{
    pregunta:"29",
    color:"arena"
},{
    pregunta:"30",
    color:"arena"
},{
    pregunta:"31",
    color:"azul"
},{
    pregunta:"32",
    color:"azul"
},{
    pregunta:"33",
    color:"azul"
},{
    pregunta:"34",
    color:"rosa-pastel"
},{
    pregunta:"35",
    color:"rosa-pastel"  
}
]


for(let i=0; i<4; i++){
    console.log(datos[i]);
    console.log(datos[i].pregunta);
    console.log(datos[i].color);
}

for(let i=0; i<datos.length; i++){
    cards.innerHTML += `
    <div class="card">
        <div class="espacio ${datos[i].color}">
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#FF5FA2" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
        <p>${datos[i].pregunta}</p>
    </div>
    `;
}; 