class Card {
    constructor(suit, name, value){
        this.suit = suit;
        this.name = name; //String val
        this.value = value; //Numeric val
    }
    show(){
        console.log(`${this.name} of ${this.suit}`);
    }
}

class Deck{
    constructor(){
        this.deck = [];
        this.reset();
    }
    reset(){       
        this.deck = [];
        
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const names = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six','Seven', 'Eigtht', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
    
        for(let suit in suits){
            for(let i = 0; i < names.length; i++){
                const card = new Card(suits[suit], names[i], i + 1);
                this.deck.push(card);
            }
        }
    }
    shuffle(){
        let m = this.deck.length, temp, i;

        while(m){
            i = Math.floor(Math.random() * m--);

            temp = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = temp;
        }
    }
    deal(){
        return this.deck.pop();
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    takeCard(deck){
        let card = deck.deal();
        this.hand.push(card);
        card.show();
    }
    discard(index){
        this.hand.splice(index - 1, 1); // - 1 because most users will enter 1 when they want to discard thier first card.
    }
    
    showHand(){
        console.log("You have: ")
        for(let i = 0; i < this.hand.length; i++){
            this.hand[i].show();
        }
        console.log("In your hand.")
    }
}

const deck1 = new Deck();
deck1.shuffle();
const bob = new Player("Bob");
bob.takeCard(deck1);
bob.takeCard(deck1);
bob.takeCard(deck1);
bob.showHand();
bob.discard(2)
bob.showHand();