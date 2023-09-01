class Player {
    constructor(name) { //place holder for things to get passed in
        this.name = name;
        this.score = 0; 
        this.holding = [];
    }
}

let player1 = new Player('bitsy');

let player2 = new Player('tomas');
console.log(`player 1 is ${player1.name} and player 2 is ${player2.name}`);


class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
}

class Deck {
    constructor() {
        this.deck = []; 
        this.suits = ['h', 'd', 'c', 's'];
        this.ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        
        }
    
    //method to create the deck (52 cards)
    createDeck() {
        for (let i = 0; i < 13; i++) {
            
            for(let j = 0; j < 4; j++) {
                this.deck.push(new Card(this.suits[j], this.ranks[i]));
            }
        }

    
    }
    
    shuffle() {
        //let currentIndex = array.length, temporaryValue, randomIndex;
        let currentIndex = this.deck.length
        let temporaryValue
        let randomIndex
        //While there remain elements to shuffle..
        while (0 !== currentIndex) {
            //pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
    
            //and swap it with the current element.
            temporaryValue = this.deck[currentIndex];
            this.deck[currentIndex] = this.deck[randomIndex];
            this.deck[randomIndex] = temporaryValue;
        }
        return this.deck;
    }

    deal() { //method to deal - interact with the players object //slice in half
        player1.holding = this.deck.slice(0, 26); 
        player2.holding = this.deck.slice(26);

        
    }
}   

let tied=true; //boolean variable
while(tied==true)
{
    
    let matchDeck = new Deck();
    matchDeck.createDeck();
    matchDeck.shuffle();
    matchDeck.deal();
    
    //intialize the players' scores
     player1.score = 0;
     player2.score = 0;
    
     //let the 26 rounds begin
     for (let i = 0; i < 26; i++) {
        
     if (player1.holding[i].rank > player2.holding[i].rank) {
        player1.score += 1
      } else if (player1.holding[i].rank < player2.holding[i].rank) {
        player2.score += 1
      } 
     }

     tied = false;
    console.log(`Final scores: ${player1.name}: ${player1.score}, ${player2.name}: ${player2.score} hence:`)
     if (player1.score > player2.score) {
        console.log(`${player1.name} wins!`)
     } else if (player1.score < player2.score) {
    console.log(`${player2.name} wins!`)
     }
     else
     {
        console.log("its a tie lets go for another game");
        tied = true;
    }

}