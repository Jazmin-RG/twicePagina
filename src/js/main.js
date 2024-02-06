// Para traer el div con la clase cards
let cards = document.querySelector(".cards");
console.log(cards);

const URL ='https://dj9hh58x-5000.usw3.devtunnels.ms'
const QUESTION = '/api/v0/question/'

fetch(URL + QUESTION)
  .then(response => response.json())
  .then(data =>{
    console.log(data)
    console.log(data.questions)
    const questions=data.questions

    //Ciclo for para insertar el HTML de una card 
    for(let i=0; i<questions.length; i++){
        cards.innerHTML += `
        <div class="card">
            <div class="espacio ${questions[i].color}">
            </div>
            <img class="icon" id=${questions[i].id} src="./src/img/button.png" alt="">
            <p>${questions[i].question}</p>
        </div>
        `;
    }; 
  });



const btnAddInfo=document.querySelectorAll('.icon');
console.log(btnAddInfo);
 
btnAddInfo.forEach((btnInfo) =>{
    btnInfo.addEventListener("click",(e)=>{
        console.log("Te amo mucho osito, dame " + e.target.id + " besito");
    });
});