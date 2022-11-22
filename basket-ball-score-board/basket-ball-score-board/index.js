let homeStoreEl =document.getElementById("home");
let homeScore = 0;

function increaseHomeScoreOne(){
    homeScore += 1;
    homeStoreEl.textContent = homeScore;
}

function increaseHomeScoretwo(){
    homeScore += 2;
    homeStoreEl.textContent = homeScore;
}

function increaseHomeScorethree(){
    homeScore += 3;
    homeStoreEl.textContent = homeScore;
}

function homeFoul() {
    homeScore = 0;
    homeStoreEl.textContent = homeScore;
}


let guestStoreEl =document.getElementById("guest");
let guestScore = 0;

function increaseGuestScoreOne(){
    guestScore += 1;
    guestStoreEl.textContent = guestScore;
}

function increaseGuestScoretwo(){
    guestScore += 2;
    guestStoreEl.textContent = guestScore;
}

function increaseGuestScorethree(){
    guestScore += 3;
    guestStoreEl.textContent = guestScore;
}

function guestFoul() {
    guestScore = 0;
    guestStoreEl.textContent = guestScore;
}


function newGame() {
    guestScore = 0;
    homeScore = 0;
    homeStoreEl.textContent = homeScore;
    guestStoreEl.textContent = guestScore;
}