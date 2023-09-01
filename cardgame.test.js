
let expect = chai.expect;

describe('MyFunction', function() {
    describe('#deal', function() {
        it('should divide the deck and deliver to each player', function() {
            let player1 = new Player ('bitsy');
            let player2 = new Player ('tomas');
            
            matchDeck.createDeck()
            matchDeck.shuffle()
            matchDeck.deal() 

            expect(player1.holding).to.be.a('array');
        }); 

        let matchDeck = new Deck ()
        it('length of player deck should equal 26', function() {
            expect(player2.holding.length).to.equal(26);
        });
    });
});

describe('createDeck', function() {
    let matchDeck = new Deck();
    it("should create a deck of 52 cards", function () {
                
        matchDeck.createDeck();
        expect(matchDeck.deck.length).to.equal(52);
    });
});


