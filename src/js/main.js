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


/*for(let i=0; i<4; i++){
    console.log(datos[i]);
    console.log(datos[i].pregunta);
    console.log(datos[i].color);
}*/

for(let i=0; i<datos.length; i++){
    cards.innerHTML += `
    <div class="card">
        <div class="espacio ${datos[i].color}">
        </div>
        <img class="icon" id=${datos[i].pregunta} src="./src/img/button.png" alt="">
        <p>${datos[i].pregunta}</p>
    </div>
    `;
}; 

const btnAddInfo=document.querySelectorAll('.icon');
console.log(btnAddInfo);
 
btnAddInfo.forEach((btnInfo) =>{
    btnInfo.addEventListener("click",(e)=>{
        console.log("Te amo mucho osito, dame " + e.target.id + " besito");
    });
});