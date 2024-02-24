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

//   // buyItems: {
//   //   message: "examine content",
//   //   btnOptions: ["placeholder"],
//   //   displayText: `You take a look at what the dwarf has to sell.`,
//   // },

//   marsh: {
//     message: "You examine the Marsh.",
//   },
// };

function handleNavigation(locationData) {
  btnOne.innerText = locationData.btnContents[0];
  btnTwo.innerText = locationData.btnContents[1];
  btnThree.innerText = locationData.btnContents[2];
  btnFour.innerText = locationData.btnContents[3];
  btnOne.onclick = locationData.btnFunctions[0];
  btnTwo.onclick = locationData.btnFunctions[1];
  btnThree.onclick = locationData.btnFunctions[2];
  btnFour.onclick = locationData.btnFunctions[3];
  text.innerText = locationData.displayText;
}

// baseSet [Town1, store1, bar1, path1]
const goTown = (e) => {
  console.log("Returning to the Town of Sonir");
  handleNavigation(locationData[1]);
};

const goStore = (e) => {
  console.log("Entering Store");
  handleNavigation(locationData[2]);
};

const goTavern = (e) => {
  console.log("Entering Tavern");
  handleNavigation(locationData[3]);
};

const setForth = (e) => {
  console.log("Setting out for an Adventure!!");
  handleNavigation(locationData[4]);
};

// examine code ONLY

const examine = (location) => {
  console.log("Examining...");
  text.innerText = location.examineText;
};

// set2 [buyItems, sellItems, giveDram, questBoard, goPlains, goPath2]

const buyItems = (e) => {
  console.log("Buying Items");
};
const sellItems = (e) => {
  console.log("Selling Items");
};

const giveDram = (e) => {
  console.log("You Purchased a Dram");
};

const goQuestBoard = (e) => {
  console.log("Checking for quests...");
};

const goPlains = (e) => {
  console.log("Going to Plains");
};

const goPathTwo = (e) => {
  console.log("Going to Path Two!");
};

// initialize buttons

const handleBtnContent = (one, two, three) => {
  btnOne.innerText = one;
  btnTwo.innerText = two;
  btnThree.innerText = three;
};

const locationData = [
  {
    name: "start",
    btnContents: [
      'Enter "Axes and Alms"',
      'Enter "The Last Dram"',
      "Set Forth",
      "Examine",
    ],
    btnFunctions: [
      goStore,
      goTavern,
      setForth,
      function () {
        examine(locationData[0]);
      },
    ],
    displayText:
      "Welcome to the Town of Sonir! You must travel through the land of Vaahl, and defeat the fowl beast that lurks in the shadows of Mount Kuur. Train hard, young knight! Your journey begins in the town square. where do you wish to go? Use the buttons to decide.",
    examineText: "You examine the Town.",
  },

  {
    // base set[town1, store1, bar1, path1]
    // town one
    name: "Sonir",
    btnContents: [
      'Enter "Axes and Alms"',
      'Enter "The Last Dram"',
      "Set Forth",
      "Examine",
    ],
    btnFunctions: [
      goStore,
      goTavern,
      setForth,
      function () {
        examine(locationData[1]);
      },
    ],
    displayText:
      "You return to the Town Square. What would you like to do next?",
    examineText: "You Examine the Town.",
  },

  {
    // store one
    name: "Axes and Alms",
    btnContents: ["Buy items", "Sell items", "Return to Town", "Examine"],
    btnFunctions: [
      buyItems,
      sellItems,
      goTown,
      function () {
        examine(locationData[2]);
      },
    ],
    displayText: `You have entered the store. An elderly dwarven male watches you from the counter. "Hello, young traveler.. Anything catch'n yer eye?"`,
    examineText: "You Examine the Store.",
  },
  {
    // bar one
    name: "The Last Dram",
    btnContents: [
      "Buy a Dram of Ale",
      "Check the Quest Board",
      "Return to Town",
      "Examine",
    ],
    btnFunctions: [
      // these still need programming
      giveDram,
      goQuestBoard,
      goTown,
      function () {
        examine(locationData[3]);
      },
    ],
    displayText:
      "You enter the small tavern. There are a few other travelers at the tables. A human male with what looks to be a long healed burn scar across the left of his face nods in greeting. What will you do?",
    examineText: "You examine the Tavern.",
  },
  {
    name: "pathOne",
    btnContents: [
      "Explore the Plains",
      "Venture Further From Sonir",
      "Return to Sonir",
      "Examine the Plains",
    ],
    btnFunctions: [
      goPlains,
      goPathTwo,
      goTown,
      function () {
        examine(locationData[4]);
      },
    ],
    displayText:
      "You step outside of the town gates to find gentle green plains ahead. The perfect start for our young adventurer! What will you do? (Plains Recommended level: 1)",
    examineText: "You examine the Plains",
  },

  // setOne [storeOptions, barOptions, ]
];

addEventListener("load", handleNavigation(locationData[0]));
