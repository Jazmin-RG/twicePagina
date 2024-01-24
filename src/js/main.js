let cards = document.querySelector(".cards");
console.log(cards);

for(let i=0; i<=34; i++){
    cards.innerHTML += `
    <div class="card">
        <div class="color">
        </div>
        <button>+</button>
        <p>Primer canción que escuchaste</p>
    </div>
    `;
}; 