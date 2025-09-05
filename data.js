function setText (selector, text) {
    const el = document.querySelector(selector);
    if (el) {
        el.textContent = text;
    }
};


function populatePlayerNames() {
    setText(".player-one", 'Onana');
    setText(".player-two", 'Fredricson');
    setText(".player-three", 'Maguire');
    setText(".player-four", 'Heaven');
    setText(".player-five", 'Dalot');
    setText(".player-six", 'Mainoo');
    setText(".player-seven", 'Ugarte');
    setText(".player-eight", 'Dorgu');
    setText(".player-nine", 'Diallo');
    setText(".player-ten", 'Cunha');
    setText(".player-eleven", 'Sesko');
    setText(".player-twelve", 'Mbuemo');
    setText(".player-thirteen", 'Fernandes');
    setText(".player-fourteen", 'De Ligt');
    setText(".player-fifteen", 'Mount');
    setText(".player-sixteen", 'Zirkzee');
    setText(".player-seventeen", 'Leon');
    setText(".player-eighteen", 'Casemiro');
    setText(".player-nineteen", 'Heaton');
    setText(".player-twenty", 'Bayindir');
    setText(".player-twentyone", '');
    setText(".player-twentytwo", '');
};

function populateLastMatch() {
    setText(".home-team", 'Grimbsy');
    setText(".home-score", '2 (pens 12)');
    setText(".away-score", '2 (pens 11)');
    setText(".away-team", 'Man Utd');
    setText(".match-date", '27th August 2025');
    setText(".match-time", '20:00');
    setText(".match-review", 'A massive upset but fully deserved by Grimsby, this Man Utd team produced one of their worst ever performances, barely threating the Grimsby goal and fortunate to take the match to penalties in the end.');
};

function populateMyRatings() {
    setText(".myrating-one", 1);
    setText(".myrating-two", 4);
    setText(".myrating-three", 5);
    setText(".myrating-four", 4);
    setText(".myrating-five", 3);
    setText(".myrating-six", 5);
    setText(".myrating-seven", 4);
    setText(".myrating-eight", 4);
    setText(".myrating-nine", 4);
    setText(".myrating-ten", 4);
    setText(".myrating-eleven", 4);
    setText(".myrating-twelve", 5);
    setText(".myrating-thirteen", 5);
    setText(".myrating-fourteen", 6);
    setText(".myrating-fifteen", 5);
    setText(".myrating-sixteen", 4);
    setText(".myrating-seventeen", '');
    setText(".myrating-eighteen", '');
    setText(".myrating-nineteen", '');
    setText(".myrating-twenty", '');
    setText(".myrating-twentyone", '');
    setText(".myrating-twentytwo", '');
};

function populatePlayerReviews() {
    setText(".p-one-review", 'Awful! two huge mistakes for both Grimsby goals, alot of mishit passes, dived too early for every penalty and the times he got a touch to the ball he was not strong enough to keep it out');
    setText(".p-two-review", 'Worked hard but didnt look comfortable at all, booked at 36 mins. Subbed at half time.');
    setText(".p-three-review", 'Although both goals conceded were down to keeper errors the defence looked shaky all game, as the senior defender and captain he should be organising the defensive line better. Scored in the 89th min to level the match.');
    setText(".p-four-review", 'A tough game for the young defender, got more and more frustrated as the game went on, always seemed to be a few yards behind the other defenders. Subbed at 64th min.');
    setText(".p-five-review", 'Another poor showing for a player who seems to be struggling with the system, out of position defensively on multiple occasions and crosses into the box were awful.');
    setText(".p-six-review", 'Tried hard to put his mark on the game, passes were often out of sync with his teammates which could be down to lack of playing time recently. Got an assist for the first goal.');
    setText(".p-seven-review", 'Struggled to control the midfield, often bypassed by Grimsby\'s quick transitions. Subbed at half time.');
    setText(".p-eight-review", 'A poor showing from the young wingback, part of the out of shape defence and offered little going forward. Subbed at half time.');
    setText(".p-nine-review", 'A bad day at the office, alot of misplaced passes and poor control, continually looked frustraded all game, subbed at 82 mins.');
    setText(".p-ten-review", 'Tried to make things happen but nothing seemed to come off, poor penalty in the shootout capped off a bad day.');
    setText(".p-eleven-review", 'Saw very little of the ball as the team struggled to create chances.');
    setText(".p-twelve-review", 'Replaced Dorgu at half time. Good finish to bring Utd back into the game. Missed the crucial penalty in the shootout.');
    setText(".p-thirteen-review", 'Replaced Ugarte at half time. Had a couple of half chances but struggled to make a difference.');
    setText(".p-fourteen-review", 'Replaced Fredricson at half time. One of the better players for Utd, made the defence a bit more solid and looked the most threatening player going forward.');
    setText(".p-fifteen-review", 'Replaced Heaven at 64 mins. A lot of running but not many clear cut chances, provided alot of crosses which eventually led to the assist for Maguire\'s goal');
    setText(".p-sixteen-review", 'Replaced Diallo at 82 mins. Only real contribution was to get booked in the 87th min.');
    setText(".p-seventeen-review", '');
    setText(".p-eighteen-review", '');
    setText(".p-nineteen-review", '');
    setText(".p-twenty-review", '');
    setText(".p-twentyone-review", '');
    setText(".p-twentytwo-review", '');
};

document.addEventListener("DOMContentLoaded", function() {
    populatePlayerNames();
    populateLastMatch();
    populateMyRatings();
    populatePlayerReviews();
});




