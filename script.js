let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = [
  "stick",
  //   "dagger",
  //   "shortSword",
  //   "spear",
  //   "greatSword",
  //   "fireBlast",
];
// buttons
const btnOne = document.querySelector("#buttonOne");
const btnTwo = document.querySelector("#buttonTwo");
const btnThree = document.querySelector("#buttonThree");
const btnFour = document.querySelector("#buttonFour");

// stats and such
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

// examine options
const start = `You examine the Town`;
const town = `You examine the Town.`;
const store = "You examine the store.";
const tavern = "You examine the Tavern.";
const cave = "You examine the Cave.";
const marsh = "You examine the Marsh.";
const mountain = "You examine the Mountain";
let currentLocation = "start";

// let examineOptions = [start, town, store, tavern, cave, marsh, mountain];

const examineOptions = {
  start: {
    message: start,
  },
  store: {
    message: store,
  },
};

// town functions
const goTown = (e) => {
  // buttonFour.removeEventListener("click", examine);
  // text.innerText = `You stand in the town Square. What would you like to do?`;
  // buttonOne.addEventListener("click", goStore);
  // buttonOne.innerText = `Enter "Axes and Alms"`;
  // buttonTwo.addEventListener("click", goTavern);
  // buttonTwo.innerText = `Enter "The Last Dram" Tavern`;
  // buttonThree.addEventListener("click", ventureForth);
  // buttonThree.innerText = "Venture Forth";
  // buttonFour.addEventListener("click", function () {
  //   examine(town);
  // });
};

// store buttons
const goStore = (e) => {
  currentLocation = "store";
  text.innerText = `You have entered the store. An elderly dwarven male watches you from the counter.
        "Hello, young traveler.. Anything catch'n yer eye?"`;
  // buttonOne.addEventListener("click", buyItems);
  // buttonTwo.addEventListener("click", sellItems);
  // buttonThree.addEventListener("click", goTown);
  // buttonFour.addEventListener("click", examine);

  btnOne.innerText = "Buy items";
  btnTwo.innerText = "Sell items";
  btnThree.innerText = "Return to Town";
};

// Tavern functions
const goTavern = (e) => {
  text.innerText =
    "You enter the small tavern. There are a few other travelers at the tables. A human male with what looks to be a burn scar across the left of his face nods in greeting. What will you do?";
};
// marsh functions/cave/mountain

const ventureForth = (e) => {};

// secondary store functions
const buyItems = (e) => {
  console.log("Buying Items");
};
const sellItems = (e) => {
  console.log("Selling Items");
};

// //final boss code
// function fightFinalBoss() {
//   console.log("Fighting Final Boss.");
// }

// initialize buttons

// buttonOne.addEventListener("click", goStore);
btnOne.addEventListener("click", (e) => handleBtnOne(e));
btnTwo.addEventListener("click", (e) => handleBtnTwo(e));
btnThree.addEventListener("click", (e) => handleBtnThree(e));
btnFour.addEventListener("click", (e) => handleBtnFour(e));

const handleBtnOne = (e) => {
  const content = e.target.innerText.toLowerCase();

  switch (content) {
    case "enter axes and alms":
      goStore(e);
      break;
    case "buy items":
      buyItems();
      break;

    default:
      break;
  }
};

const handleBtnTwo = (e) => {};

const handleBtnThree = (e) => {};

//examineAll code
const handleBtnFour = (e) => {
  console.log(examineOptions[currentLocation].message);
  text.innerText = examineOptions[currentLocation].message;
};

// arrow or not arrow, pick 1
// btn or button, pick 1
