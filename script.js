// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");

let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let url = "https://cdn.glitch.global/";

let cards = [
    "c442a443-8cf3-48e5-919f-af99508d8d61/card%201.jpg?v=1710263531277",
    "df437a0e-51d0-4b07-86f5-ee0f385bcd49/card%202%20replacement.jpg?v=1710368816375",
    "df437a0e-51d0-4b07-86f5-ee0f385bcd49/card%203%20replacement.jpg?v=1710368821984",
    "df437a0e-51d0-4b07-86f5-ee0f385bcd49/card4%20.jpg?v=1710369182400",
    "c442a443-8cf3-48e5-919f-af99508d8d61/card%205.jpg?v=1710263590714",
    "c442a443-8cf3-48e5-919f-af99508d8d61/card%206%20replace.jpg?v=1710263611898",
    "c442a443-8cf3-48e5-919f-af99508d8d61/card%207%20copy.jpg?v=1710263632940",
    "c442a443-8cf3-48e5-919f-af99508d8d61/card%208.jpg?v=1710263655004"
];

// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    
    // play a sound
    let audio = document.querySelector(".audio");
    audio.play();
    
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
    }
};

// Button to Double Deck
buttonDouble.onclick = function() {
    for (let card of cards) {
        // 
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend", "<div style='background-image: url(" + url + card + ")'class='card'>");
        }
    }
};
console.log("now the deck has" + cards.length + "cards. ");
buttonDouble.style.color = "";

// Button to Shuffle Cards
buttonShuffle.onclick = function() {
    shuffle(cards);
    game.innerHTML = "";
let i = 0 ;
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url + card + ")' class='card' id='" + i+"'>");
        i = i+1;
    }
};

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
// Button to Flip All Cards
buttonFlip.onclick = function() {
    let i = 0;
    for (card of cards) {
        document.getElementById(i).style.backgroundImage = "";
        i = i + 1;
    }
};

// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
});