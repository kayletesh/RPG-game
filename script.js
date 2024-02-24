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
  text.innerHTML = locationData.displayText;
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

// examine function
// pass a string parameter into examine for each button
// set display text to the string parameter
const examine = (examineText) => {
  console.log(examineText);
  text.innerHTML = examineText;
};
// examine code ONLY

const examineOptions = (location) => {
  console.log("Examining...");
  handleNavigation(location.examineOptions);
  // text.innerHTML = location.examineText;
};

const goBack = (location) => {
  console.log(location);
  handleNavigation(location);
};

// set1 [buyItems, sellItems, giveDram, questBoard, goPlains, goPath2]

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
    /*onLoad*/ name: "start",
    btnContents: [
      'Enter "Axes and Alms"',
      'Enter "The Last Dram"',
      "Set Forth",
      "Examine The Village",
    ],
    btnFunctions: [
      goStore,
      goTavern,
      setForth,
      function () {
        examineOptions(locationData[0]);
      },
    ],
    displayText:
      "<span><strong>Welcome</strong> young adventurer, to the village of Sonir! Strange creatures have appeared beyond the village gates. The king calls for aid! <br><strong>The Bone King</strong> has risen once more! You must train hard, and venture far from home to help save the kingdom from this terrible threat.<br><br> What do you wish to do?</span>",
    examineOptions: {
      btnContents: [
        'Examine "Axes and Alms"',
        'Examine "The Last Dram"',
        "Examine Village Gates",
        "Return",
      ],
      btnFunctions: [
        function () {
          examine("Examining the storeFront");
        },
        function () {
          examine("Examining the Bar");
        },
        function () {
          examine("examining village gates");
        },
        function () {
          goBack(locationData[1]);
        },
      ],
      displayText: "<span>What would you like to examine?</span>",
    },
    // examineText:
    //   '<span>Upon examining the village you notice three things.<br> To your left, the village\'s only trading post; <strong>"Axes and Alms"</strong>.<br> To your right, a small tavern; <strong>"The Last Dram"</strong>, A sign near the door reads: <br> "Looking for work? Willing to brave the world outside the walls? Inquire inside." <br>Ahead of you are the village gates; the only way in or out of Sonir.</span>',
  },
  // base set[town1, store1, bar1, path1]
  {
    /*Sonir */ name: "Sonir",
    btnContents: [
      'Enter "Axes and Alms"',
      'Enter "The Last Dram"',
      "Set Forth",
      "Examine the Village",
    ],
    btnFunctions: [
      goStore,
      goTavern,
      setForth,
      function () {
        examineOptions(locationData[1]);
      },
    ],
    displayText:
      "<span>You have returned to the village square.<br><br> What will you do next?</span>",
    examineOptions: {
      btnContents: [
        'Examine "Axes and Alms"',
        'Examine "The Last Dram"',
        "Examine Village Gates",
        "Return",
      ],
      btnFunctions: [
        function () {
          examine("Examining the storeFront");
        },
        function () {
          examine("Examining the Bar");
        },
        function () {
          examine("examining village gates");
        },
        function () {
          goBack(locationData[1]);
        },
      ],
      displayText: "<span>What would you like to examine?</span>",
    },
  },
  {
    /*axes and alms*/ name: "Axes and Alms",
    btnContents: [
      "Buy Items",
      "Sell Items",
      "Return to Village",
      "Examine the Store",
    ],
    btnFunctions: [
      buyItems,
      sellItems,
      goTown,
      function () {
        examineOptions(locationData[2]);
      },
    ],
    displayText:
      '<span>You duck into the shop to find the storefront is not much larger than a halfling\'s hole. There are two small doors leading off to different rooms on either side; both with large signs stating <strong>"NO ENTRY"</strong> <br>An elderly dwarven male watches you from the counter. He speaks in a low, gruff voice: <br>"Hello, young one... Anything catch\'n yer eye?"<br><br> What will you do next?</span>',
    examineOptions: {
      btnContents: [
        "Examine the Room",
        "examine the dwarf",
        "speak to the dwarf",
        "return",
      ],
      btnFunctions: [
        function () {
          examine("examining the room");
        },
        function () {
          examine("examining the dwarf");
        },
        function () {
          examine("speaking to the dwarf");
        },
        function () {
          goBack(locationData[1]);
        },
      ],
      displayText: "<span>What would you like to examine?</span>",
    },
  },
  {
    /*The Last Dram*/ name: "The Last Dram",
    btnContents: [
      "Buy a Dram of Ale",
      "Check the Quest Board",
      "Return to Village",
      "Examine the Tavern",
    ],
    btnFunctions: [
      // these still need programming
      giveDram,
      goQuestBoard,
      goTown,
      function () {
        examineOptions(locationData[3]);
      },
    ],
    displayText:
      "<span>You enter the small tavern. There are a few other travelers at the tables. A human male with what looks to be a long healed burn scar across the right side of his face nods in a silent greeting.<br><br> What will you do?</span>",
    examineOptions: {
      btnContents: [
        "Examine your surroundings",
        "Examine the barkeep",
        "Speak to the Barkeep",
        "return",
      ],
      btnFunctions: [
        function () {
          examine("examining surroundings");
        },
        function () {
          examine("examining the barkeep");
        },
        function () {
          examine("speaking to barkeep");
        },
        function () {
          goBack(locationData[3]);
        },
      ],
      displayText: "<span>What would you like to examine?</span>",
    },
  },
  {
    /*pathOne */ name: "pathOne",
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
        examineOptions(locationData[4]);
      },
    ],
    displayText:
      "<span>(<strong>Plains Recommended level: 1 )</strong><br>You venture past the village gates to find gentle field of green ahead; the perfect start for our young adventurer! <br>A well kept path cuts through the plains, leading to a crossroads up ahead. So long as you keep to the path, you will be safe, but fortune favors the bold...<br><br> What will you do next?</span>",
    examineOptions: {
      btnContents: [
        "Examine the Plains",
        "Examine the Path Ahead",
        "Examine emberBerry patch",
        "return",
      ],
      btnFunctions: [
        function () {
          examine("examining the plains");
        },
        function () {
          examine("examining the path ahead");
        },
        function () {
          examine("examining the berry Patch");
        },
        function () {
          goBack(locationData[4]);
        },
      ],
      displayText: "<span>What would you like to examine?</span>",
    },
  },
  /*all examine function options*/

  // setOne [storeOptions, barOptions, ]
];

addEventListener("load", handleNavigation(locationData[0]));
