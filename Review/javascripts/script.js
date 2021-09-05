const player1 = {
    id: 1,
    name: "Damian Lillard",
    club: "Portland Trailblazers",
    img: "/images/dame.jpg",
    text: "Damian Lamonte Ollie Lillard Sr. (born July 15, 1990) is an American professional basketball player for the Portland Trail Blazers of the National Basketball Association (NBA). He played college basketball for the Weber State Wildcats and earned third-team All-American honors in 2012. After being selected by Portland with the sixth overall pick in the 2012 NBA draft, Lillard was unanimously voted the NBA Rookie of the Year."
}

const player2 = {
    id: "2",
    name: "Stephen Curry",
    club: "Golden State Warriors",
    img: "/images/curry.jpg",
    text: "Wardell Stephen Curry II (/ˈstɛfən/ STEF-ən; born March 14, 1988) is an American professional basketball player for the Golden State Warriors of the National Basketball Association (NBA). He plays the point guard position. Many analysts and players have called him the greatest shooter in NBA history.  He is credited with revolutionizing the game of basketball by inspiring teams to regularly utilize the three-point shot. A seven-time NBA All-Star, Curry has been named the NBA Most Valuable Player (MVP) twice and has won three NBA championships with the Warriors."
}

const player3 = {
    id: "3",
    name: "Kevin Durant",
    club: "Brooklyn Nets",
    img: "/images/durant.jpg",
    text: "Kevin Wayne Durant (/dəˈrænt/; born September 29, 1988), also known simply by his initials KD, is an American professional basketball player for the Brooklyn Nets of the National Basketball Association (NBA). He played one season of college basketball for the Texas Longhorns, and was selected as the second overall pick by the Seattle SuperSonics in the 2007 NBA draft. He played nine seasons with the franchise, which became the Oklahoma City Thunder in 2008, before signing with the Golden State Warriors in 2016, winning back-to-back championships in 2017 and 2018."
}

const player4 = {
    id: "4",
    name: "Lebron James",
    club: "Los Angeles Lakers",
    img: "/images/lebron.jpg",
    text: "LeBron Raymone James Sr. (/ləˈbrɒn/; born December 30, 1984) is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA). Nicknamed King James, he is widely considered one of the greatest players in NBA history and is frequently compared to Michael Jordan in debates over the greatest basketball player ever. The only player to have won NBA championships with three franchises (the Cleveland Cavaliers, the Miami Heat, and the Lakers) as NBA Finals MVP,"
}

const player5 = {
    id: "5",
    name:"Nikola Jokic",
    club: "Denver Nuggets",
    img: "/images/jokic.jpg",
    text: "Nikola Jokić (Serbian Cyrillic: Никола Јокић, pronounced [nǐkola jôkitɕ]; born February 19, 1995) is a Serbian professional basketball player for the Denver Nuggets of the National Basketball Association (NBA) who plays the center position. The three-time NBA All-Star has been named to the All-NBA Team on three occasions (including two first-team selections), and has won the NBA Most Valuable Player Award for the 2020–21 NBA season. He also represents the Serbian national team."
}

const players = [player1, player2, player3, player4,player5];

//DOM
const img = document.querySelector('.container__review-image');
const playerName = document.querySelector('.container__review-player');
const club = document.querySelector('.container__review-club');
const info = document.querySelector('.container__review-info');

const prevBtn = document.querySelector('.container__button-prev');
const nextBtn = document.querySelector('.container__button-next');
const randomBtn = document.querySelector('.container__random');

// set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', function(){
    showPlayer(currentItem);
});

// show player based on item
function showPlayer(player){
    const item = players[player];
    img.src = item.img;
    playerName.textContent = item.name;
    club.textContent = item.club;
    info.textContent = item.text;
};

// show next person
nextBtn.addEventListener('click', function(){
    currentItem = currentItem + 1;
    if(currentItem > players.length - 1){
        currentItem = 0;
    }
    showPlayer(currentItem);
});

//show previous player
prevBtn.addEventListener('click', function() {
    currentItem = currentItem - 1;
    if (currentItem < 0){
        currentItem = players.length - 1;
    }
    showPlayer(currentItem);
});

// show random player
randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * players.length);
    showPlayer(currentItem);
});