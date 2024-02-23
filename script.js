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
// const start = `You examine the Town`; /*also town*/

const shore = "You examine the shore.";
const forest = "You examine the forest";
let currentLocation = "start";

// let locationData = [start, town, store, tavern, cave, marsh, mountain];

const locationData = {
  start: {
    message: "You examine the Town",
    options: [
      'Enter "Axes and Alms"',
      'Enter "The Last Dram"',
      "Venture Forth",
      "Examine",
    ],
    displayText:
      "Welcome to the Town of Sonir! You must travel through the land of Vaahl, and defeat the fowl beast that lurks in the shadows of Mount Kuur. Train hard, young knight! Your journey begins in the town square. where do you wish to go? Use the buttons to decide.",
  },
  town: {
    message: "You examine the Town",
    options: [
      'Enter "Axes and Alms"',
      'Enter "The Last Dram"',
      "Venture Forth",
      "Examine",
    ],
    displayText:
      "You return to the Town Square. What would you like to do next?",
  },
  store: {
    message: "You examine the store.",
    options: ["Buy items", "Sell items", "Return to Town"],
    displayText: `You have entered the store. An elderly dwarven male watches you from the counter.
    "Hello, young traveler.. Anything catch'n yer eye?"`,
  },
  // buyItems: {
  //   message: "examine content",
  //   options: ["placeholder"],
  //   displayText: `You take a look at what the dwarf has to sell.`,
  // },

  tavern: {
    message: "You examine the Tavern.",
    options: ["Buy a dram of Whiskey", "Ask for Work", "Return to Town"],
    displayText:
      "You enter the small tavern. There are a few other travelers at the tables. A human male with what looks to be a long healed burn scar across the left of his face nods in greeting. What will you do?",
  },
  plains: {
    message: "You examine the plains",
    options: [
      "Explore the Plains",
      "Venture further from Town",
      "Return to Town",
    ],
    displayText:
      "You step outside of the town gates to find gentle green plains ahead. The perfect start for our young adventurer! What will you do? (Plains Recommended level: 1)",
  },
  marsh: {
    message: "You examine the Marsh.",
  },
};

const handleNavigation = (location) => {
  currentLocation = location;
  text.innerText = locationData[currentLocation].displayText;
  handleBtnContent(...locationData[currentLocation].options);
};
// town functions

const goTown = (e) => {
  handleNavigation("town");
};

// store buttons
const goStore = (e) => {
  handleNavigation("store");
};

// Tavern functions
const goTavern = (e) => {
  handleNavigation("tavern");
};

// venture function

const ventureForth = (e) => {
  handleNavigation("plains");
};

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

const handleBtnContent = (one, two, three) => {
  btnOne.innerText = one;
  btnTwo.innerText = two;
  btnThree.innerText = three;
};

addEventListener("load", handleBtnContent(...locationData.start.options));

const handleBtnOne = (e) => {
  const content = e.target.innerText.toLowerCase();

  switch (content) {
    case 'enter "axes and alms"':
      goStore(e);
      break;
    case "buy items":
      buyItems();
      break;

    default:
      console.error(`No match found for: ${content}`);
      break;
  }
};

const handleBtnTwo = (e) => {
  const content = e.target.innerText.toLowerCase();

  switch (content) {
    case 'enter "the last dram"':
      goTavern(e);
      break;
  }
};

const handleBtnThree = (e) => {
  const content = e.target.innerText.toLowerCase();

  switch (content) {
    case "venture forth":
      ventureForth(e);
      break;

    case "return to town":
      goTown(e);
      break;
  }
};

//examineAll code
const handleBtnFour = (e) => {
  console.log(locationData[currentLocation].message);
  text.innerText = locationData[currentLocation].message;
};
